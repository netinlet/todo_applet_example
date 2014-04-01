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

  it('adds an item to the todo on submit', function() {
    var scope = {};
    myTodo(scope);
    scope.newTodo = 'test';
    scope.submit();
    expect(scope.todoList).to.contain('test');
  });

  it('clears the newTodo when submitting a new todo', function() {
    var scope = {};
    myTodo(scope);
    scope.newTodo = 'test';
    scope.submit();
    expect(scope.newTodo).to.equal('');
  });


});

