package org.jahia.modules.template.importer.filter;

import org.jahia.services.render.RenderContext;
import org.jahia.services.render.Resource;
import org.jahia.services.render.filter.AbstractFilter;
import org.jahia.services.render.filter.RenderChain;

/**
 * Created by jkevan on 04/03/2016.
 */
public class TemplateScriptFilter  extends AbstractFilter {
    @Override
    public String prepare(RenderContext renderContext, Resource resource, RenderChain chain) throws Exception {
        return "YOLOOO";
    }
}
