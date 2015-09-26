module.exports = function inherit (extendthis, fromthese) {
  console.log(fromthese)
  var keys=[];

  fromthese.map((fromthis)=>{
    keys = Object.getOwnPropertyNames(fromthis.prototype);
    keys.shift();
    keys.map(function(key){
        extendthis.prototype[key]= fromthis.prototype[key];
    });
  });
}
