//require('something');
//1. try something.js
//2. try something.json
//3. try something.node
//npm install -g node-gyp
192:L08 C++addons jiazhenghao$ ls
addon-src       index.js
192:L08 C++addons jiazhenghao$ cd addon-src/
192:addon-src jiazhenghao$ ls
binding.gyp     hello.cc
192:addon-src jiazhenghao$ node-gyp configure
192:addon-src jiazhenghao$ ls
binding.gyp     build           hello.cc
192:addon-src jiazhenghao$ node-gyp build
192:addon-src jiazhenghao$ ls build/Release/
addon.node      obj.target

192:L08 C++addons jiazhenghao$ node
Welcome to Node.js v12.2.0.
Type ".help" for more information.
> require.extensions
[Object: null prototype] {
  '.js': [Function],
  '.json': [Function],
  '.node': [Function],
  '.mjs': [Function]
}
> require.extensions['.js'].toString()
'function(module, filename) {\n  const content = ' +
  "fs.readFileSync(filename, 'utf8');\n  " +
  'module._compile(stripBOM(content), filename);\n}'
> require.extensions['.json'].toString()
'function(module, filename) {\n  const content = ' +
  "fs.readFileSync(filename, 'utf8');\n\n  if (manifest) {\n    const " +
  'moduleURL = pathToFileURL(filename);\n    ' +
  'manifest.assertIntegrity(moduleURL, content);\n  }\n\n  try {\n    ' +
  'module.exports = JSON.parse(stripBOM(content));\n  } catch (err) {\n    ' +
  "err.message = filename + ': ' + err.message;\n    throw err;\n  }\n}"
> require.extensions['.node'].toString()
'function(module, filename) {\n  if (manifest) {\n    const content = ' +
  'fs.readFileSync(filename);\n    const moduleURL = pathToFileURL(filename);\n   ' +
  ' manifest.assertIntegrity(moduleURL, content);\n  }\n  // Be aware this ' +
  "doesn't use `content`\n  return process.dlopen(module, " +
  'path.toNamespacedPath(filename));\n}'
