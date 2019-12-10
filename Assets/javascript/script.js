$(document).ready(function() {
  let currentDate = moment().format("MMMM Do, YYYY");
  let currentTime = moment().format("hh:mm:ss A");
  let currentHour;
  const possibleHours = {
    before: [
      "12AM",
      "01AM",
      "02AM",
      "03AM",
      "04AM",
      "05AM",
      "06AM",
      "07AM",
      "08AM"
    ],
    business: [
      "09AM",
      "10AM",
      "11AM",
      "12PM",
      "01PM",
      "02PM",
      "03PM",
      "04PM",
      "05PM"
    ],
    after: ["06PM", "07PM", "08PM", "09PM", "10PM", "11PM"]
  };

  function init() {
    // Display current date
    $("#date").text(currentDate);
    // Display current time
    $("#time").text(currentTime);
    // Update current date and time every second
    let currentTimer = setInterval(function() {
      currentDate = moment().format("MMMM Do, YYYY");
      $("#date").text(currentDate);
      currentTime = moment().format("hh:mm:ss A");
      $("#time").text(currentTime);
      // Update textarea color for past, present, and future hours
      timeColor();
    }, 1000);
  }

  function timeColor() {
    currentHour = moment().format("hhA");
    // If currentHour is between 9 and 5, set the id that matches currentHour to background-color:#b7d1e2.
    if (possibleHours.business.indexOf(currentHour) !== -1) {
      $("#" + currentHour).css("background-color", "#b7d1e2");
    }
    // Set all hours before currentHour to background-color:#e9ecef
    // Set all hours after currentHour to background-color:#fff
    // If currentHour is before 9, set all hours to background-color:#fff
    // If currentHour is after 5, set all hours to background-color:#e9ecef
  }

  init();
  timeColor();
});
