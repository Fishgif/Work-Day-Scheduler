
let timeContainer = document.getElementById('time-container')


// When load page want to see time slots

function createRow (time){


    let timestamp  = time + ':00';

    let row  = $("<div>").attr('class', 'row border');

    let timeCol = $("<div>").attr('class', 'col-2').text(timestamp);

    row.append(timeCol)

    let inputCol = $("<div>").attr('class', 'col-8')

    let input = $("<input>").attr('type', 'text');

    inputCol.append(input)

    row.append(inputCol)

    let buttonCol = $("<div>").attr('class', 'col-2')

    let button = $("<button>").attr('class', 'btn btn-primary').text('Save')

    buttonCol.append(button)

    row.append(buttonCol)

    return row;
}

// from 9-5
for (let time = 9; time < 18; time++) {
    
    const row = createRow(time);
    timeContainer.append(row);
}

// Load existing data from LS


// Whats woudl happen when you set a task
// nothing

// if you click on save button
// Save text to local storage 

// if no input from user leave as is 

// show day date and time.

// if time is passed block as grey
// current time is red

// future is red

