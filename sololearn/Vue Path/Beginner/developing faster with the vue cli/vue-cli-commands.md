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
