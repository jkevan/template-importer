package org.jahia.modules.template.importer.rest.model;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

/**
 * Created by jkevan on 03/03/2016.
 */
@XmlRootElement
@XmlAccessorType(XmlAccessType.NONE)
public class PageExport {
    @XmlElement
    String projectName;
    @XmlElement
    String pageName;
    @XmlElement
    String siteKey;
    @XmlElement
    String parentPage;
    @XmlElement
    String template;
    @XmlElement
    List<Bigtext> bigtexts;
    @XmlElement
    String folderOfAssets;

    public PageExport() {
    }

    public String getSiteKey() {
        return siteKey;
    }

    public void setSiteKey(String siteKey) {
        this.siteKey = siteKey;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getPageName() {
        return pageName;
    }

    public void setPageName(String pageName) {
        this.pageName = pageName;
    }

    public String getParentPage() {
        return parentPage;
    }

    public void setParentPage(String parentPage) {
        this.parentPage = parentPage;
    }

    public String getTemplate() {
        return template;
    }

    public void setTemplate(String template) {
        this.template = template;
    }

    public List<Bigtext> getBigtexts() {
        return bigtexts;
    }

    public void setBigtexts(List<Bigtext> bigtexts) {
        this.bigtexts = bigtexts;
    }

    public String getFolderOfAssets() {
        return folderOfAssets;
    }

    public void setFolderOfAssets(String folderOfAssets) {
        this.folderOfAssets = folderOfAssets;
    }
}
