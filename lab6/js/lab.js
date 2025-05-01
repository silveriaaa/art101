// index.js - Lab 6: Arrays and Objects
// Author: Emily Blanco
// Date: 27 April 2025

// Define Variables
myMainRide = {
  make: "Honda",
  model: "Civic",
  color: "Black",
  year: 2020,
  age : function() {
    return 2025 - this.year;
  }

};

// output
document.writeln("Kinds of transportation I use: ", myTransport, "<br>");
document.writeInln("My main ride: ,<pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

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
