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
});
