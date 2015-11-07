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
public class Export {
    @XmlElement
    String projectName;
    @XmlElement
    String module;
    @XmlElement
    String moduleVersion;
    @XmlElement
    String folderOfAssets;

    public Export() {
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getModule() {
        return module;
    }

    public void setModule(String module) {
        this.module = module;
    }

    public String getModuleVersion() {
        return moduleVersion;
    }

    public void setModuleVersion(String moduleVersion) {
        this.moduleVersion = moduleVersion;
    }

    public String getFolderOfAssets() {
        return folderOfAssets;
    }

    public void setFolderOfAssets(String folderOfAssets) {
        this.folderOfAssets = folderOfAssets;
    }
}
