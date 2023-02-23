const path = require('path');
console.info(path.resolve(__dirname, 'a'));
// Users/gouxiwen/Desktop/node/a
console.info(path.join(__dirname, 'a'));
// /Users/gouxiwen/Desktop/node/a
console.info(path.resolve('a','./b'))
// /Users/gouxiwen/Desktop/node/a/b
console.info(path.join('a','./b'))
// a/b
console.info(path.resolve('a','/b'))
// /b
console.info(path.relative('a','/b'))
// ../../../../../b
console.info(path.relative('/a','/b'))
// ../b