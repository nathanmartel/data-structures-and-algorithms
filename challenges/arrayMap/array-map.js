const double = (number) => { return number * 2; };

function map(passedArray, passedFunction) {
    let newArr = [];
    for (let i = 0; i < passedArray.length; i++) {
        const newItem = passedFunction(passedArray[i]);
        newArr[i] = newItem;
    }
    return newArr;
}

module.exports = { map, double };
