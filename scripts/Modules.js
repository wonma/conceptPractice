// 1. Inline Script
// Problem of this method
// ---- Lack of Code Reusability : Have to copy the whole scripts in each html docs.
// ---- Global Namespace : Pollutionn global namespace occurs. (Global space means window object.)

// 2. Script Tags
// Problem of this method
// ---- Even though the code is outside of html page, we still have to copy each script tags in each page.
// ---- Lack of Dependency Resolution: scripts must be added in a proper order
// ---- Global Namespace: Still has a high channce to pollute the global name space since all the functions and variables from different js files will be declared in the window object.

// 3. IIFE (Imediately Involved Function Execution)
// Solves Glbal Namespace Polluting. It has just one variable in the global space.
// ---- The rest is added as its own IFFE and the declared names has its own scope.
// ---- If you want to add variables and functions, you can do so by adding them
// ---- as properties or methods to the single global variable object.
// e.g.
// var myApp = {}
// (function(){
//  myApp.add = function(a, b) { return a + b; }
// })();
//
// Jquery uses this method.
//
// Still has a problem of Lack of Dependency Resolution.

// 4. CommonJS + Browserify (Module Bundler)
//
// JS file 1, named 'add.js'
// module.exports = function add(a, b) {
//    return a + b;
// }
//
// JS file 2
// var add = require("./add.js");
//
// It reads through all the JS files and syntax, it bundles into a single file.
// It is used right before we deploy.
// It creates a single JS file called 'bundled.js'.

// Browserfy의 탄생과 함께 Nodules 모듈이라는 개념이 나오기 시작함.
// ----- building blocks
// ----- different pieces of code
// ----- each piece is really good at one thing.
// ---------이때까지는 아직 module.exports를 각 js파일에서 사용함

// 5. ES6 + Webpack
// Webpack 나오면서 bundle뿐만 아니라 ES6를 이해하면서 모든 browser에서 이해할수있도록 commonJS로 알아서 바꿔줌.
// ES6 에서 'export', 'import' syntax가 등장하면서 훨씬 더 간결해짐.

// 과제: 두 argument를 더해주는 과업을 수행하는 function을 만들고 그것을 Export, import하는 것을 시연해보세요
//
// Filename: AddandOtherFunctions.js
// export const add = (a, b) => {
//     return a + b;
// }

// Filename: AddFunctionOnly.js
// export default const add = (a, b) => {
//     return a + b;
// }

// Importing A
// const { add } = require ("./AddandOtherFunctions.js")

// Importing B
// const add = require ("./AddFunctionOnly.js")
