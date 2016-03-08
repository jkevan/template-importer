package org.jahia.modules.template.importer.rest;

import org.apache.commons.id.uuid.UUID;
import org.apache.commons.lang.StringUtils;
import org.jahia.api.Constants;
import org.jahia.modules.template.importer.rest.model.Area;
import org.jahia.modules.template.importer.rest.model.Bigtext;
import org.jahia.modules.template.importer.rest.model.Export;
import org.jahia.modules.template.importer.rest.model.PageExport;
import org.jahia.registries.ServicesRegistry;
import org.jahia.services.content.*;
import org.jahia.services.content.decorator.JCRFileNode;
import org.jahia.services.usermanager.JahiaUser;
import org.jahia.settings.SettingsBean;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.PathNotFoundException;
import javax.jcr.RepositoryException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Locale;

/**
 * Created by kevan on 06/11/15.
 */
@Path("/api/ti/v1")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TemplateImporterEndPoint {

    private static final Logger logger = LoggerFactory.getLogger(TemplateImporterEndPoint.class);

    @Context
    HttpServletRequest httpServletRequest;

    @GET
    public String test() {
        return "test success";
    }

    @POST
    @Path("/export")
    public void exportProjectToModule(final Export export) {
        JahiaUser user = getCurrentUser();
        if(user != null) {
            try {
                JCRTemplate.getInstance().doExecuteWithSystemSessionAsUser(user, Constants.EDIT_WORKSPACE, null, new JCRCallback<Void>() {
                    @Override
                    public Void doInJCR(JCRSessionWrapper session) throws RepositoryException {
                        JCRNodeWrapper projectNode;
                        try {
                            projectNode = session.getNode("/sites/systemsite/files/ti-projects/" + export.getProjectName());
                        } catch (PathNotFoundException e) {
                            throw new IllegalArgumentException("Template importer project not found");
                        }

                        JCRNodeWrapper moduleNode;
                        try {
                            moduleNode = session.getNode("/modules/" + export.getModule() + "/" + export.getModuleVersion());
                        } catch (PathNotFoundException e) {
                            throw new IllegalArgumentException("Module not found");
                        }

                        if(!moduleNode.hasNode("sources")) {
                            throw new IllegalArgumentException("Module " + export.getModule() + " don't have mounted sources");
                        }

                        JCRNodeWrapper folderOfAssetsNode = projectNode.getNode(export.getFolderOfAssets());
                        JCRNodeWrapper templateFile = moduleNode.getNode("templates/files");
                        JCRNodeWrapper resourcesNode = moduleNode.getNode("sources/src/main/resources");

                        if(!resourcesNode.hasNode("javascript")) {
                            resourcesNode.addNode("javascript", "jnt:javascriptFolder");
                        }

                        if(!resourcesNode.hasNode("css")) {
                            resourcesNode.addNode("css", "jnt:cssFolder");
                        }

                        if(!resourcesNode.hasNode("jnt_template")) {
                            resourcesNode.addNode("jnt_template", "jnt:cssFolder");
                        }

                        JCRNodeIteratorWrapper assets = folderOfAssetsNode.getNodes();
                        while (assets.hasNext()){
                            JCRFileNode asset = (JCRFileNode) assets.next();
                            String contentType = asset.getFileContent().getContentType();
                            if("text/javascript".equals(contentType)) {
                                asset.copy(moduleNode.getPath() + "/sources/src/main/resources/javascript");
                            } else if("text/css".equals(contentType)) {
                                asset.copy(moduleNode.getPath() + "/sources/src/main/resources/css");
                            } else {
                                templateFile.uploadFile(asset.getName(), asset.getFileContent().downloadFile(), contentType);
                            }
                        }

                        createViewForType(resourcesNode, "jnt:template", export.getTemplate(), export.getTemplateName());
                        for (Area area : export.getAreas()) {
                            createViewForType(resourcesNode, area.getViewType(), area.getContent(), null);
                            if(area.isCreateDefinition()) {
                                createDefinition(resourcesNode, area.getViewType());
                            }
                        }

                        session.save();
                        return null;
                    }
                });
            } catch (RepositoryException e) {
                e.printStackTrace();
            }
        }
    }

    @POST
    @Path("/exportPage")
    public void exportProjectAsStaticPage(final PageExport export) {

        final String viewName = "/tiExportStaticTemplate" + UUID.randomUUID() + ".jsp";
        String path =  SettingsBean.getInstance().getServletContext().getRealPath(viewName);
        try {
            FileWriter fw = new FileWriter(path);
            fw.write(export.getTemplate());
            fw.close();
        } catch (IOException e) {
            logger.error(e.getMessage(), e);
        }

        JahiaUser user = getCurrentUser();
        if(user != null) {
            try {
                // TODO hardcoded locale
                JCRTemplate.getInstance().doExecuteWithSystemSessionAsUser(user, Constants.EDIT_WORKSPACE, Locale.ENGLISH, new JCRCallback<Void>() {
                    @Override
                    public Void doInJCR(JCRSessionWrapper session) throws RepositoryException {

                        JCRNodeWrapper projectNode;
                        try {
                            projectNode = session.getNode("/sites/systemsite/files/ti-projects/" + export.getProjectName());
                        } catch (PathNotFoundException e) {
                            throw new IllegalArgumentException("Template importer project not found");
                        }

                        JCRNodeWrapper folderOfAssetsNode = projectNode.getNode(export.getFolderOfAssets());


                        // page
                        JCRNodeWrapper parentPage = session.getNode(export.getParentPage());
                        JCRNodeWrapper staticPage = parentPage.addNode(export.getPageName(), "jnt:tiStaticPage");
                        staticPage.setProperty("j:templateName", "default");
                        staticPage.setProperty("j:staticTemplate", viewName);
                        staticPage.setProperty("jcr:title", export.getPageName());


                        // assets
                        JCRNodeWrapper fileFolder = staticPage.addNode("files", "jnt:folder");
                        JCRNodeIteratorWrapper assets = folderOfAssetsNode.getNodes();
                        while (assets.hasNext()){
                            JCRFileNode asset = (JCRFileNode) assets.next();
                            asset.copy(fileFolder.getPath());
                        }
                        session.save();

                        // bigtexts
                        if(export.getBigtexts() != null && export.getBigtexts().size() > 0) {
                            for (Bigtext bigtext : export.getBigtexts()) {
                                JCRNodeWrapper contentList = staticPage.addNode(bigtext.getArea(), "jnt:contentList");
                                JCRNodeWrapper bigtextNode = contentList.addNode(bigtext.getName(), "jnt:bigText");
                                bigtextNode.setProperty("text", bigtext.getContent());
                            }
                        }
                        session.save();
                        return null;
                    }
                });
            } catch (RepositoryException e) {
                e.printStackTrace();
            }
        }
    }

    private void createViewForType (JCRNodeWrapper resourcesNode, String type, String content, String view) throws RepositoryException {
        String normalizedNodeTypeName = type.replace(":", "_");
        JCRNodeWrapper nodeTypeFolderNode = getOrCreateNode(resourcesNode, normalizedNodeTypeName, "jnt:nodeTypeFolder");
        JCRNodeWrapper templateTypeFolderNode = getOrCreateNode(nodeTypeFolderNode, "html", "jnt:templateTypeFolder");

        String viewFileName = StringUtils.substringAfterLast(type, ":") + (view != null ? ("." + view) : "") + ".jsp";
        if(templateTypeFolderNode.hasNode(viewFileName)) {
            logger.error("Can't create view " + viewFileName + ", already exist");
        } else {
            JCRNodeWrapper viewNode = templateTypeFolderNode.addNode(viewFileName, "jnt:viewFile");
            viewNode.setProperty("sourceCode", content);
            viewNode.setProperty("nodeTypeName", type);
        }
    }

    private void createDefinition(JCRNodeWrapper resourcesNode, String type) throws RepositoryException {
        JCRNodeWrapper metainfNode = getOrCreateNode(resourcesNode, "META-INF", "jnt:metaInfFolder");
        JCRNodeWrapper definitionNode = getOrCreateNode(metainfNode, "definitions.cnd", "jnt:definitionFile");

        if(definitionNode.hasNode(type)){
            logger.error("Can't create definition " + type + ", already exist");
        } else {
            JCRNodeWrapper definitionTypeNode = definitionNode.addNode(type, "jnt:primaryNodeType");
            definitionTypeNode.setProperty("j:supertype", "jnt:content");
            definitionTypeNode.setProperty("j:isAbstract", false);
            definitionTypeNode.setProperty("j:hasOrderableChildNodes", false);
            definitionTypeNode.setProperty("j:isQueryable", true);
            definitionTypeNode.setProperty("j:mixins", new String[]{"jmix:siteComponent", "mix:title"});
        }
    }

    private JCRNodeWrapper getOrCreateNode(JCRNodeWrapper parentNode, String name, String type) throws RepositoryException {
        JCRNodeWrapper node;
        if(!parentNode.hasNode(name)) {
            node = parentNode.addNode(name, type);
        } else {
            node = parentNode.getNode(name);
        }
        return node;
    }

    public JahiaUser getCurrentUser() {
        JahiaUser jahiaUser = null;
        HttpSession session = httpServletRequest.getSession(false);
        if (session != null) {
            try {
                jahiaUser = (JahiaUser) session.getAttribute(Constants.SESSION_USER);
            } catch (IllegalStateException ise) {
                // ignore this error that happens if the session was invalidated
            }
        }
        if (jahiaUser != null) {
            jahiaUser =
                    ServicesRegistry.getInstance().getJahiaUserManagerService().lookupUserByKey(jahiaUser.getUserKey()).getJahiaUser();
        }
        return jahiaUser;
    }
}