// index.js - JavaScript/jQuery script
// Author: Emily Blanco
// Date: May 2025


//Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // convert the string to an array of characters
    return inputString.split("").sort().join("");
  }

  // click listener for button
  $("#submit").click(function(){
  });

// get the value of the input field
const userName = $("#user-name").val();

// sort the name
userNameSorted = sortString(userName);

// apped a new div to our output div
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');