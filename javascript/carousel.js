var slideImg;
var pictures = ['product-1', 'product-2', 'product-3', 'product-4'];
var descriptions = ['dog1', 'dog2', 'dog3', 'dog4'];
index = 0;

// Pick a random image
function start() {
  slideImg = document.getElementById('slideImg');
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');

  prev.addEventListener('click', reverse, false);
  next.addEventListener('click', forward, false);
}

function pickImage() {
  slideImg.setAttribute('src', '../images/' + pictures[index] + '.jpg');
  slideImg.setAttribute('alt', descriptions[index]);
}

function reverse() {
  if (index == 0) {
    index = 3;
  } else {
    index--;
  }
  pickImage();
}

function forward() {
  if (index == 3) {
    index = 0;
  } else {
    index++;
  }
  pickImage();
}

window.addEventListener('load', start, false);
