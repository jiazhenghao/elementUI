npm install -h

npm help install 
//直接打开一个链接file:///C:/Users/Administrator/AppData/Roaming/npm/node_modules/npm///html/doc/cli/npm-install.html

npm help-search remove
//search 包含remove关键字的文档

https://docs.npmjs.com/misc/config

npm set init-author-name 'jiazhenghao'
npm set init-license 'MIT'
npm init
npm get init-author-name 
npm config delete init-author-name
ls ~/.npmrc
cat package.json
npm list --depth 0 --long true //true可以省略
npm list --depth 0 --json true
npm list --depth 0 --dev true
npm list --depth 0 --prod true
npm list --depth 0 --parseable true

npm uninstall [package-name] --save //必须用--save才能从dependencies里删除
npm install [package-name]@x.x.x --save --save-exact //这样才能安装指定版本，必须在dependencies里指定版本

npm update //全量更新
npm update --prod
npm update --dev
npm update [package-name]
npm update [package-name] -g

对代码进行压缩的工具
gulp gulp-uglify

当package.json里面没有内容以后，需要对包进行删除
npm prune
当代码要上到生产环境了，需对包进行精简
npm prune --prod/--dev

对npm进行账号管理
npm adduser
可到.npmrc文件里看

对代码进行git上传
git init
git remote add origin https://github.com/jiazhenghao/xxx
git add .
git commit -m "some description"
git push
git push origin master

然后
npm publish

改动以后
git add .
git commit -m "fixed some bugs"

npm version patch
git status

git tag
git push --tags
git push

git add .
git commit -m "beta versions"
git tag 1.1.0-beta-0
git push
git push --tags
npm publish --tag beta
npm info [package-name]


