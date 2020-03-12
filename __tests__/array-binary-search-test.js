const binarySearch = require('../challenges/array-binary-search/array-binary-search.js');

describe('binary search', () => {
  it('finds the key in the middle of an array', () => {
    expect(binarySearch(3, [1, 2, 3, 4, 5])).toEqual(2);
  }); 
  it('finds the key in the low middle of an even-numbered length array', () => {
    expect(binarySearch(3, [1, 2, 3, 4, 5, 6])).toEqual(2);
  }); 
  it('finds the key in the high middle of an even-numbered length array', () => {
    expect(binarySearch(4, [1, 2, 3, 4, 5, 6])).toEqual(3);
  }); 
  it('finds the key in the bottom half of an array', () => {
    expect(binarySearch(2, [1, 2, 3, 4, 5, 6])).toEqual(1);
  }); 
  it('finds the key in the top half of an array', () => {
    expect(binarySearch(5, [1, 2, 3, 4, 5, 6])).toEqual(4);
  }); 
  it('finds the key at the end of an array', () => {
    expect(binarySearch(6, [1, 2, 3, 4, 5, 6])).toEqual(5);
  }); 
  it('works for strings, too', () => {
    expect(binarySearch('gamma', ['alpha', 'beta', 'gamma'])).toEqual(2);
  }); 
});
