// First, we'll build the grid
var button = document.querySelector("Input[type='submit']");

// When the submit button is clicked, call the makeGrid function
button.addEventListener('click', function(event) {
  makeGrid();
  event.preventDefault(); // We need this to keep the grid from automatically resetting
});

// Build the blank grid
function makeGrid() {
  // Get the section of the page we need to build the grid
  var table = document.getElementById('pixelCanvas');
  // Get the height and width variables
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
  // This ensures the submit button resets the grid
  table.innerHTML = '';

  var tbody = document.createElement('tbody');
  // The outer loop is for creating rows
  for (var h = 0; h < height; h++) {
    var row = document.createElement('tr');
    // The inner loop creates the columns in each row
    for (var w = 0; w < width; w++) {
      var col = document.createElement('td');
      col.appendChild(document.createTextNode(''));
      row.appendChild(col); // Append columns to each row
    }
    tbody.appendChild(row); // Append each row to the table body
  }
  table.appendChild(tbody); // Append the body to the table
}

// Now we'll set the color for the squares
var table = document.querySelector('table');

// When the color button is clicked, call the setColor function
table.addEventListener('click', function(event) {
  let td = event.target.closest('td');
  setColor(td);
});

// Set the color of the square that's been clicked
function setColor(td) {
  var color = document.getElementById('colorPicker').value;
  td.style.backgroundColor = color;
}