var expect = require('expect.js');
var applet = require('../../app/controllers/applet');


describe('Hello World', function() {
  it('Speaks Hello', function() {
    var scope = {};
    applet(scope);
    expect(scope.foo).to.be('Hello World')
  });

  //assert.equal(scope.foo, 'Hello World');
});

//test('Hello World', function(t) {
//var scope = {};
//applet(scope);
//t.ok(scope.foo);
//t.equals(scope.foo, 'Hello World');
//t.end();
//});

