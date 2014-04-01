// # MyTodo Controller
//
module.exports = function($scope) {
  'use strict';

  $scope.newTodo = '';
  $scope.todoList = ['walk dog', 'go to work'];

  $scope.addTodo = function(todo_item) {
    this.todoList.push(todo_item);
  };

  $scope.submit = function() {
    if($scope.newTodo) {
      $scope.addTodo($scope.newTodo);
      $scope.newTodo = '';
    }
  };

};
