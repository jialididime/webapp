# webapp
> 简单全栈 webapp deno vue mysql
## client
> 运行在browser里的应用程序 html js css

## server
> 运行在linux的web服务器
    响应http请求 
```sh
#安装unzip
sudo apt install unzip
#copy 二进制文件
sudo cp .deno/bin/deno /usr/bin
#检查是否成功
deno --version
#克隆仓库
git clone https://github.com/jialididime/webapp.git
cd 文件夹
vim a.js
deno run --allow-net a.js
curl localhost:8080
建立新的文件夹 将html文档移动进去
deno run --allow-net --allow-read a.js
## database
> 持久化数据 保存browser浏览器用户需要的数据

