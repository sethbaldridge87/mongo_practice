/* TODO:

  1. Make a reusable function for creating a table body in index.html with the results from your MongoDB query
  Each row should have info for one animal.

  2. Make two AJAX functions that fire when users click the two buttons on index.html.
      a. When the user clicks the Weight button, the table should display the animal data sorted by weight.
      b. When the user clicks the Name button, the table should display the animal data sorted by name.

  Good luck!

  *Hint*: We don't want to keep adding to the table with each button click. We only want to show the new results.
  What can we do to the table to accomplish this?

  *Bonus*: Write code to set an 'active' state on the column header. It should make the color sorted-by column red.
  *Bonus*: Add additional ways to sort (e.g. by class or number of legs)
*/

// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in data (JSON) and creates a table body
function displayResults(data) {
      $('tbody').empty();
      for(var key in data) {
      var prodName = data[key]["name"];
      var prodPurpose = data[key]["purpose"];
      var prodType = data[key]["type"];
      var prodWeight = data[key]["weight"];
      var newRow = $('<tr>');
      newRow.append('<td>' + prodName + '</td>');
      newRow.append('<td>' + prodPurpose + '</td>');
      newRow.append('<td>' + prodType + '</td>');
      newRow.append('<td>' + prodWeight + '</td>');
      $('tbody').append(newRow);
  }
}

$.getJSON("/all", function(data) {
    displayResults(data)
});

$('#weight-sort').click(function(){
    $.getJSON("/weight", function(data) {
        displayResults(data)
    });
});

$('#name-sort').click(function(){
    $.getJSON("/name", function(data) {
        displayResults(data)
    });
});

$('#blast').click(function(){
    $.getJSON("/blast", function(data) {
        displayResults(data)
    });
});

$('#kleen').click(function(){
    $.getJSON("/kleen", function(data) {
        displayResults(data)
    });
});
$('#newSubmit').click(function(){
    alert("New item");
    newItem = {
        name: $('#product-name').val().trim(),
        purpose: $('#product-purpose').val().trim(),
        type: $('#product-type').val().trim(),
        weight: $('#product-weight').val().trim()
    }
    console.log(newItem);
});
$(document).ready(function() {
    $('select').material_select();
});