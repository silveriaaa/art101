// index.js - appends new elements to an output div
// Author: Emily Blanco
// Date: May 2025

// Create a webchat simulation with an input field and a button to add a message to the convo


// make a box for the convo

// add the button

// user types something in the text boc

function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        const min = 3;
        const max = 100;
        const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
        // Get a random starting index to slice the text
        const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
        // Generate the random text
        return text.slice(randStart, randStart + randLen)
    }
// add an event listener to the button
  $("#make-convo").click(function() {
  });
// get new fake dialogue
const newText = generateRandomText();

// append a new div to our output div
$("#output").append('<div class="text"><p>' + newText + '</p></div>');


