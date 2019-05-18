//function(exports, require, module, __filename, __dirname) {

exports.a = 42;
module.exports.b = 37;
console.log(arguments);
module.exports = () => {};//this is the right way becasue exports is an allia 


//return module.exports;
//}


// [Arguments] {
//     '0': {},
//     '1': [Function: require] {
//       resolve: [Function: resolve] { paths: [Function: paths] },
//       main: Module {
//         id: '.',
//         path: '/Users/jiazhenghao/Downloads/elementUI/sololearn/nodejs/node ' +
//           'get started',
//         exports: {},
//         parent: null,
//         filename: '/Users/jiazhenghao/Downloads/elementUI/sololearn/nodejs/node ' +
//           'get started/L17 wrapper module.js',
//         loaded: false,
//         children: [],
//         paths: [Array]
//       },
//       extensions: [Object: null prototype] {
//         '.js': [Function],
//         '.json': [Function],
//         '.node': [Function],
//         '.mjs': [Function]
//       },
//       cache: [Object: null prototype] {
//         '/Users/jiazhenghao/Downloads/elementUI/sololearn/nodejs/node get started/L17 wrapper module.js': [Module]
//       }
//     },
//     '2': Module {
//       id: '.',
//       path: '/Users/jiazhenghao/Downloads/elementUI/sololearn/nodejs/node get started',
//       exports: {},
//       parent: null,
//       filename: '/Users/jiazhenghao/Downloads/elementUI/sololearn/nodejs/node ' +
//         'get started/L17 wrapper module.js',
//       loaded: false,
//       children: [],
//       paths: [
//         '/Users/jiazhenghao/Downloads/elementUI/sololearn/nodejs/node ' +
//           'get started/node_modules',
//         '/Users/jiazhenghao/Downloads/elementUI/sololearn/nodejs/node_modules',
//         '/Users/jiazhenghao/Downloads/elementUI/sololearn/node_modules',
//         '/Users/jiazhenghao/Downloads/elementUI/node_modules',
//         '/Users/jiazhenghao/Downloads/node_modules',
//         '/Users/jiazhenghao/node_modules',
//         '/Users/node_modules',
//         '/node_modules'
//       ]
//     },
//     '3': '/Users/jiazhenghao/Downloads/elementUI/sololearn/nodejs/node ' +
//       'get started/L17 wrapper module.js',
//     '4': '/Users/jiazhenghao/Downloads/elementUI/sololearn/nodejs/node get started'
//   }