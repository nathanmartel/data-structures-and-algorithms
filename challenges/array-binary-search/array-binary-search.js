const binarySearch = (arr, key) => {
  let lowIndex = 0;
  let highIndex = arr.length;
  let midpoint = Math.floor(highIndex / 2);
  if(key === arr[midpoint]) return midpoint;
  do{
    if(key < arr[midpoint]) {
      highIndex = midpoint;
      midpoint = Math.floor(highIndex / 2);
    } else {
      // key > midpoint
      lowIndex = midpoint;
      midpoint = Math.floor((highIndex - lowIndex) / 2) + lowIndex;
    }
  } while(key !== arr[midpoint]);
  return midpoint;
};

module.exports = binarySearch;
