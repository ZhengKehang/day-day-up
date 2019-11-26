1.下载node.js 
下载地址： https://nodejs.org/dist/v4.4.3/node-v4.4.3-x64.msi
理论上下载好一路next就可以。检测是否安装成功，可以使用命令行工具（Windows开始菜单栏搜索cmd，输入 node -version出来版本号即可）
下载及安装教程：https://www.runoob.com/nodejs/nodejs-install-setup.html

2.解压文件夹
2.1 运行脚本"初始化.bat"
2.2 修改index.js(用记事本打开即可)里的“getUrl”为想要抓取的地址
2.3 运行脚本“获取数据.bat” ，等待20秒内
成功提示“文件生成次数 1”，
失败的话把提示发给我看看，可能抓取地址不正确，可以尝试修改几次。
2.4 如果成功，将saveData文件夹里生成的文件修改处理函数