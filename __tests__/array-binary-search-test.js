const binarySearch = require('../challenges/array-binary-search/array-binary-search.js');

const arrayOne = [1, 2, 3, 4, 5];

describe('binary search', () => {
  it('returns an index of 1', () => {
    expect(binarySearch(2, arrayOne)).toEqual(1);
  }); 
});
