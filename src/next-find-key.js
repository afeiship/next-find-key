(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.findKey = function (inObject,inCallback) {
    var result;
    nx.each( inObject, function(key, value){
      if( inCallback.call(inObject, key, value, inObject)){
        result = key;
        return nx.BREAKER;
      }
    });
    return result;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.findKey;
  }

}());
