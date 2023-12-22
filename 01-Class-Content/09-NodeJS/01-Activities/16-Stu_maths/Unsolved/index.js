// TODO: Import `maths.js`
const maths = require('./maths.js');

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
// const operation = process.argv[2];
// const numOne = process.argv[3];
// const numTwo = process.argv[4]

const [operation, numOne, numTwo] = process.argv.slice(2);

// console.log(operation)
// console.log(numOne)
// console.log(numTwo)

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
// console.log(maths[operation](+numOne, +numTwo))

const result = maths?.[operation]?.(+numOne, +numTwo)

console.log(result)