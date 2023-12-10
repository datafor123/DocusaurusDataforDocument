---
id: visualizer-setup
title: Visualizer Setup Manual
sidebar_position: 30
---
# Visualizer Setup Manual

1. Unzip **Visualizer.zip** to the **pentaho-solutions\system** directory

   <div align="left"><img src="../../../../../static/img/en/datafor/setup/1692584188749.png" /></div>

   

2. Modify the **ImportHandlerMimeTypeDefinitions.xml** file in the **pentaho-solutions\system** directory and add the following content.

   ```
   <MimeTypeDefinition mimeType="application/octet-stream" hidden="false">
           <extension>eml</extension>
           <extension>datafor</extension>
   </MimeTypeDefinition>
   ```

   <div align="left"><img src="../../../../../static/img/en/datafor/setup/1692583744410-1692584228414-10.png" /></div>

3. Modify the **applicationContext-spring-security.xml** file in the **pentaho-solutions\system** directory and add the following content.

   ```
   <sec:intercept-url pattern="\A/content/datafor/.*\Z" access="Anonymous,Authenticated" />
   ```
   <div align="left"><img src="../../../../../static/img/en/datafor/setup/image-20230821101055233-1692583918500-1-1692584228427-13.png" /></div>

   ```
    <sec:intercept-url pattern="\A/plugin/datafor/api/.*\Z" access="Anonymous,Authenticated" />
   ```
   <div align="left"><img src="../../../../../static/img/en/datafor/setup/\image-20230820225132847-1692583918500-2-1692584228426-12.png" /></div>

4. Modify the **server.properties** in the **pentaho-solutions\system** directory, change the server address to the corresponding URL for generating shared link addresses


   <div align="left"><img src="../../../../../static/img/en/datafor/setup/image-20230820225858611-1692583918501-3-1692584228427-14.png" /></div>

5. Installing Fonts (Required for Excel Export)

   If you are unable to export Excel files, it might be because OpenJDK is being used and the fonts are not installed. Please execute the following commands as the root user on the server to install the fonts.

   ```
   yum install fontconfig
   fc-cache --force
   ```

6. Restart PBA


   <div align="left"><img src="../../../../../static/img/en/datafor/setup/1692583886673-1692584228417-11.png" /></div>

