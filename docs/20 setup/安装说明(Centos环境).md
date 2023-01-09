---
id: azybs-centos
title: 安装说明（Centos环境）
sidebar_position: 2
---

# 安装说明（Centos环境）
## 安装Java环境

JAVA 1.8以上

检查系统是否安装java环境

<div align="left"><img src="../../static/img/datafor/setup/image-20220829172227194.png"  /></div>

如果提示命令找不到，则需要安装。

安装的方式有多种，可以离线。如下方式通过yum命令安装

<div align="left"><img src="../../static/img/datafor/setup/image-20220829172259131.png"  /></div>

 如果系统支持yum命令，且与互联网联通，则安装完成后，会提示

<div align="left"><img src="../../static/img/datafor/setup/image-20220829172317391.png"  /></div>



安装完成后，执行如下命令，确认安装是否成功

<div align="left"><img src="../../static/img/datafor/setup/image-20220829172331647.png"  /></div>


## 安装Datafor

**步骤1. 切换root用户**

sudo su root

<div align="left"><img src="../../static/img/datafor/setup/image-20220829172346058.png"  /></div>

**步骤2. 创建datafor用户组**

groupadd datafor

<div align="left"><img src="../../static/img/datafor/setup/image-20220829172418679.png"  /></div>

**步骤3. 创建datafor用户并添加到datafor用户组，并将用户密码也设置为datafor**

adduser datafor -g datafor
passwd datafor

<div align="left"><img src="../../static/img/datafor/setup/image-20220829172434849.png"  /></div>

**步骤4. 进入安装包所在目录，将安装包解压至/opt路径下**

unzip -o datafor-server_202203240605.zip -d /opt/

<div align="left"><img src="../../static/img/datafor/setup/image-20220829172446528.png"  /></div>

**步骤5. 解压完成后，进入/opt/目录，修改权限**

cd /opt/
chmod -R 700 datafor-server
chown -R datafor datafor-server
chgrp -R datafor datafor-server

<div align="left"><img src="../../static/img/datafor/setup/image-20220829172501348.png"  /></div>

**安装完毕**

启停服务，参见日常启动

## 日常启动

**日常启停，请以datafor用户操作**

su datafor
cd /opt/datafor-server/

**启动服务**

./start-datafor.sh

<div align="left"><img src="../../static/img/datafor/setup/image-20220829172513074.png"  /></div>

**停止服务**

./stop-datafor.sh

<div align="left"><img src="../../static/img/datafor/setup/image-20220829172525119.png"  /></div>

**查看服务启停状态**

ps -ef|grep tomcat

<div align="left"><img src="../../static/img/datafor/setup/image-20220829172541387.png"  /></div>

命令如上输出，则表示服务处于运行状态