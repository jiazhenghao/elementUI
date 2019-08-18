npm run build in Vue-CLI equals 
npm run build -- --mode=production
also you can
npm run build -- --mode=development
npm run build -- --mode=staging

vue-cli 默默就有了webpack的配置，如果需要输出的化，需要如下命令
vue inspect --mode=production > webpack.config.js
