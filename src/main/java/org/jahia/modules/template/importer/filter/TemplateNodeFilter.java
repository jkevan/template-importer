package org.jahia.modules.template.importer.filter;

import org.jahia.services.render.*;
import org.jahia.services.render.filter.AbstractFilter;
import org.jahia.services.render.filter.RenderChain;
import org.slf4j.Logger;

/**
 * Created by jkevan on 02/03/2016.
 * CALL only when tiStaticPage is display as main ressource
 */
public class TemplateNodeFilter extends AbstractFilter{
    private static Logger logger = org.slf4j.LoggerFactory.getLogger(TemplateNodeFilter.class);

    public String prepare(RenderContext renderContext, Resource resource, RenderChain chain) throws Exception {
        Resource wrapperResource = new Resource(resource.getNode(), resource.getTemplateType(), "default", Resource.CONFIGURATION_WRAPPER);
        return RenderService.getInstance().render(wrapperResource, renderContext);
    }
}
