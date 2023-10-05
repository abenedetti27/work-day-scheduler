//TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

// make multiple timeblocks
// rename timeblocks accordingly with standard work hours
// global event listener to make sure clicking on the save button
// use event target, to traverse the DOM
// the save button is to save input into the timeblock into local storage
$('.saveBtn').on('click', function(){
  //use DOM traversal to get time block id
  var timeBlockID = $(this).closest('time-block').attr('id');
  //use id as key to save input in local storage
  var userInput = $(this).siblings('.description').val();
  localStorage.setItem(timeBlockID, userInput)
});

//TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

//declare current time for callback as a variable
// create an array and place DOM nodes in the array / DOM node: grabs an element on the page.
// Use loop to iterate through array to compare to current date/time using dayjs()
// assign past, present, and future classes
var currentHour = dayjs().format('H');//24 hour format?
console.log("current hour",currentHour)
$('.time-block').each(function() {
  var timeBlockHour = parseInt($(this).attr('id').split('-')[1]);
  console.log(timeBlockHour)
  if (timeBlockHour < currentHour){
    $(this).addClass('past').removeClass('present future');
  }
  else if (timeBlockHour === currentHour) {
  
    $(this).addClass('present').removeClass('past future');
} else {
    $(this).addClass('future').removeClass('past present');
}
});

// TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // Grab information from local storage, in correspondence to the time of the day/ locate the appropriate timeblock and set value of input/textarea to the corresponding data to that timeblock
$('.time-block').each(function() {
  var timeBlockID =$(this).attr('id');
  var storedInput = localStorage.getItem(timeBlockID);
  $(this).find('description').val(storedInput);
}

);





//TODO: Add code to display the current date in the header of the page.

// make a variable that is for the current day with dayjs
// set all dates in currentDate to variable of dayjs()
// 1 object per time slot / or 1 that encompasses all of them
//does not work to display current date in header....?
var currentDate = dayjs().format('MMM D, YYYY');
$('#currentDay').text(currentDate);

