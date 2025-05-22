// index.js - Conditionals
// Author: Emily Blanco
// Date: May 2025



// Create a function 

function getColor(num) {
  // Remainder when divided by 4
  let remainder = num % 4;
  let color = "";
  // Assign colors based on the remainder
  if (remainder === 0) {
    color = "lavender";
  } else if (remainder === 1) {
    color = "beige";
  } else if (remainder === 2) {
    color = "maroon";
  } else if (remainder === 3) {
    color = "baby blue";
  }
  return color;
}

// attach a click handler to submit button
$("#button").click(function() {
  // get the value of the input field
 let name = $("#input").val()
 console.log(name);
 // get length of the name
  let nameLength = name.length;
  console.log(nameLength);
  // get the color
  let color = getColor(nameLength);
  console.log(color);
  //add color to output div
  $("#output").html("<h1>" + color + "</h1>");
})

