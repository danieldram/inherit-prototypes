# What Does It Do?
This package allows you extend / inherit a class with the prototypes of an array of classes. ES6/ES5 compatible.


## How to Use
```sh
npm install inherit-prototypes --save
```

```js
var inherit = require('inherit-prototypes');
//Includes is a class you want to extend Prototypes
class Includes {
someCoolPrototype (){... }
}
//IWantCoolPrototypes is a class that wants the Includes Prototypes.
class IWantCoolPrototypes extends Array {}

//Create an array of dependencies and call the inherit function as below.
var dependencies = [includes, String, Object];
inherit(IWantCoolPrototypes, dependencies);

```

# TESTS
```js
var chai = require('chai');
var expect = chai.expect;
var inherit = require('../src/inherit-prototypes');


describe('ES6 class extends some class prorotypes', function () {
  it('should extend some ES6 style classes', function(){
    class base extends Array {}

    var dependencies = [String, Object];
    inherit(base, dependencies);

    var arr = new base();
    arr.push('lets extend stuff in es6');
    expect(arr[0]).equals('lets extend stuff in es6');
    expect(arr[0].toUpperCase()).equals('LETS EXTEND STUFF IN ES6')

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

```
