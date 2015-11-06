package org.jahia.modules.template.importer.rest;

import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by kevan on 06/11/15.
 */
public class TemplateImporterApp extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> classes = new HashSet<>();
        classes.add(TemplateImporterEndPoint.class);
        return classes;
    }
}