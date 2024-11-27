// How to create and use your own modules

// Exporting multiple functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = { add, subtract };
// Importing the module