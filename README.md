# Template importer

## Overview

The goal of this module is to provide a tool to import a static html page with css,
js and images then work on it to define some area and at the end export it as a usable jahia template

## TODO:

- Dom tree selector, to be able to select dom element using a tree of all the html nodes in the page
- clean the code in the export
- provide some dropdown list nodetypes available when exporting area and want to create a view
- allow to create other view than default view for a given type
- provide dropdown to list modules, when want to export the project, or all to create a new templateset module directly
- simplify import, create a dedicated UI
- improve dom element selector visual to mark the element that have rules for the export, so you can identify them
- provide a ui to display all the current areas, modification available for the current project

---

## Usage

- deploy this module and go to administration, you should have a new server setting call "template importer"

### Dump html site

- using google chrome, save as feature on right click in the html page you want to dump
- this will export the current .html page and the associate assets, imgs in a folder
- the links in the .html should be relative
- you need to rename the .html file to index.html, because the template importer only look for this file to load the page
- after the rename, wrap everythings in a folder, the name of the folder will be the name of the project displayed in the template importer
- zip this folder.

Now you should have a .zip respecting this structure:
```
jahiacom.zip
│
└───jahiacom
    │   index.html
    │
    ├───css_js_and_asset_folder
    │   │   file111.css
    │   │   file112.js
    │   │   ...
    │
```

- Now you can upload in the Digital factory JCR using the document manager
- go to /sites/systemsite/files/ti-projects
- if the folder ti-projects don't exist, create it, it's the folder used by template importer to look up project
- upload your .zip inside the ti-projects and don't forget to check "automatically unzip" checkbox
- You should see your project appear in the left panel of template importer now and click on it to see the dumped site page.

### Working with the template importer

- you can right click on a Dom element inside the template importer to define this dom element as an area to export from the main page.
This will have for effect to create the good <template:area tag in the futur template and export the content of the Dom element to a
dedicated view. For that you can specify the nodetype you want to create the view, and a checkbox to tell to the generation to create the associate nodetype or not.

- you can right click on an existing area

- each time you do a modification, you have to manually save the project. Using button on top left

- After work is finished you can export result to a dedicated module, you need to specify the target module. First the sources of the modules need to mounted.
I suggest to create a new empty templateSet from the studio and use it as target module.

- The export should create this resources:
    - javascript assets moved to /resources/javascript
    - css assets moved to /resources/css
    - other files, imgs, moved to /template/files folder
    - new views for exported areas
    - associated definition for exported areas if checkbox checked.

- Then you can use this new template as template for the home page for example and start working on it. And at the end use it for creating a site.