var expect = require('expect.js');
var sinon = require('sinon');
var myTodo = require('../../app/controllers/my_todo');

describe('myTodo', function() {

  beforeEach(function() {
    angular.mock.module('mytodo', function($provide) {
      $provide.value('LocalStorageModule', function() {
      });
    });
  }

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

  it('puts the todoList into localStorage when adding a Todo', function(){
    var scope = {};
    var spy = sinon.spy();
    myTodo(scope, spy);
    scope.addTodo('tea');
    expect(sinon.calledWith('myTodoList', ['tea']).to.be.ok())
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

