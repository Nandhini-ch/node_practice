// Importing the custom module
const math = require('./math');

const sum = math.add(5, 3);
const difference = math.subtract(10, 7);

console.log(`Sum: ${sum}`);          // Output: Sum: 8
console.log(`Difference: ${difference}`); // Output: Difference: 3
