---
id: system-advanced-clear-repository
title: Clearing Datafor Repository
sidebar_position: 20
---

# Clearing Datafor Repository

The Datafor repository (JCR) often retains a large amount of unused data after multiple migrations from the same repository. This leads to increased table sizes and a slowdown of the repository. You can clean up this unused data in the JCR by enabling a system listener designed for this purpose. Cleaning the JCR can only be done when no users are logged in, and the repository remains locked while the process is running.

### Steps:

1. Stop the Datafor server.

2. Locate the `datafor-server/Datafor-solutions/system` directory and open the `systemListeners.xml` file with any text editor.

3. Add this bean as the last item within the `list` tags

   ```xml
   <bean id="repositoryCleanerSystemListener" class="org.Datafor.platform.plugin.services.repository.RepositoryCleanerSystemListener">
       <property name="gcEnabled" value="true"/>
       <property name="execute" value="now"/>
   </bean>
   ```

4. Save and close the `systemListeners.xml` file, then restart the Datafor server.

### Configuration Options:

You can customize the settings for the `repositoryCleanerSystemListener` by editing these properties. It is recommended to clean up the Datafor repository on a regular schedule.

| Property  | Description                                                  |
| --------- | ------------------------------------------------------------ |
| gcEnabled | Boolean flag to turn the listener On (true) or Off (false).  |
| execute   | You can choose when to run the listener: `now` (runs once during server start-up), `weekly` (runs on the first day of each week), `monthly` (runs on the first day of each month). |