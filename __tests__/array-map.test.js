const {
  double, 
  map
} = require('../challenges/arrayMap/array-map.js');

const myArray = [2, 4, 6];
const myStringArray = ['a', 'b', 'c'];
const myEmptyArray = [];


describe('validator module', () => {
  describe('basic validation', () => {
    it('doubles value of supplied array', () => {
      expect(map(myArray, double)).toEqual([4, 8, 12]);
      expect(map(myStringArray, double)).toEqual([NaN, NaN, NaN]);
      expect(map(myEmptyArray, double)).toEqual([]);
    });
  });
});
