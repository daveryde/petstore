var start = function() {
  // Gets the DOM elements from the page
  var sectionOne = document.querySelector('.tableOne');
  var sectionTwo = document.querySelector('.tableTwo');

  // Array of key/value objects containing the product names and prices
  var products = [
    (largeDogs = {
      service: 'Large Dog Grooming',
      price: 65
    }),
    (smallDogs = {
      service: 'Small Dog Grooming',
      price: 50
    }),
    (largeCat = {
      service: 'Large Cat Grooming',
      price: 45
    }),
    (smallCat = {
      service: 'Small Cat Grooming',
      price: 35
    })
  ];

  // Table template stored in a variable
  var table =
    "<table><caption><h2>Pawlished Pets Products</h2></caption><thead><tr><th class='bg-dark txt-white center'>Grooming Services</th><th class='bg-dark txt-white center'>Price</th></tr></thead><tbody>";

  // Table template for orginal price
  var tableOne = table;

  // Loop through the length of the product arrays and displays
  // the service/price within the designated table
  for (var i = 0; i <= products.length - 1; i++) {
    tableOne +=
      '<tr><td>' +
      products[i].service +
      '</td><td>' +
      products[i].price +
      '</td></tr>';
  }

  // End of table in the HTML document
  tableOne += '</tbody></table><br><br>';

  // Display the first table
  sectionOne.innerHTML = tableOne;
};

// Loads the file once the page is loaded into the browser
window.addEventListener('load', start, false);
