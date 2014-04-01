// # MyTodo Controller
//
module.exports = function($scope) {
  'use strict';

  $scope.todoList = [];

  $scope.addTodo = function(todo_item) {
    this.todoList.push(todo_item);
  };

};
