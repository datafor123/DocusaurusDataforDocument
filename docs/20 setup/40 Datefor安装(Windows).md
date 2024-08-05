---
id: datafor-windows
title: Datafor安装(windows)
sidebar_position: 40
---
# Datafor安装（windows）

以**管理员**身份登录windows

## 方式1:以窗口运行

1. 启动双击

   ```
start-datafor.bat
   ```

2. 关闭双击

   ```
   stop-datafor.bat
   ```



## 方式2:数据库以服务方式启动:

1. 第一次安装服务，双击运行

   ```
   install-service.bat
   ```

2. 启动服务，双击运行

   ```
   start-service.bat
   ```

5. 停止服务，双击运行

   ```
   stop-service.bat
   ```


6. 卸载服务，双击运行

   ```
   delete-service.bat
   ```
   

## 登录

地址: `http://localhost:28080/`

默认用户名密码:
`admin`/`password`
`demo`/`demo`



## 更新系统

将更新包 `datafor-upload.jar` 放置在`datafor-server\update`文件夹下, 重启系统。