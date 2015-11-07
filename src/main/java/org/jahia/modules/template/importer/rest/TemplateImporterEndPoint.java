package org.jahia.modules.template.importer.rest;

import org.jahia.api.Constants;
import org.jahia.modules.template.importer.rest.model.Export;
import org.jahia.registries.ServicesRegistry;
import org.jahia.services.content.*;
import org.jahia.services.content.decorator.JCRFileNode;
import org.jahia.services.usermanager.JahiaUser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.RepositoryException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

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
                        JCRNodeWrapper projectNode = session.getNode("/sites/systemsite/files/ti-projects/" + export.getProjectName());
                        JCRNodeWrapper moduleNode = session.getNode("/modules/" + export.getModule() + "/" + export.getModuleVersion());
                        JCRNodeWrapper folderOfAssetsNode = projectNode.getNode(export.getFolderOfAssets());
                        JCRNodeWrapper templateFile = moduleNode.getNode("templates/files");

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

                        return null;
                    }
                });
            } catch (RepositoryException e) {
                e.printStackTrace();
            }
        }
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