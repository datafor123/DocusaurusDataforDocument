---

id: visualizer-setup
title: Visualizer(Plugin for PBA) Setup
sidebar_position: 40
---
# Visualizer(Plugin for PBA) Setup Manual

1. Unzip **Visualizer.zip** to the **pentaho-solutions\system** directory

   <div align="left"><img src="../../../../../static/img/en/datafor/setup/1692584188749.png" /></div>

   

2. Modify the **ImportHandlerMimeTypeDefinitions.xml** file in the **pentaho-solutions\system** directory and add the following content.

   ```
   <extension>datafor</extension>
   ```

   <div align="left"><img src="../../../../../static/img/en/datafor/setup/image-20240117143902798.png" /></div>

3. Modify the **applicationContext-spring-security.xml** file in the **pentaho-solutions\system** directory.

   Add the following code under the **bean id="filterInvocationInterceptor"** node:

   ```
   <sec:intercept-url pattern="\A/content/datafor/.*\Z" access="Anonymous,Authenticated" />
   ```
   <div align="left"><img src="../../../../../static/img/en/datafor/setup/image-20240117144154812.png" /></div>

    Add the following code under the **bean id="filterInvocationInterceptorForWS"** node:
   ```
   <sec:intercept-url pattern="\A/plugin/datafor/api/.*\Z" access="Anonymous,Authenticated" />
   <sec:intercept-url pattern="\A/plugin/datafor-modeler/api/.*\Z" access="Anonymous,Authenticated" />
   ```
   <div align="left"><img src="../../../../../static/img/en/datafor/setup/image-20240117144417282.png" /></div>

4. In the **pentaho-solutions\system** directory, locate the **server.properties** file, and modify the value of **fully-qualified-server-url** according to the documentation instructions.

   <div align="left"><img src="../../../../../static/img/en/datafor/setup/image-20240117144627174.png" /></div>

5. Installing Fonts (Required for Excel Export)

   If you are unable to export Excel files, it may be because OpenJDK is in use, and the required fonts are not installed. Please execute the following command on the server as the root user to install the fonts.

   ```
   yum install fontconfig
   fc-cache --force
   ```

6. Restart PBA

   <div align="left"><img src="../../../../../static/img/en/datafor/setup/1692583886673-1692584228417-11.png" /></div>

