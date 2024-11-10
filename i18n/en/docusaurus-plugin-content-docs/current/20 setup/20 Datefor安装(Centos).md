---
id: datafor-centos
title: Datafor Installation (CentOS) 
sidebar_position: 20
---

# Datafor Installation (CentOS)

**Step 1. Switch to the root user**

```
sudo su root
```

<div align="left"><img src="../../../../../static/img/en/datafor/setup/image-20220829172346058.png"  /></div>

**Step 2. Create the 'datafor' user group**

```
groupadd datafor
```

<div align="left"><img src="../../../../../static/img/en/datafor/setup/image-20220829172418679.png"  /></div>

**Step 3. Create the 'datafor' user, add it to the 'datafor' user group, and set the user password to 'datafor' as well.**

```
adduser datafor -g datafor
passwd datafor
```

<div align="left"><img src="../../../../../static/img/en/datafor/setup/image-20220829172434849.png"  /></div>

**Step 4. Navigate to the directory containing the installation package and extract the package to the /opt directory.**

```
unzip -o datafor-server_202203240605.zip -d /opt/
```

<div align="left"><img src="../../../../../static/img/en/datafor/setup/image-20220829172446528.png"  /></div>

**Step 5. After extracting, go to the /opt/ directory and modify permissions.**

```
cd /opt/
chmod -R 700 datafor-server
chown -R datafor datafor-server
chgrp -R datafor datafor-server
```

<div align="left"><img src="../../../../../static/img/en/datafor/setup/image-20220829172501348.png"  /></div>

**Installation completed.**



## Start Datafor

**Please operate as the 'datafor' user**

```
su datafor
cd /opt/datafor-server/
```

**Start the service**

```
./start-datafor.sh
```

<div align="left"><img src="../../../../../static/img/en/datafor/setup/image-20220829172513074.png"  /></div>

**Stop Service**

```
./stop-datafor.sh
```

<div align="left"><img src="../../../../../static/img/en/datafor/setup/image-20220829172525119.png"  /></div>

**Check Service Start/Stop Status**

```
ps -ef|grep tomcat
```

<div align="left"><img src="../../../../../static/img/en/datafor/setup/image-20220829172541387.png"  /></div>

If the command produces the above output, it indicates that the service is in a running state.



## Login

URL:  `http://localhost:28080/`

username  /  password

- `admin` / `password`
- `demo` / `demo`

## Update the System

Place the update package `datafor-upload.jar` in the `datafor-server\update` folder and restart the system.