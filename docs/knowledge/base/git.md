# git相关
## 相关命令
* 生成公钥秘钥
```sh
ssh-keygen -t rsa -C xxxxxxxxx@qq.com
```
* 设置上一级仓库
```sh
git remote add origin 地址
git remote add upstream 地址
```
* 同步主仓库内容到本地仓库（未到工作区）
```sh
git fetch upstream 
```
* 从folk仓库拉取代码更新当前分支
```sh
git pull origin dev:dev（分支切换后直接git pull）
```
* 合并upstream/dev分支到当前分支
```sh
git merge upstream/dev
```
* 将本地文件添加到缓存区
```sh
git add -A
```
* 将缓存区代码添加到本地仓库并注释
```sh
git commit -m 哈哈哈
```
* 提交
```sh
git push origin dev:dev（分支切换后直接git push）
```

