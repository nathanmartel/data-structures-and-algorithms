const myArray = [2, 4, 6, 8, 10];
double = (number) => { return number * 2; }

function map(passedArray, passedFunction) {
    let newArr = [];
    for (let i=0; i < passedArray.length; i++) {
        const newItem = passedFunction(passedArray[i]);
        newArr[i] = newItem;
    }
    return newArr;
}

console.log('original array', myArray);
console.log('mapped array', map(myArray, double));