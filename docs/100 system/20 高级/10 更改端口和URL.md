---
id: system-advanced-port-url
title: 更改端口和URL
sidebar_position: 10
---

# 更改端口和URL

DataforServer 有默认的端口号。您可以更改这些端口号以适应您的系统需求。由于 DataforServer 的端口号是其 URL 的一部分，因此您还需要更改相应的地址。

## Datafor 使用的服务端口列表

运行 DataforServer 的机器上必须可用以下端口号：

| 服务              | 端口号 |
| ----------------- | ------ |
| Datafor 服务器    | 28080  |
| 仓库 (PostgreSQL) | 25432  |

## 更改 Datafor 服务器 (Tomcat) 端口号

编辑 `datafor-server/tomcat/conf/server.xml` 文件，并按以下示例代码更改端口号：

```xml
<!-- A "Connector" represents an endpoint by which requests are received
         and responses are returned. Documentation at :
         Java HTTP Connector: /docs/config/http.html (blocking & non-blocking)
         Java AJP  Connector: /docs/config/ajp.html
         APR (HTTP/AJP) Connector: /docs/apr.html
         Define a non-SSL HTTP/1.1 Connector on port 8080
    -->
    <Connector URIEncoding="UTF-8" port="8080" protocol="HTTP/1.1" 
               connectionTimeout="20000" 
               redirectPort="9443" />
    <!-- A "Connector" using the shared thread pool-->
    <!--
    <Connector URIEncoding="UTF-8" executor="tomcatThreadPool"
               port="8080" protocol="HTTP/1.1" 
               connectionTimeout="20000" 
               redirectPort="9443" />
```

## 更改 Datafor 服务器 URL

您可以按以下步骤将 Datafor 服务器的主机名从 localhost 更改为特定的 IP 地址、主机名或域名。如果您更改 Datafor 服务器的端口号，也需要执行此操作。

1. 停止 DataforServer。

2. 导航到 `datafor-server/pentaho-solutions/system` 目录，并使用任何文本编辑器打开 `server.properties` 文件。

3. 适当地修改 `fully-qualified-server-url` 元素的值。

   ```XML
   fully-qualified-server-url=http://localhost:28080/datafor/
   ```

4. 保存并关闭文件。

5. 启动 DataforServer。

现在，Datafor 服务器已配置为在指定的 URL。