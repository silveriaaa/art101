
/*
  lab.js - Simple JavaScript/jQuery script using buttons to modify the page

  Requirement: jQuery must be loaded for this script to work.

  Author: Emily Blanco
  Date: May 2025
*/

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Click Me!</button>");

// add button to problems section
$("#problems").append("<button id='button-problems'>Click Me!</button>");

// add button to results section
$("#results").append("<button id='button-results'>Click Me!</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function() {
  // add (or subbtract) the "special" class to the section
  $("#challenge").toggleClass("special");
  console.log("Challenge button clicked");
});
// add a click listener to the problems button
$("#button-problems").click(function() {
  // add (or subtract) the "special" class to the section
  $("#problems").toggleClass("special");
});
// add a click listener to the results button
$("#button-results").click(function() {
  // add (or subtract) the "special" class to the section
  $("#results").toggleClass("special");
});


