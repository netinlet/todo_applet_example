// # MyTodo Controller
//
module.exports = function($scope, localStorageService) {
  'use strict';

  $scope.newTodo = '';
  $scope.todoList = [];

  $scope.addTodo = function(todo_item) {
    $scope.todoList.push(todo_item);
    localStorageService.set('myTodoList', $scope.todoList)
  };

  $scope.submit = function() {
    if($scope.newTodo) {
      $scope.addTodo($scope.newTodo);
      $scope.newTodo = '';
    }
  };

  $scope.syncTodoList = function() {
    $scope.todoList = localStorageService.get('myTodoList');
  };

};
