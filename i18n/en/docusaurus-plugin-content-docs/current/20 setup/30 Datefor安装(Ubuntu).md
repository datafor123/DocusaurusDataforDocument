---
id: datafor-ubuntu
title: Datafor Installation (Ubuntu)
sidebar_position: 35
---

# Datafor Installation (Ubuntu)
## Installation Steps

**Step 1. Switch to the root user**

```
sudo su  
```

<div align="left"><img src="../../../../../static/img/datafor/setup/image-20220829171526492.png"  /></div>

**Step 2. Create the "datafor" user, and set the user password to "datafor" as well.**

```
adduser datafor
```

<div align="left"><img src="../../../../../static/img/datafor/setup/image-20220829171542736.png"  /></div>

**Step 3. Create a user group and add the "datafor" user to the "datafor" user group.**

```
addgroup datafor
addgroup datafor datafor
```

<div align="left"><img src="../../../../../static/img/datafor/setup/image-20220829171600582.png"  /></div>

**Step 4. Navigate to the directory where the installation package is located and unzip the package to the /opt path.**

```
unzip -o datafor-server_202203210834.zip -d /opt/
```

<div align="left"><img src="../../../../../static/img/datafor/setup/image-20220829171613825.png"  /></div>

**Step 5. After the extraction is complete, go to the /opt/ directory and modify permissions.**

```
cd /opt/
chmod -R 700 datafor-server
chown -R datafor datafor-server
chgrp -R datafor datafor-server
```

<div align="left"><img src="../../../../../static/img/datafor/setup/image-20220829171632512.png"  /></div>

**Installation Completed**

Start or stop the service, refer to daily startup procedures.

## Startup

**For daily startup and shutdown, please perform the operations using the "datafor" user.**

```
su datafor
cd /opt/datafor-server/
```

**Start the service**

```
./start-datafor.sh
```

<div align="left"><img src="../../../../../static/img/datafor/setup/image-20220829171648174.png"  /></div>

**Stop the service**

```
./stop-datafor.sh
```

<div align="left"><img src="../../../../../static/img/datafor/setup/image-20220829171701208.png"  /></div>

**Check the status of the service startup and shutdown**

```
ps -ef|grep tomcat
```

<div align="left"><img src="../../../../../static/img/datafor/setup/image-20220829171716368.png"  /></div>

**If the command outputs as above, it indicates that the service is in a running state.**

## Login

URL:  `http://localhost:28080/`

username  /  password

- `admin` / `password`
- `demo` / `demo`

## Update the System

Place the update package `datafor-upload.jar` in the `datafor-server\update` folder and restart the system.