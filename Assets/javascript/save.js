$(document).ready(function() {
  // Clicking on the save button will store the time and user input in `localStorage`.
  $(".saveBtn").on("click", function() {
    let clickID = $(this).attr("id");
    let textID;
    switch (clickID) {
      case "09AMsave":
        textID = $("#09AM").val();
        localStorage.setItem("09AMtext", textID);
        break;
      case "10AMsave":
        textID = $("#10AM").val();
        localStorage.setItem("10AMtext", textID);
        break;
      case "11AMsave":
        textID = $("#11AM").val();
        localStorage.setItem("11AMtext", textID);
        break;
      case "12PMsave":
        textID = $("#12PM").val();
        localStorage.setItem("12PMtext", textID);
        break;
      case "01PMsave":
        textID = $("#01PM").val();
        localStorage.setItem("01PMtext", textID);
        break;
      case "02PMsave":
        textID = $("#02PM").val();
        localStorage.setItem("02PMtext", textID);
        break;
      case "03PMsave":
        textID = $("#03PM").val();
        localStorage.setItem("03PMtext", textID);
        break;
      case "04PMsave":
        textID = $("#04PM").val();
        localStorage.setItem("04PMtext", textID);
        break;
      case "05PMsave":
        textID = $("#05PM").val();
        localStorage.setItem("05PMtext", textID);
    }
  });

  // Saved data from localStorage is loaded into textareas
  function loadScheduleData() {
    $("#09AM").text(localStorage.getItem("09AMtext"));
    $("#10AM").text(localStorage.getItem("10AMtext"));
    $("#11AM").text(localStorage.getItem("11AMtext"));
    $("#12PM").text(localStorage.getItem("12PMtext"));
    $("#01PM").text(localStorage.getItem("01PMtext"));
    $("#02PM").text(localStorage.getItem("02PMtext"));
    $("#03PM").text(localStorage.getItem("03PMtext"));
    $("#04PM").text(localStorage.getItem("04PMtext"));
    $("#05PM").text(localStorage.getItem("05PMtext"));
  }

  loadScheduleData();
});
