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

