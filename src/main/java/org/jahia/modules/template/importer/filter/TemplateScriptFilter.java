package org.jahia.modules.template.importer.filter;

import org.eclipse.gemini.blueprint.context.BundleContextAware;
import org.jahia.data.templates.JahiaTemplatesPackage;
import org.jahia.modules.template.importer.render.CustomScript;
import org.jahia.services.render.*;
import org.jahia.services.render.filter.AbstractFilter;
import org.jahia.services.render.filter.RenderChain;
import org.jahia.services.render.scripting.RequestDispatcherScript;
import org.jahia.services.render.scripting.Script;
import org.jahia.services.templates.JahiaTemplateManagerService;
import org.jahia.settings.SettingsBean;
import org.osgi.framework.BundleContext;
import org.slf4j.profiler.Profiler;
import org.springframework.util.StopWatch;

import javax.servlet.http.HttpServletRequest;
import java.util.Properties;
import java.util.Stack;

/**
 * Created by jkevan on 04/03/2016.
 */
public class TemplateScriptFilter  extends AbstractFilter {

    JahiaTemplateManagerService jahiaTemplateManagerService;

    @Override
    public String prepare(RenderContext renderContext, Resource resource, RenderChain chain) throws Exception {
        Script script = new CustomScript(resource.getNode().getProperty("j:staticTemplate").getString(),
                jahiaTemplateManagerService.getTemplatePackageRegistry().lookupById("template-importer"));

        renderContext.getResourcesStack().push(resource);
        String outputString = null;
        try {
            outputString = script.execute(resource, renderContext);
        } finally {
            renderContext.getResourcesStack().pop();
        }
        return outputString.trim();
    }

    public JahiaTemplateManagerService getJahiaTemplateManagerService() {
        return jahiaTemplateManagerService;
    }

    public void setJahiaTemplateManagerService(JahiaTemplateManagerService jahiaTemplateManagerService) {
        this.jahiaTemplateManagerService = jahiaTemplateManagerService;
    }
}
