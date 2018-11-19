var faces;

function loadSearches() {
  // Create  Array
  faces = [
    'https://images.dog.ceo/breeds/hound-blood/n02088466_3448.jpg',
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_12945.jpg',
    'https://images.dog.ceo/breeds/hound-blood/n02088466_7344.jpg',
    'https://images.dog.ceo/breeds/hound-basset/n02088238_8520.jpg',
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_4497.jpg',
    'https://images.dog.ceo/breeds/hound-english/n02089973_3426.jpg',
    'https://images.dog.ceo/breeds/hound-afghan/n02088094_3119.jpg',
    'https://images.dog.ceo/breeds/hound-blood/n02088466_9237.jpg',
    'https://images.dog.ceo/breeds/hound-blood/n02088466_1563.jpg',
    'https://images.dog.ceo/breeds/hound-english/n02089973_2249.jpg'
  ];

  // Variable to store all of the HTML markup
  var results = document.getElementById('list');
  var markup = "<div class='polaroid'>";

  // Load portraits array into markup with HTML elements
  for (var face in faces) {
    markup +=
      "<div class='polaroidBox'>" +
      "<img src='" +
      faces[face] +
      "'" +
      "id='" +
      face +
      "'>" +
      '</div>';
  } // end for loop

  // Close HTML markup variable
  markup += '</div>';

  // Display markup inside the results element ID
  results.innerHTML = markup;
}

// Register event listeners and load Storage
function start() {
  var search = document.getElementById('submitButton');
  search.addEventListener('click', loadSearches, false);
}

//  Starts the app
window.addEventListener('load', start, false);
