// Create a custom module that calculates statistics for an array of numbers. 
module.exports = {
    /**
     * Calculate the sum of an array of numbers.
     * @param {number[]} numbers - The array of numbers.
     * @returns {number} - The sum of the numbers.
     */
    sum: (numbers) => numbers.reduce((total, num) => total + num, 0),

    /**
     * Calculate the average of an array of numbers.
     * @param {number[]} numbers - The array of numbers.
     * @returns {number} - The average of the numbers.
     */
    average: (numbers) => numbers.length > 0 
        ? numbers.reduce((total, num) => total + num, 0) / numbers.length 
        : 0,

    /**
     * Find the maximum value in an array of numbers.
     * @param {number[]} numbers - The array of numbers.
     * @returns {number} - The maximum value.
     */
    max: (numbers) => Math.max(...numbers),

    /**
     * Find the minimum value in an array of numbers.
     * @param {number[]} numbers - The array of numbers.
     * @returns {number} - The minimum value.
     */
    min: (numbers) => Math.min(...numbers),

    /**
     * Calculate the variance of an array of numbers.
     * @param {number[]} numbers - The array of numbers.
     * @returns {number} - The variance of the numbers.
     */
    variance: (numbers) => {
        const avg = module.exports.average(numbers);
        return numbers.length > 0 
            ? numbers.reduce((total, num) => total + Math.pow(num - avg, 2), 0) / numbers.length 
            : 0;
    },

    /**
     * Calculate the standard deviation of an array of numbers.
     * @param {number[]} numbers - The array of numbers.
     * @returns {number} - The standard deviation of the numbers.
     */
    standardDeviation: (numbers) => Math.sqrt(module.exports.variance(numbers)),
};
