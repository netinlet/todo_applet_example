var expect = require('expect.js');
var applet = require('../../app/controllers/applet');

describe('Hello World', function() {
  it('Speaks Hello', function() {
    var scope = {};
    applet(scope);
    expect(scope.foo).to.be('Hello World')
  });
});

