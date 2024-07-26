# Reports REST API

Datafor provides a suite of REST APIs that allow users to interact with reports via HTTP requests.

## Open a Blank Report Designer

`http://localhost:8080/pentaho/plugin/datafor/api/createDo`

## Open a Report

**URL Format**: http://`<pentaho-server>`/pentaho/plugin/datafor/api/`<mode>`/`<report id>`?`<parameter>&<parameter>`

### Parameters:

- `<pentaho-server>`: The Pentaho server address.

- `<mode>`: The mode for opening the report, with three options:
  
  - **edit**: Opens the report in edit mode.
  - **open**: Opens the report in view mode.
  - **integrate**: Opens the report in embed mode, typically used for embedding the report in other pages via an iframe.
  
- `<report id>`: The ID of the report.

- `<parameter>`: Parameters for **embed mode** URL:

  -  **__compact=true**: Removes the report page's outer margins.
  - **__clean=true**: Removes the default shadow effect of the report page.
  - **__forceAdjust=true**: Adjusts the report width to fit the container.

  **Note: "__" represents two consecutive underscore characters.**

### Examples

- Open the report in edit mode: `http://localhost:8080/pentaho/plugin/datafor/api/edit/L2hvbWUvYWRtaW4vZXhhbXBsZTEuZGF0YWZvcg==`


- Open the report in view mode: `http://localhost:8080/pentaho/plugin/datafor/api/open/L2hvbWUvYWRtaW4vZXhhbXBsZTEuZGF0YWZvcg==`


- Open the report in embed mode: `http://localhost:8080/pentaho/plugin/datafor/api/integrate/L2hvbWUvYWRtaW4vZXhhbXBsZTEuZGF0YWZvcg==`


- Open the report in embed mode and remove the page's outer margins: `http://localhost:8080/pentaho/plugin/datafor/api/integrate/L2hvbWUvYWRtaW4vZXhhbXBsZTEuZGF0YWZvcg==?__compact=true`


- Open the report in embed mode, remove the page's border shadow, and adjust the width to fit the iframe container: `http://localhost:8080/pentaho/plugin/datafor/api/integrate/L2hvbWUvYWRtaW4vZXhhbXBsZTEuZGF0YWZvcg==?__clean=true&__forceAdjust=true`



## How to Retrieve a Report ID

### Method 1: Copy from URL

1. Double-click the name of the tab.

   ![1721916600470](D:\github_projects\docs\static\img\datafor\share\1721916600470.png)

2. Select "Yes."
   ![1721916666569](D:\github_projects\docs\static\img\datafor\share\1721916666569.png)

3. The report ID can be found in the browser's address bar.
   ![image-20240725221221830](D:\github_projects\docs\static\img\datafor\share\image-20240725221221830.png)



### Method 2: Generate using code

1. View file properties, get file path

   ![1721959680159](D:\微信\WeChat Files\wxid_mw24m02k9au311\FileStorage\Temp\1721959680159.png)

2. Encode the path using the Base63 method

   ```
   window.btoa(unescape(encodeURIComponent(path))).replace(/\+/g, "-").replace(/\//g, "_");
   ```

   
