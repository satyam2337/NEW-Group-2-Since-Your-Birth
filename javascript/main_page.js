var noOfDays = document.getElementById("no-days");
var dobHours = document.getElementById("dob-hours");

var monthName = document.getElementById("monthName");
var dayName = document.getElementById("dayName");
var dayNumber = document.getElementById("dayNumber");
var year = document.getElementById("year");

var beatCount = document.getElementById("beat-count");
var breath = document.getElementById("breath-rate");

var distanceTravelledByEarth = document.getElementById("distance-travelled-earth");
var earthRotation = document.getElementById("earth-rotation");
var milkyway = document.getElementById("milkyway");
var moonRevolution = document.getElementById("moon-revolution");

var deForestation = document.getElementById("deforestation");

var Difference_In_Time;
var Difference_In_Days;

var date2 = new Date();

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// To calculate the time difference of two dates

function calDate() {
  var date = localStorage.getItem("date");
  const name = localStorage.getItem("name");
  // (EXTRA) TO CLEAR
  // localStorage.removeItem("KEY");
  // localStorage.clear();

  //---------calculating day,month and year from date we got from user-----------------

  let month = months[new Date(date).getMonth()];
  console.log(month);

  let day = days[new Date(date).getDay()];
  console.log(day);

  let fullYear = new Date(date).getFullYear();
  console.log(year);

  let dateNum = new Date(date).getDate();
  console.log(dateNum);

  //-----------setting the date values in the calender----------------------------

  monthName.innerHTML = month;
  dayName.innerHTML = day;
  dayNumber.innerHTML = dateNum;
  year.innerHTML = fullYear;


  Difference_In_Time = date2.getTime() - new Date(date).getTime();

  // To calculate the no. of days between two dates
  Difference_In_Days = parseInt(Difference_In_Time / (3600 * 1000 * 24));

  let hours = Difference_In_Days * 24;
  let minutes = hours * 60;
  let seconds = minutes * 60;

  //To display the final no. of days (result)
  noOfDays.innerHTML =
    `Hey! ${name.toUpperCase()}...<br><br> A lot has happend in the ` +
    Difference_In_Days +
    " days since you were born :) <br><br> Since you were born... <br><br>";

  setInterval(function () {
    seconds = seconds + 1;
    dobHours.innerHTML =
      hours +
      " hours have passed :)... <br> <br>" +
      minutes +
      " minutes have passed so quickly😲... <br><br> " +
      seconds +
      " sec flew past like Flash ⚡⚡⚡...";
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

  
  //-------------heart beat count-----------------

  let heartBeatCount = minutes*72;
  let bloodPumped = minutes*5;
  let rbcCount = seconds*2000000;

  setInterval(function () {
    heartBeatCount += 1;
  },1200);

  setInterval(()=>{
    rbcCount += 2000;
    beatCount.innerHTML = `Your heart has beaten about ${heartBeatCount} times and pumped ${bloodPumped} L of blood.<br><br>
    Your body has produced ${parseInt(rbcCount)} red blood cells.`;
  },1);

  
  //------------breath rate count and RBC production rate ------------------

  let breathRate = minutes*14;

  setInterval(function(){
    breathRate += 1;
    breath.innerHTML = `You have taken about ${breathRate} breaths.`;
  },2300);

  //-------------distance travelled by earth-----------------

  let distanceTravelled = hours*107226;

  setInterval(()=>{
    distanceTravelled += 0.029785;
    distanceTravelledByEarth.innerHTML = `You've travelled ${parseInt(distanceTravelled)} km around the sun.`;
  },1);

 //------------total rotation of earth----------------------

 let rotation = Difference_In_Days;  //since 1 rotaion is completed in 1 day
 earthRotation.innerHTML = `Earth has completed ${rotation} rotations since you were born...`

  //-----------------solar system's revolution around milkyway------------------

  let milkywayDistance = seconds*230;
  setInterval(()=>{
    milkywayDistance += 0.23;
    milkyway.innerHTML = `Not only that, but our entire solar system is orbiting the Milky Way... <br><br>
    So you've also travelled ${parseInt(milkywayDistance)} km around the Milky <br>Way!`
  },1);

  //-------------------moon's revolution around earth---------------------------

  let moonRevolutionCount = Difference_In_Days/27.322;
  moonRevolution.innerHTML=`The moon has orbited you ${parseInt(moonRevolutionCount)} times in your lifetime.<br><br>
  Moon's revolution around earth and rotation on its axis is nearly same...<br><br>
  That means it has rotated around ${parseInt(moonRevolutionCount)} times on its axis.`;

  // ---------------------------deforestation-----------------------------------
  let deforestationRate = seconds*1.5;
  setInterval(()=>{
    deforestationRate += 1.5;
    deForestation.innerHTML = `${parseInt(deforestationRate)} acre of forests have been cut down since you were born...`
  },1000);


  
}

// setInterval(function () {
//   calDate();
// }, 1000);

calDate();
