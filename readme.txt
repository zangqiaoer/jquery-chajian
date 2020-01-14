1、连接远程仓库
git remote add origin '你的远程仓库地址'
2、版本回退
1.查看所有的历史版本，获取你git的某个历史版本的id， git log
2. 回退本地代码库：git reset --hard ID
3. 推送到远程服务器：git push -f -u origin master
4. 重新拉代码：git pull
3、查看状态
git status
4、添加
1.git add 文件名
2.git commit -m "文档说明"
3.git push origin master