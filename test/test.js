var expect = require('chai').expect;

var lib = require('../lib/lib.js');

console.log(lib)

describe('lib', function() {
  describe('.map', function () {
    it('works with identity function', function () {
      var arr = [1,2,3]
      var mapped = lib.map(arr, function(v) {
        return v;
      });
      expect(mapped).to.eql(arr);
    });

    it('can double source array', function () {
      var arr = [1,2,3]
      var mapped = lib.map(arr, function(v) {
        return v*2;
      });
      expect(mapped).to.eql([2,4,6]);
    });
  });

  describe('.fold', function() {
    it('can sum an array', function() {
      var arr = [1,2,3]
      var acc = lib.fold(arr, function(acc, v) {
        return acc + v;
      }, 1);
      expect(acc).to.equal(7);
    });
  });

  describe('.unfold', function() {
    it('can count down a number', function() {
      var acc = 5;
      var arr = lib.unfold(acc, function(v) {
        if (v === 0) {
          return null;
        } else {
          return { element: v, acc: v-1 };
        }
      }, 1);
      expect(arr).to.eql([5,4,3,2,1]);
    });
  });
});
