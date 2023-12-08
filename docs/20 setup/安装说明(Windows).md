windows:
方式1:数据库以服务方式启动:
#第一次安装服务，双击运行
install-service.bat
#启动服务，双击运行
start-service.bat
#停止服务，双击运行
stop-service.bat
#卸载服务，双击运行
delete-service.bat

方式2:以窗口运行
#启动双击
start-datafor.bat
#关闭双击
stop-datafor.bat

#访问地址:localhost:28080/
默认用户名密码
admin/password
demo/demo

#更新
将 datafor-upload.jar 放置在upload文件夹下,请确保名字必须是datafor-upload.jar，在启动时会自动更新