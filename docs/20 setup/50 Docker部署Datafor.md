---
id: datafor-docker
title: Docker部署Datafor
sidebar_position: 50
---

# 使用Docker部署Datafor

Datafor可以通过Docker轻松部署。本指南提供了部署Datafor免费版本的步骤和命令。

## 前提条件

在开始之前，请确保您具备以下条件：

- 机器上已安装Docker。如果尚未安装Docker，可以从Docker官网下载并安装。

## 部署步骤

1. **打开终端或命令提示符**：

   - 在Windows上，可以使用命令提示符或PowerShell。
   - 在macOS或Linux上，可以使用终端。

2. **拉取Datafor Docker镜像**：

   - 如果尚未拉取Datafor Docker镜像，可以运行以下命令：

     ```shell
     docker pull datafor123/datafor-free:6.06
     ```

   - 此命令将Datafor Docker镜像下载到本地机器。

3. **运行Docker容器**：

   - 使用以下命令运行Datafor Docker容器：

     ```shell
     docker run -itd --name datafor-free -p 28080:28080 -p 25432:25432 datafor123/datafor-free:6.06
     ```

   - 命令解释：

     - `docker run`：该命令用于创建并启动一个新的Docker容器。
     - `-itd`：这些标志告诉Docker以交互模式（`-i`）运行容器，分配一个伪终端（`-t`），并以分离模式（`-d`）运行容器，这意味着它将在后台运行。
     - `--name datafor-free`：为容器命名为`datafor-free`，以便于引用。
     - `-p 28080:28080`：将本地机器的28080端口映射到容器的28080端口。
     - `-p 25432:25432`：将本地机器的25432端口映射到容器的25432端口。
     - `datafor123/datafor-free:6.06`：指定要使用的Docker镜像。

4. **验证部署**：

   - 容器运行后，可以通过以下命令检查容器状态，以验证Datafor是否已正确部署：

     ```shell
     docker ps
     ```

   - 该命令列出所有正在运行的容器。您应该看到`datafor-free`在列表中并显示其状态。

5. **访问Datafor**：

   - 打开您的网页浏览器并导航到`http://localhost:28080`。
   - 您应该看到Datafor界面。如果需要连接到数据库，可以使用端口`25432`。

## 停止和移除容器

- 要停止Datafor容器，请使用：

  ```shell
  docker stop datafor-free
  ```

- 要移除Datafor容器，请使用：

  ```shell
  docker rm datafor-free
  ```

通过按照这些步骤，您应该能够使用Docker在本地机器上部署并运行Datafor。