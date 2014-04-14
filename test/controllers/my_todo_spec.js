var expect = require('expect.js');
var sinon = require('sinon');
var myTodo = require('../../app/controllers/my_todo');

describe('myTodo', function() {
  var storage = {};
  var localStorage = {
      set: function(name, value) {
        storage[name] = value;
      },
      get: function(name) {
        return storage[name];
      }
    }

  it('has a todoList', function() {
    var scope = {};
    myTodo(scope, localStorage);
    expect(scope.todoList).to.be.an('array');
  });

  describe('Adding/syncing todoList', function() {
    beforeEach(function() {
      storage = [];
    });

    it('can add an item to the todo list', function() {
      var scope = {};
      myTodo(scope, localStorage);
      scope.addTodo('coffee');
      expect(scope.todoList).to.contain('coffee');
    });

    it('puts the todoList into localStorage when adding a Todo', function(){
      var scope = {};
      myTodo(scope, localStorage);
      scope.addTodo('tea');
      expect(storage['myTodoList'].indexOf('tea')).not.to.equal(-1);
    });

    it('adds an item to the todo on submit', function() {
      var scope = {};
      myTodo(scope, localStorage);
      scope.newTodo = 'test';
      scope.submit();
      expect(scope.todoList).to.contain('test');
    });

    it('clears the newTodo when submitting a new todo', function() {
      var scope = {};
      myTodo(scope, localStorage);
      scope.newTodo = 'test';
      scope.submit();
      expect(scope.newTodo).to.equal('');
    });


  });
});

