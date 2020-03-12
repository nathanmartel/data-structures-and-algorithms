const binarySearch = require('../challenges/array-binary-search/array-binary-search.js');

describe('binary search', () => {
  it('finds the key in the middle of an array', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toEqual(2);
  }); 
  it('finds the key in the low middle of an even-numbered length array', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 3)).toEqual(2);
  }); 
  it('finds the key in the high middle of an even-numbered length array', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 4)).toEqual(3);
  }); 
  it('finds the key in the bottom half of an array', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 2)).toEqual(1);
  }); 
  it('finds the key in the top half of an array', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 5)).toEqual(4);
  }); 
  it('finds the key at the end of an array', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 6)).toEqual(5);
  }); 
  it('works for strings, too', () => {
    expect(binarySearch(['alpha', 'beta', 'gamma'], 'gamma')).toEqual(2);
  }); 
});
