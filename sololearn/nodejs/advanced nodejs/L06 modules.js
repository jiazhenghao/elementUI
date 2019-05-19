console.log(module);
/*
Module {
  id: '.',
  path: '/Users/jiazhenghao/Downloads/elementUI/sololearn/nodejs/advanced nodejs',
  exports: {},
  parent: null,
  filename: '/Users/jiazhenghao/Downloads/elementUI/sololearn/nodejs/advanced ' +
    'nodejs/L06 modules.js',
  loaded: false,
  children: [],
  paths: [
    '/Users/jiazhenghao/Downloads/elementUI/sololearn/nodejs/advanced ' +
      'nodejs/node_modules',
    '/Users/jiazhenghao/Downloads/elementUI/sololearn/nodejs/node_modules',
    '/Users/jiazhenghao/Downloads/elementUI/sololearn/node_modules',
    '/Users/jiazhenghao/Downloads/elementUI/node_modules',
    '/Users/jiazhenghao/Downloads/node_modules',
    '/Users/jiazhenghao/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}
*/

//require命令会逐一层次去node_modules里找文件
//事实上，require的可以是文件加，然后文件夹里有index.js,就可以了
//在package.json里将main改为start.js就可以改掉了。
//创建一个文件touch，创建一个文件夹mkdir

