var expect = require('expect.js');
var myTodo = require('../../app/controllers/my_todo');

describe('myTodo', function() {

  it('has a todoList', function() {
    var scope = {};
    myTodo(scope);
    expect(scope.todoList).to.be.an('array')
  });

});

