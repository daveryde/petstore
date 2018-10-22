var showDate = function() {
  var header = document.querySelector('.logo');

  //  JavaScript greeting based on time of day
  var now = new Date(); // current date and time
  var hour = now.getHours(); // current hour (0-23)
  // determine whether it's morning
  if (hour < 12)
    header.innerHTML =
      "<span class='greeting'>Good Morning, from..</span><h1>Pawlished Pets</h1> ";

  // determine whether the time is PM
  if (hour >= 12) {
    // convert to a 12 hour clock
    hour = hour - 12;

    // determine whether it is before 6 PM
    if (hour < 6)
      header.innerHTML =
        "<span class='greeting'>Good Afternoon, from ..</span><h1>Pawlished Pets</h1>";

    // determine whether it is after 6 PM
    if (hour >= 6)
      header.innerHTML =
        "<span class='greeting'>Good Evening, from ..</span><h1>Pawlished Pets</h1>";
  } // end if
};

window.addEventListener('load', showDate, false);
