var start = function() {
  // Gets the DOM form inputs from the submit button on the page
  var form = document.getElementById('submit');
  form.addEventListener('click', services, false);
};

// Function that calls on getSelected() to display the prices of the checked items that the user selected in the .cardinfo boxes below
var services = function() {
  var selected = getSelected(form);
  var discounted = calculateDiscount(selected);

  results = document.getElementById('card-info1');
  results.innerHTML =
    '<h2 class="txt-white center">Total price: $' +
    calculatePrice(selected) +
    '</h2>';

  sale = document.getElementById('card-info2');
  sale.innerHTML =
    '<h2 class="txt-white center">Discounted price: $' + discounted + '</h2>';
};

// Function that accepts a parameter and loops through the "input" tags inside that parameter.
// We verify whether a check box was checked and push the value to an array variable called items
var getSelected = function(form) {
  var items = [];

  var input = form.getElementsByTagName('input');

  for (var i = 0; i < input.length; i++) {
    if (input[i].type == 'checkbox' && input[i].checked == true) {
      items.push(input[i].value);
    }
  }
  return items;
};

// Function that accepts a parameter and loops through it's values and returns the sum of each item
var calculatePrice = function(item) {
  var sum = 0;

  for (var i = 0; i < item.length; i++) {
    sum = sum + parseInt(item[i]);
  }
  return sum.toFixed(2);
};

// Function that accepts a parameter value and parses it to an integer
// then converts and returns the discounted price
var calculateDiscount = function(item) {
  newPrice = parseInt(item) / 1.25;
  return newPrice.toFixed(2);
};

// Loads the file once the page is loaded into the browser
window.addEventListener('load', start, false);
