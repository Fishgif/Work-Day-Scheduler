
let timeContainer = document.getElementById('time-container')
let clock = $('#clock');

// When load page want to see time slots

function createRow (time){


    let timestamp  = time + ':00';

    let row  = $("<div>").attr('class', 'row border');

    let timeCol = $("<div>").attr('class', 'col-2').text(timestamp);

    row.append(timeCol)

    let inputCol = $("<div>").attr('class', 'col-8')

    let input = $("<input>").attr('type', 'text').attr('class', 'input-note');

    // If event time has existing note add to input
    let existingNote = getNote(time)
    if(existingNote){
        input.val(existingNote);
    }

    inputCol.append(input)

    row.append(inputCol)

    let buttonCol = $("<div>").attr('class', 'col-2')

    let button = $("<button>").attr('class', 'btn btn-primary save-note-btn').text('Save')

    buttonCol.append(button)

    row.append(buttonCol)

    return row;
}

// from 9-5
for (let time = 9; time < 18; time++) {
    
    let row = createRow(time);
    $('#time-container').append(row)
}


// show day date and time.
setInterval(function(){

let time = moment().format("MMMM dddd Do YYYY, HH:mm:ss");
$("#clock").text(time);

}, 1000)
// update clock every second

// if time is passed block as grey
// current time is red

// future is red


function getNote(time){

    let timestamp = time + ':00';

   return localStorage.getItem(timestamp)

} 


function saveNote(note, time){

localStorage.setItem(time, note)

}

// Load existing data from LS
$('.input-note').on('change', document, function(event){
    
    let inputEL = $(event.target);

    let timestamp = inputEL.parent().prev().text();

    let userInput = inputEL.val();


// Whats woudl happen when you set a task

// nothing

// if you click on save button
saveNote(userInput, timestamp)
// Save text to local storage 

})
 
$('.sav-note-btn').on("click", document, function(event){
let inputEL = $(event.target).parent().prev(). children()[0]

let userInput = $(inputEL).val();

let timeEl = $(event.target).parent().parent().prev()

let timestamp = timeEl.text()

saveNote(userInput, timestamp)

});
// if no input from user leave as is 




function setBackgroundColor() {
    var objDate = new Date();
    var currentHour = objDate.getHours();
    var hours = $('#timecolumn').val();
    if (timestamp === currentHour) {
        $(inputCol).addClass("present");
    }
    else if (hours < currentHour) {
        $(inputCol).addClass("past");

    }
    else {
        $(inputCol).addClass("future");

        console.log(hours, currentHour)
    }
}