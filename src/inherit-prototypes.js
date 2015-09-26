function inherit (extendthis, fromthese) {
  console.log(fromthese)
  console.log(extendthis)
  var keys=[];
  if(extendthis.prototype == undefined){
      var Empty = function(){}
      Empty.prototype = Object.prototype;
      extendthis.prototype = Empty.prototype;
  }
  fromthese.map((fromthis)=>{
    keys = Object.getOwnPropertyNames(fromthis.prototype);
    keys.shift();
    keys.map(function(key){
        extendthis.prototype[key]= fromthis.prototype[key];
    });
  });
}
module.exports = inherit;
