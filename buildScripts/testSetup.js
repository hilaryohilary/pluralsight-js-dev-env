//This file isn't transpiled, so must use CommonJS and ES5

//Register babel to transpile befor our tests run.
require('babel-register')();

//disable webpack features that mocha doesn't understand.
require.extensions['.css'] = function() {};
