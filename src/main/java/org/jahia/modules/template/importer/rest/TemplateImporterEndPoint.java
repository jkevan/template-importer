package org.jahia.modules.template.importer.rest;

import org.jahia.api.Constants;
import org.jahia.registries.ServicesRegistry;
import org.jahia.services.content.JCRCallback;
import org.jahia.services.content.JCRSessionWrapper;
import org.jahia.services.content.JCRTemplate;
import org.jahia.services.usermanager.JahiaUser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.RepositoryException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

/**
 * Created by kevan on 06/11/15.
 */
@Path("/api/ti/v1")
@Produces(MediaType.APPLICATION_JSON)
public class TemplateImporterEndPoint {
    private static final Logger logger = LoggerFactory.getLogger(TemplateImporterEndPoint.class);

    @Context
    HttpServletRequest httpServletRequest;

    @GET
    public String test() {
        return "test success";
    }

    @GET
    @Path("/export/{project}/{module}/{version}")
    public void exportProjectToModule(@PathParam("project") String project, @PathParam("module") String module, @PathParam("module") String version) {
        JahiaUser user = getCurrentUser();
        if(user != null) {
            try {
                JCRTemplate.getInstance().doExecuteWithSystemSessionAsUser(user, Constants.EDIT_WORKSPACE, null, new JCRCallback<Void>() {
                    @Override
                    public Void doInJCR(JCRSessionWrapper jcrSessionWrapper) throws RepositoryException {
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