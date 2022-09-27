var nv = require('validator');
var validMatcher = /^(is.*|equals|contains|matches)/;

var v = {};

var getCurriedFunction = function(vfunc){
  return function(){
    var initialArgs = Array.prototype.slice.call(arguments, 0);
    return function(value){
      args = initialArgs.slice(0);
      args.unshift(value);
      return vfunc.apply(nv, args);
    };
  };
};

for(var key in nv){
  if(!nv.hasOwnProperty(key)) continue;
  if(typeof nv[key] !== 'function') continue; // only care about functions
    if(!validMatcher.test(key)) continue;

    v[key] = getCurriedFunction(nv[key]);
  }

  module.exports = exports = v;
