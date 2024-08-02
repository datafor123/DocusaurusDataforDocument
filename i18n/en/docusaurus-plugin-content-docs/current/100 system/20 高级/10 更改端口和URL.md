---
id: system-advanced-port-url
title: 更改端口和URL
sidebar_position: 10
---

# Changing Ports and URLs

DataforServer comes with default port numbers. You can change these port numbers to suit your system's requirements. Since the port number of DataforServer is part of its URL, you will also need to update the corresponding address.

## List of Service Ports Used by Datafor

The following port numbers must be available on the machine running DataforServer:

| Service                 | Port Number |
| ----------------------- | ----------- |
| Datafor Server          | 28080       |
| Repository (PostgreSQL) | 25432       |

## Changing Datafor Server (Tomcat) Port Numbers

Edit the `datafor-server/tomcat/conf/server.xml` file and change the port numbers as shown in the following example:

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

## Changing the Datafor Server URL

You can change the Datafor Server hostname from localhost to a specific IP address, hostname, or domain name by following these steps. This procedure is also necessary if you are changing the Datafor Server port number.

1. Stop the DataforServer.

2. Navigate to the `datafor-server/pentaho-solutions/system` directory and open the `server.properties` file with any text editor.

3. Modify the value of the `fully-qualified-server-url` element appropriately.

   ```xml
   fully-qualified-server-url=http://localhost:28080/datafor/
   ```

4. Save and close the file.

5. Start the DataforServer.

The Datafor Server is now configured to reference itself at the specified URL.