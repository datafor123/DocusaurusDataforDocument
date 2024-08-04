---
id: system-advanced-clear-repository
title: 清理 Datafor 仓库
sidebar_position: 20
---

# 清理 Datafor 仓库

Datafor 仓库（JCR）在多次从同一仓库进行迁移后，通常会保留大量未使用的数据。这会导致表大小增加和仓库变慢。您可以通过启用为此目的设计的系统监听器来清理 JCR 中的这些未使用数据。清理 JCR 只能在没有用户登录的情况下进行，并且在此过程运行时仓库将保持锁定状态。

### 步骤：

1. 停止 Datafor 服务器。

2. 找到 `datafor-server/Datafor-solutions/system` 目录，并用任意文本编辑器打开 `systemListeners.xml` 文件。

3. 在 `list` 标签中最后添加以下 bean：

   ```xml
   <bean id="repositoryCleanerSystemListener" class="org.Datafor.platform.plugin.services.repository.RepositoryCleanerSystemListener">
       <property name="gcEnabled" value="true"/>
       <property name="execute" value="now"/>
   </bean>
   ```
   
4. 保存并关闭 `systemListeners.xml` 文件，然后重新启动 Datafor 服务器。

### 配置选项：

您可以通过编辑这些属性来自定义 `repositoryCleanerSystemListener` 的设置。建议定期清理 Datafor 仓库。

| 属性      | 描述                                                         |
| --------- | ------------------------------------------------------------ |
| gcEnabled | 布尔标志，开启（true）或关闭（false）监听器。                |
| execute   | 可以选择运行监听器的时间：`now`（服务器启动时运行一次），`weekly`（每周第一天运行），`monthly`（每月第一天运行）。 |