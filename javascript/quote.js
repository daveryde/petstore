var start = function() {
  var form = document.getElementById('submit');
  form.addEventListener('click', services, false);
};

// Function that calls on getSelected() to display the prices of the checked items that the user selected in the .cardinfo boxes below
var services = function() {
  var selected = getSelected(this.form);

  results = document.getElementById('card-info');
  results.innerHTML =
    '<h1 class="txt-white">The prices are $' + selected + '</h1>';
};

// Function that accepts a parameter and loops through the "input" tags inside that parameter. We verify whether a check box was checked and push the value to an array variable called items
var getSelected = function(form) {
  var items = [];

  var input = form.getElementsByTagName('input');

  for (var i = 0; i < input.length; i++) {
    if (input[i].type == 'checkbox' && input[i].checked == true) {
      items.push(input[i].value);
    }
  }
  return calculatePrice(items); // Calls on the caculate function
};

// Function that accepts a parameter and loops through it's values and returns the sum of each item
var calculatePrice = function(items) {
  var sum = 0;

  for (var i = 0; i < items.length; i++) {
    sum = sum + parseInt(items[i]);
  }
  return sum;
};

window.addEventListener('load', start, false);
