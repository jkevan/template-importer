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
    String definition;

    public Area() {
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getDefinition() {
        return definition;
    }

    public void setDefinition(String definition) {
        this.definition = definition;
    }
}
