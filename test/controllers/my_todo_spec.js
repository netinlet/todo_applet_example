var expect = require('expect.js');
var myTodo = require('../../app/controllers/my_todo');

describe('myTodo', function() {

  beforeEach(function(){
  });

  it('has a todoList', function() {
    var scope = {};
    myTodo(scope);
    expect(scope.todoList).to.be.an('array');
  });

  it('can add an item to the todo list', function() {
    var scope = {};
    myTodo(scope);
    scope.addTodo('coffee');
    expect(scope.todoList).to.contain('coffee');
  });

});

