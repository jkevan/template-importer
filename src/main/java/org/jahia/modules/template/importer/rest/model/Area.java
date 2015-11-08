package org.jahia.modules.template.importer.rest.model;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Created by kevan on 07/11/15.
 */
@XmlRootElement
@XmlAccessorType(XmlAccessType.NONE)
public class Area {
    @XmlElement
    String content;
    @XmlElement
    String viewType;
    @XmlElement
    boolean createDefinition;

    public Area() {
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getViewType() {
        return viewType;
    }

    public void setViewType(String viewType) {
        this.viewType = viewType;
    }

    public boolean isCreateDefinition() {
        return createDefinition;
    }

    public void setCreateDefinition(boolean createDefinition) {
        this.createDefinition = createDefinition;
    }
}
