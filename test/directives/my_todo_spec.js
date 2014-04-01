var expect = require('expect.js');
var applet = require('../../app/directives/applet');

describe('Directive', function() {
  beforeEach(function() {
  });

  it('verify directive replace', function() {
    var directive = applet();
    expect(directive.replace).to.be(true);
  });

  it('verify directive restrict', function() {
    var directive = applet();
    expect(directive.restrict).to.be('EA')
  });

});
