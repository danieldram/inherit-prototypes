function inherit (extendthis, fromthese) {
  var keys=[];
  if(extendthis.prototype == undefined){
      var Empty = function(){}
      Empty.prototype = Object.prototype;
      extendthis.prototype = Empty.prototype;
  }
  fromthese.map(function(fromthis){
    keys = Object.getOwnPropertyNames(fromthis.prototype);
    keys.shift();
    keys.map(function(key){
        extendthis.prototype[key]= fromthis.prototype[key];
    });
  });
}
module.exports = inherit;
