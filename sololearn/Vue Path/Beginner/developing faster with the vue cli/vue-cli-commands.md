#quick start a project
vue create [project-name] -d

#or you can use your own configuration by erasing -d
vue create [project-name]
cd [project-name]
npm run serve

vue --help
#also you can use sub-command to look for help like
vue create --help

npm run lint  
npm run build
npm run serve

vue --version

使用Vetur
scaffold

使用Vue VSCode Snippets
vbase
vdata

使用Prettier - Code formatter优化代码排版

使用Debugger for Chrome

vue create [package-name] -dbm
Options:
  -p, --preset <presetName>       Skip prompts and use saved or remote preset
  -d, --default                   Skip prompts and use default preset
  -i, --inlinePreset <json>       Skip prompts and use inline JSON string as preset
  -m, --packageManager <command>  Use specified npm client when installing dependencies
  -r, --registry <url>            Use specified npm registry when installing dependencies (only for npm)
  -g, --git [message]             Force git initialization with initial commit message
  -n, --no-git                    Skip git initialization
  -f, --force                     Overwrite target directory if it exists
  -c, --clone                     Use git clone when fetching remote preset
  -x, --proxy                     Use specified proxy when creating project
  -b, --bare                      Scaffold project without beginner instructions
  --skipGetStarted                Skip displaying "Get started" instructions
  -h, --help                      output usage information

preset 如何导入
vue create [package-name] --preset johnpapa/vue-clie-preset-all-javascript (load from github)
vue create [package-name] --preset ~/yourpath

preset 创建后保存在了～/.vuerc文件里面了
单独提取出内容，放到preset.json里就可以使用下列命令导入了
vue creat --preset ./ [app-name] 

how to run vue-cli-service
1.npm run serve
2../node_modules/.bin/vue-cli-service serve
3.npx vue-cli-service serve

npm run build  targets
application (--target app)
library (--target lib)
web componenet (--target wc)

code-insiders . -r

npx vue-cli-service build --help
Usage: vue-cli-service build [options] [entry|pattern]

  Options:

    --mode             specify env mode (default: production)
    --dest             specify output directory (default: dist)
    --modern           build app targeting modern browsers with auto fallback
    --no-unsafe-inline build app without introducing inline scripts
    --target           app | lib | wc | wc-async (default: app)
    --formats          list of output formats for library builds (default: commonjs,umd,umd-min)
    --name             name for lib or web-component mode (default: "name" in package.json or entry filename)
    --filename         file name for output, only usable for 'lib' target (default: value of --name)
    --no-clean         do not remove the dist directory before building the project
    --report           generate report.html to help analyze bundle content
    --report-json      generate report.json to help analyze bundle content
    --watch            watch for changes

build a library with vue
can see the folder "hello-lib-by-vue"
HelloWorld.vue
index.js
vue.config.js
package.json

unit test: mocha or jest
https://mochajs.org/  
npm run test:unit
npx vue-cli-service test:unit
./node_modules/.bin/vue-cli-service test:unit

npx vue-cli-service test:unit --help

end-to-end test:cypress.io  or  nightwatch.js
npm run test:e2e
https://wwww.cypress.io
http://nightwatchjs.org

add plugin:把pwa这个插件加入进去
vue add @vue/cli-plugin-pwa
vue add @vue/pwa
vue add vue-cli-plugin-apollo
vue add apollo
vue add @vue/eslint 这会跳出很多prompts，让你选择哪些是你需要的
vue add @vue/eslint --config airbnb --lintOn save

修改插件的配置
vue invoke --help
Usage: invoke [options] <plugin> [pluginOptions]
invoke the generator of a plugin in an already created project
Options:
  --registry <url>  Use specified npm registry when installing dependencies (only for npm)
  -h, --help        output usage information

