---
id: visualizer-setup
title: Visualizer(PBA插件)安装
sidebar_position: 40
---

# Visualizer(PBA插件)安装

1. 将 **Visualizer.zip** 解压缩到 **pentaho-solutions\system** 目录。

   <div align="left"><img src="../../static/img/datafor/setup/1692584188749.png"  /></div>
   
2. 修改 **pentaho-solutions\system** 目录中的 **ImportHandlerMimeTypeDefinitions.xml** 文件，并添加以下内容。

   ```
   <MimeTypeDefinition mimeType="application/octet-stream" hidden="false">
           <extension>eml</extension>
           <extension>datafor</extension>
   </MimeTypeDefinition>
   ```

   <div align="left"><img src="../../static/img/datafor/setup/1692583744410-1692584228414-10.png"  /></div>

3. 修改 **pentaho-solutions\system** 目录中的 **applicationContext-spring-security.xml** 文件，并添加以下内容。

   ```
   <sec:intercept-url pattern="\A/content/datafor/.*\Z" access="Anonymous,Authenticated" />
   ```
   <div align="left"><img src="../../static/img/datafor/setup/image-20230821101055233-1692583918500-1-1692584228427-13.png"  /></div>

   ```
    <sec:intercept-url pattern="\A/plugin/datafor/api/.*\Z" access="Anonymous,Authenticated" />
   ```

   <div align="left"><img src="../../static/img/datafor/setup/image-20230820225132847-1692583918500-2-1692584228426-12.png"  /></div>

4. 修改 **pentaho-solutions\system** 目录中的 **server.properties** 文件，将服务器地址更改为生成共享链接地址的相应 URL。

   <div align="left"><img src="../../static/img/datafor/setup/image-20230820225858611-1692583918501-3-1692584228427-14.png"  /></div>

5. 安装字体（用于Excel导出）

   如果无法导出Excel文件，可能是因为正在使用OpenJDK而未安装字体。请以root用户身份在服务器上执行以下命令以安装字体。

   ```
   yum install fontconfig
   fc-cache --force
   ```

6. 重启 PBA

   <div align="left"><img src="../../static/img/datafor/setup/1692583886673-1692584228417-11.png"  /></div>

