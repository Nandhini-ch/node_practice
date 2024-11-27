const stats = require('./stats');

// Example array of numbers
const numbers = [10, 20, 30, 40, 50];

console.log('Numbers:', numbers);
console.log('Sum:', stats.sum(numbers));
console.log('Average:', stats.average(numbers));
console.log('Maximum:', stats.max(numbers));
console.log('Minimum:', stats.min(numbers));
console.log('Variance:', stats.variance(numbers));
console.log('Standard Deviation:', stats.standardDeviation(numbers));
