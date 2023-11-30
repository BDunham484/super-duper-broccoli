const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// TODO: Complete the linearSearch function below.
const linearSearch = (array, element) => {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === element) {
            return index;
        }
    }
    return -1;
};

console.log(linearSearch(arr, 7));
console.log(typeof linearSearch)

