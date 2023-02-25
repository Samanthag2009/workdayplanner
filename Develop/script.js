//LEFT OFF AT LINE 72. COPY AND FORMAT THE LOCAL STORAGE FOR ALL HOURS
//MAKE SURE INIT RETRIEVES IT ON START UP
// THEN WE DO DAY.JS BULLSHIT




// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready (function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?



  var btnEl = document.querySelector("#btn");
  var nineInput = document.querySelector("#nine");
  var elevenAm = document.querySelector('eleven');
  var msgDiv = document.querySelector('#msg');

  renderEvents();

  function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', type);
  }

  function renderEvents() {
    var nine = localStorage.getItem("nine");
    var eleven = localStorage.getItem("eleven");

    if (!nine) {
      return;
    }

    if (!eleven) {
      return;
    }

    nineInput.textContent = nine;
    elevenAm.textContent = eleven;
  }
  
  btnEl.addEventListener("click", function(event){
    event.preventDefault();
    
    var nine = document.querySelector("#nine").value;
    var eleven = document.querySelector("#eleven").value;
    
    if (nine === "") {
      displayMessage("error", "Please enter an event.");
    } else {
      displayMessage("success", "Success! Schedule updated.");
      
      localStorage.setItem("9AM", JSON.stringify(nine));

      localStorage.setItem("11 AM", eleven);
      renderEvents();
    }

    console.log("this works");
    
  });
//Page Load
function init() {

  document.getElementById("nine").innerHTML=
  localStorage.getItem("9AM")
  
  renderEvents();

};

init();

// init()
// };
//localStorage.setItem
//localStorage.getItem(".description")
/*
btnEl.click(function() {

  var event = $(this).querySelector("#event").value;
  localStorage.setItem("Event", event);

}
*/

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
// function time() {
//   function timeConvert() {
// var 

//   }
//   var now = dayjs().hour();
//   var timeBlock = 

//   if (timeBlock = now) {
//     element.classList.add("present");
//   }

// };

//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.
// var today = dayjs();
// $('#currentDay').text(today.format('dddd MMMM D, YYYY'));
 });
