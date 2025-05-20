// index.js - purpose and description here
// Author: Emily BLanco
// Date: 8 May 2025


// function, double numbers
function double(x) {
  return x * 2;
}

// array of numbers
array = [4, 9, 16, 25, 43, 52, 60];
console.log("My array", array);

var result = array.map(double);
console.log("Numbers Doubled", result);

// function to square a number
function squared(x) {
  return x * x;
}

var result = array.map(squared);
console.log("Numbers Squared", result);