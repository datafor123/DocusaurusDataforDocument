# dataforDocument
 Docusaurus-datafor-docs
产品说明文档
How to deploy the latest version to production env? Follow the steps:
1. Download the latest version from the branch 'gh-pages' (e.g. docs-gh-pages.zip)
2. Upload docs-gh-pages.zip to the AWS(HK) server(hosename:18.162.115.1)
3. On the aws server, transfer docs-gh-pages.zip into the dock(named as doc), and place it in the directory /opt/datafor/build(The doc site content is deploied in /opt/datafor/build/docs)
4. Execute the cmd to enter the docker(doc): docker exec -it doc bash, then enter the folder /opt/datafor/build
5. Backup the docs folder. Make sure the backup zip filename includes the backup date info. e.g. tar -zcvf docs.backup.$(date +%yyyy%mm%dd).tar docs
6. Unzip docs-gh-pages.zip, then a folder named docs-gh-pages will be auto-created.
7. Delete the docs folder, and rename the docs-gh-pages to docs
8. Over

