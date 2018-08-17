/// Javascript code function will be called on body load 

var g_counter = 0;
var g_rowCounter = 0;
function AddRow(){
    // Find a <table> element with id
    var table = document.getElementById('dynamic-table');

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(g_rowCounter);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // Add some text to the new cells:
    cell1.innerHTML = 'Cell'+(++g_counter);
    cell2.innerHTML = 'Cell'+(++g_counter);
    g_rowCounter++;
}