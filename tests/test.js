
var chai = require('chai');
var expect = chai.expect;
var inherit = require('../src/inherit-prototypes');


describe('ES6 class extends some class prorotypes', function () {
  it('should extend some ES6 style classes', function(){
    class base extends Array {}
    class Extras{
      extra(){return 'hi';}
    }

    var dependencies = [String, Object, Extras];
    inherit(base, dependencies);

    var arr = new base();
    arr.push('lets extend stuff in es6');
    expect(arr[0]).equals('lets extend stuff in es6');
    expect(arr[0].toUpperCase()).equals('LETS EXTEND STUFF IN ES6')
    expect(arr.extra()).equals('hi');

  });
});

describe('ES5 class extends some class prototypes', function(){
    it('should extend some E5 style classes', function(){
        var dependencies = [String, Object, Array];
        var base = {};
        inherit(base, dependencies);
        base.push('lets extend stuff in es5');

        expect(base[0]).equals('lets extend stuff in es5');
        expect(base[0].toUpperCase()).equals('LETS EXTEND STUFF IN ES5');

    });
});
