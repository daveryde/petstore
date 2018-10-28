var slideImg;
var pictures = ['product-1', 'product-2', 'product-3', 'product-4'];
var descriptions = ['dog1', 'dog2', 'dog3', 'dog4'];
index = 0;

// Initializes the JavaScript file
function start() {
  // Gets the DOM elements from the page
  slideImg = document.getElementById('slideImg');
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');

  // Adds an event listener/function route to the previous or next buttons
  prev.addEventListener('click', reverse, false);
  next.addEventListener('click', forward, false);
}

function reverse() {
  // The previous button was button was pressed
  // Moves the index variable -1 or to the end of the array
  if (index == 0) {
    index = 3;
  } else {
    index--;
  }
  // Call the next function to display the previous image in the array
  pickImage();
}

function forward() {
  // The next button was button was pressed
  // Moves the index variable -1 or to the end of the array
  if (index == 3) {
    index = 0;
  } else {
    index++;
  }
  // Call the next function to display the next image in the array
  pickImage();
}

function pickImage() {
  // Sets the DOM image to the image selected in the pictures array
  slideImg.setAttribute('src', './images/' + pictures[index] + '.jpg');
  slideImg.setAttribute('alt', descriptions[index]);
}

// Loads the file once the page is loaded into the browser
window.addEventListener('load', start, false);
