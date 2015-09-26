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
