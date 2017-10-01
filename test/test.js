var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-find-key');

describe('next/findKey', function () {

  it('nx.find key', function () {
    var users = {
      'barney':  { 'age': 36, 'active': true },
      'fred':    { 'age': 40, 'active': false },
      'pebbles': { 'age': 1,  'active': true }
    };

    var key1 = nx.findKey(users , function(key,value){
      return value.age ==1;
    });

    assert.equal(key1,'pebbles');
  });

});
