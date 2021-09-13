var noOfDays = document.getElementById("no-days");
var dobHours = document.getElementById("dob-hours");

var Difference_In_Time;
var Difference_In_Days;

var date2 = new Date();

// To calculate the time difference of two dates

function calDate() {
  var date = localStorage.getItem("date");
    // (EXTRA) TO CLEAR
    // localStorage.removeItem("KEY");
    // localStorage.clear();

    Difference_In_Time = date2.getTime() - new Date(date).getTime();

  // To calculate the no. of days between two dates
  Difference_In_Days = parseInt(Difference_In_Time / (3600 * 1000 * 24));

  let hours = Difference_In_Days * 24;
  let minutes = hours * 60;
  let seconds = minutes * 60;

  setInterval(function () {
    seconds = seconds + 1;
    dobHours.innerHTML =
      hours +
      " hours " +
      minutes +
      " minutes and " +
      seconds +
      " sec have passed since you were born :)";
  }, 1000);

  setInterval(function () {
    minutes = minutes + 1;
    dobHours.innerHTML =
      hours +
      " hours " +
      minutes +
      " minutes and " +
      seconds +
      " sec have passed since you were born :)";
  }, 60000);

  //To display the final no. of days (result)
  noOfDays.innerHTML =
    Difference_In_Days + " days have passed since you were born :)";
}

setInterval(function () {
  calDate();
}, 1000);
