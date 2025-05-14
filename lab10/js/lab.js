// index.js - purpose and description here
// Author: Emily Blanco
// Date:

// Create a webchat simulation with an input field and a button to add a message to the convo


// make a box for the convo

// add the button

// user types something in the text boc

// on clck event listener
$("action").click( 
    function() {
      
  // what will happen when button is clicked

  // make the button copy the text

  // find the box

  //usertext=$("#userinput").val("blahblah")

  // and its contents

  // copy the contents
    let usertext=$("#userinput").val();
  console.log(usertext);

  // copy where? div convo

  $("#convo").append(usertext+"<br>");

  }
)

