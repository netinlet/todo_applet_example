(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// # app
//
// add dependencies
// host should include pouchdb
// host should include angular
// require('angular/angular');


// main module info
angular.module('applet', [])
  .directive('applet', require('./directives/applet'))
  .directive('myTodo', require('./directives/my_todo'));

},{"./directives/applet":4,"./directives/my_todo":5}],2:[function(require,module,exports){
// # Applet Controller
//
module.exports = function($scope) {
  'use strict';

  $scope.foo = 'Hello World';
};

},{}],3:[function(require,module,exports){
// # MyTodo Controller
//
module.exports = function($scope) {
  'use strict';

  $scope.todoList = [];

  $scope.addTodo = function(todo_item) {
    this.todoList.push(todo_item);
  };

};

},{}],4:[function(require,module,exports){
// # applet directive
//
// Description of what the directive does
//
// ## Usage example
//
//
var fs = require('fs');
module.exports = function(/* dependency injection */) {
  return {
    // element or attribute
    restrict: 'EA',
    // replace html with directive template
    replace: true,
    // isolated scope?
    scope: {},
    // template
    template: "<div class=\"jumbotron\">\n  <h1>{{foo}}</h1>\n  <input ng-model=\"foo\">\n</div>\n",
    // controller
    controller: require('../controllers/applet.js')
  }
}

},{"../controllers/applet.js":2,"fs":6}],5:[function(require,module,exports){
// # myTodo directive
//
// Description of what the directive does
//
// ## Usage example
//
//
var fs = require('fs');
module.exports = function(/* dependency injection */) {
  return {
    // element or attribute
    restrict: 'EA',
    // replace html with directive template
    replace: true,
    // isolated scope?
    scope: {},
    // template
    template: "<div class=\"jumbotron\">\n  <h1>{{foo}}</h1>\n  <input ng-model=\"foo\">\n</div>\n",
    // controller
    controller: require('../controllers/my_todo.js')
  }
}

},{"../controllers/my_todo.js":3,"fs":6}],6:[function(require,module,exports){

},{}]},{},[1])