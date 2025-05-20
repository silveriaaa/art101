// index.js - purpose and description here
// Author: Emily BLanco
// Date: 3 May 2025

// sortUserName
function sortUserName() {
  var userName = window.prompt("Hello, please enter your name.");
  console.log("User's name =" + userName);
  // split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort) ;
  // join the array back to string
  var nameSorted = nameArraySort.join('');
  console.log ("nameSorted =", nameSorted);
  return nameSorted;
  
}

// output
document.writeln("Your name is fixed: ",
    sortUserName(), "</br>");










// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
