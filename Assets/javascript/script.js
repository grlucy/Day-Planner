$(document).ready(function() {
  const currentDate = moment().format("MMMM Do, YYYY");
  let currentTime = moment().format("hh:mm:ss A");
  let currentHour;
  const possibleHours = [
    "12AM",
    "01AM",
    "02AM",
    "03AM",
    "04AM",
    "05AM",
    "06AM",
    "07AM",
    "08AM",
    "09AM",
    "10AM",
    "11AM",
    "12PM",
    "01PM",
    "02PM",
    "03PM",
    "04PM",
    "05PM",
    "06PM",
    "07PM",
    "08PM",
    "09PM",
    "10PM",
    "11PM"
  ];

  function init() {
    // Display current date
    $("#date").text(currentDate);
    // Display current time
    $("#time").text(currentTime);
    // Update current time every second
    let currentTimer = setInterval(function() {
      currentTime = moment().format("hh:mm:ss A");
      $("#time").text(currentTime);
      // Update textarea color for past, present, and future hours
      function timeColor() {
        currentHour = moment().format("hhA");
      }
    }, 1000);
  }

  init();
});
