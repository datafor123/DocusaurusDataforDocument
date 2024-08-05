---
id: visualizer-setup
title: Visualizer(PBA插件)安装
sidebar_position: 60
---

# Visualizer(PBA插件)安装

1. 将 **Visualizer.zip** 解压缩到 **pentaho-solutions\system** 目录。

   <div align="left"><img src="../../static/img/datafor/setup/1692584188749.png"  /></div>

   **注意：如果system目录下有旧版本的Visualizer插件，需要删除它，修改文件夹名字也不可以。**

2. 修改 **pentaho-solutions\system** 目录中的 **ImportHandlerMimeTypeDefinitions.xml** 文件，并添加以下内容。

   ```
    <extension>datafor</extension>
   ```

   <div align="left"><img src="../../static/img/datafor/setup/1705472332237-1705473248761-2.png"  /></div>

3. 修改 **pentaho-solutions\system** 目录中的 **applicationContext-spring-security.xml** 文件。

   在 **bean id="filterInvocationInterceptor"** 节点下添加：

   ```
   <sec:intercept-url pattern="\A/content/datafor/.*\Z" access="Anonymous,Authenticated" />
   ```
   <div align="left"><img src="../../static/img/datafor/setup/1705660701060-1705660868955-1.png"  /></div>

   在 **bean id="filterInvocationInterceptorForWS"** 节点下添加：

   ```
   <sec:intercept-url pattern="\A/plugin/datafor/api/.*\Z" access="Anonymous,Authenticated" />
   <sec:intercept-url pattern="\A/plugin/datafor-modeler/api/.*\Z" access="Anonymous,Authenticated" />
   ```

   <div align="left"><img src="../../static/img/datafor/setup/1705473027875.png"  /></div>

4. 在**pentaho-solutions\system** 目录中的 **server.properties** 文件，根据文档说明修改**fully-qualified-server-url**的值。

   <div align="left"><img src="../../static/img/datafor/setup/1705473144696.png"  /></div>

5. 安装字体（用于Excel导出）（仅Linux系统）

   如果无法导出Excel文件，可能是因为正在使用OpenJDK而未安装字体。请以root用户身份在服务器上执行以下命令以安装字体。

   ```
   yum install fontconfig
   fc-cache --force
   ```

6. 重启 PBA

   <div align="left"><img src="../../static/img/datafor/setup/1692583886673-1692584228417-11.png"  /></div>

