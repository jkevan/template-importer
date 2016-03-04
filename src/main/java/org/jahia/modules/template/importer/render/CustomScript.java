package org.jahia.modules.template.importer.render;

import org.jahia.data.templates.JahiaTemplatesPackage;
import org.jahia.services.render.RenderContext;
import org.jahia.services.render.RenderException;
import org.jahia.services.render.Resource;
import org.jahia.services.render.scripting.RequestDispatcherScript;
import org.jahia.utils.StringResponseWrapper;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by jkevan on 04/03/2016.
 */
public class CustomScript extends RequestDispatcherScript {
    JahiaTemplatesPackage jahiaTemplatesPackage;
    String viewPath;

    public CustomScript(String viewPath, JahiaTemplatesPackage jahiaTemplatesPackage) {
        super(null);
        this.viewPath = viewPath;
        this.jahiaTemplatesPackage = jahiaTemplatesPackage;
    }

    public String execute(Resource resource, RenderContext context) throws RenderException {
        HttpServletRequest request = context.getRequest();
        HttpServletResponse response = context.getResponse();
        RequestDispatcher rd = request.getRequestDispatcher(viewPath);

        Object oldModule = request.getAttribute("currentModule");
        request.setAttribute("currentModule", jahiaTemplatesPackage);

        StringResponseWrapper wrapper = new StringResponseWrapper(response);
        try {
            rd.include(request, wrapper);
        } catch (ServletException e) {
            while (e.getRootCause() instanceof ServletException) {
                e = (ServletException) e.getRootCause();
            }
            if (e.getRootCause() instanceof RenderException) {
                throw (RenderException)e.getRootCause();
            }
            throw new RenderException(e.getRootCause() != null ? e.getRootCause() : e);
        } catch (IOException e) {
            throw new RenderException(e);
        } finally {
            request.setAttribute("currentModule", oldModule);
        }
        try {
            return wrapper.getString();
        } catch (IOException e) {
            throw new RenderException(e);
        }
    }
}
