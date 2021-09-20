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

var seaLevel = document.getElementById("sea-level");

var birth = document.getElementById("birth");

var nail = document.getElementById("nail");

var accident = document.getElementById("accident");

var volcano = document.getElementById("volcano");

var tectonic = document.getElementById("tectonic");

var hair = document.getElementById("hair");

var sun1 = document.getElementById("sun-fusion");

var sun2 = document.getElementById("sun-mass");

var himalaya = document.getElementById("himalaya");

var moonAway = document.getElementById("moon-away");

var india = document.getElementById("india");

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
    `Hey! ${name.toUpperCase()}...<br><br> A lot has happened in the ` +
    Difference_In_Days.toLocaleString() +
    " days since you were born :) <br><br> Since you were born... <br><br>";

  setInterval(function () {
    seconds = seconds + 1;
    dobHours.innerHTML =
      hours.toLocaleString() +
      " hours have passed :)... <br> <br>" +
      minutes.toLocaleString() +
      " minutes have passed so quickly😲... <br><br> " +
      seconds.toLocaleString() +
      " sec flew past like Flash ⚡⚡⚡...";
  }, 1000);

  setInterval(function () {
    minutes = minutes + 1;
    dobHours.innerHTML =
      hours.toLocaleString() +
      " hours " +
      minutes.toLocaleString() +
      " minutes and " +
      seconds.toLocaleString() +
      " sec have passed since you were born :)";
  }, 60000);

  
  //-------------heart beat count and RBC production rate -----------------

  let heartBeatCount = minutes*72;
  let bloodPumped = minutes*5;
  let rbcCount = seconds*2000000;

  setInterval(function () {
    heartBeatCount += 1;
  },1200);

  setInterval(()=>{
    rbcCount += 19999;
    beatCount.innerHTML = `Your heart has beaten about ${heartBeatCount.toLocaleString()} times and pumped ${bloodPumped.toLocaleString()} L of blood.<br><br>
    Your body has produced ${(parseInt(rbcCount)).toLocaleString()} <br> red blood cells.`;
  },10);

  
  //------------breath rate count------------------

  let breathRate = minutes*14;

  setInterval(function(){
    breathRate += 1;
    breath.innerHTML = `You have taken about ${breathRate.toLocaleString()} breaths.`;
  },2300);

  //-------------distance travelled by earth-----------------

  let distanceTravelled = hours*107226;

  setInterval(()=>{
    distanceTravelled += 0.029785;
    distanceTravelledByEarth.innerHTML = `You've travelled ${(parseInt(distanceTravelled)).toLocaleString()} km around the sun.`;
  },1);

 //------------total rotation of earth----------------------

 let rotation = Difference_In_Days;  //since 1 rotaion is completed in 1 day
 earthRotation.innerHTML = `Earth has completed ${rotation.toLocaleString()} rotations since you were born...`

  //-----------------solar system's revolution around milkyway------------------

  let milkywayDistance = seconds*230;
  setInterval(()=>{
    milkywayDistance += 0.23;
    milkyway.innerHTML = `Not only that, but our entire solar system is orbiting the Milky Way... <br><br>
    So you've also travelled ${(parseInt(milkywayDistance)).toLocaleString()} km around the <br> Milky Way!`
  },1);

  //-------------------moon's revolution around earth---------------------------

  let moonRevolutionCount = Difference_In_Days/27.322;
  moonRevolution.innerHTML=`The moon has orbited you ${(parseInt(moonRevolutionCount)).toLocaleString()} times in your lifetime.<br><br>
  Moon's revolution around earth and rotation on its axis is nearly same...<br><br>
  That means it has rotated around ${(parseInt(moonRevolutionCount)).toLocaleString()} times on its axis.`;

  // ---------------------------deforestation-----------------------------------
  let deforestationRate = seconds*1.5;
  setInterval(()=>{
    deforestationRate += 1.5;
  },1000);
// ---------------------------------forestation-------------------------------------
  let forestationRate = seconds*60;
  setInterval(() => {
    forestationRate += 60;
    deForestation.innerHTML = `Worldwide ${(parseInt(deforestationRate)).toLocaleString()} acre of forests have been cut down since you were born...<br><br>
    Is this fact made you sad ???<br><br>
    Ahh!...hold on, we have another stat that makes you feel good...<br><br>
    Also ${forestationRate.toLocaleString()} trees have been planted all over the world since you were born :)... `
  }, 1000);

  //-----------------------sea level rising rate--------------------------------

  let seaLevelRise = (Difference_In_Days/365)*0.36;
  seaLevel.innerHTML = `sea level has risen by ${seaLevelRise.toFixed(2)} cm since your birth...`;

  // --------------------------birth rate----------------------------

  let birthRate = seconds*4;
  setInterval(() => {
    birthRate += 1;
    birth.innerHTML = `Worldwide ${birthRate.toLocaleString()} babies were born since your birth...`;
  }, 250);

  // ----------------------------------growth of nails---------------------------------

  let nailRate = ((Difference_In_Days/365)*12)*0.347;
  let toeNailRate = ((Difference_In_Days/365)*12)*0.162;
  nail.innerHTML = `If you hadn't cut your finger nails yet since you were born , then it would have been ${nailRate.toLocaleString()} cm long today 😮...<br><br> And, also your toe nails would have been ${toeNailRate.toLocaleString()} cm long 😗...`;

  // ---------------------------------------road accident-----------------------------

  let roadAccident = seconds*0.043;
  setInterval(() => {
    roadAccident += 0.043;
    accident.innerHTML = `${(parseInt(roadAccident)).toLocaleString()} people died in road accidents all over the world since you were born... `
    
  }, 1000);

  // ----------------------volcano eruption-------------------------

  let volcanoEruption = Difference_In_Days*0.15;
  volcano.innerHTML = `${(parseInt(volcanoEruption)).toLocaleString()} volcanic eruptions have occured on the Earth since you were born... `;

  // --------------------------tectonic plates-------------------

  let tectonicPlate = (Difference_In_Days/365)*2;
  tectonic.innerHTML = ` The Tectonic plates have moved ${(parseInt(tectonicPlate)).toLocaleString()} inches since you were born...`;

  // -----------------------------hair growth rate--------------------
  let hairGrowth = Difference_In_Days*0.044;

  hair.innerHTML = ` If you hadn't cut your hair till this date, then it would have grown ${hairGrowth.toLocaleString()} cm long...`;

  // -----------------------hydrogen burn and helium production--------------------------------
  let hydrogen = seconds*564000000;
  let helium = seconds*559700000;

  setInterval(() => {
    hydrogen+= 564000000;
    
  }, 1000);

  setInterval(() => {
    helium+= 559700000;
    sun1.innerHTML = `By Fusion, the Sun burns about ${hydrogen.toLocaleString()} tonnes hydrogen since your birth... <br> <br> <br> 
    Which in result produce ${helium.toLocaleString()} tonnes helium...`;
    
  }, 1000);

  // ---------------------lossed mass of sun----------------------------
  let mass = seconds*4300000;
   setInterval(() => {
     mass += 4300000;
     sun2.innerHTML = `Since your first cry, the Sun loses ${mass.toLocaleString()} tonnes of mass...`
     
   }, 1000);


  //  ---------------------himalaya ---------------------------------
  let himalayaInc = (Difference_In_Days/365)*1;

  himalaya.innerHTML = `The Himalaya grown taller by ${himalayaInc.toLocaleString()} inches since your birth...`;

// ------------------moon going away----------------------------------
  let moonSpinAway = (Difference_In_Days/365)*3.78;
  moonAway.innerHTML = `Moon has spinned ${moonSpinAway.toLocaleString()} cm away from Earth, since you came to existence...`;

  // -----------------------------india shrinking--------------------------------------

  let indiaShrinkRate = (Difference_In_Days/365)*2;

  india.innerHTML = `India’s southern and northern tip (Kanyakumari to Himalayas) have shrunk by ${indiaShrinkRate.toLocaleString()} cm since your first breath...<br><br><br> This means, after 200 million years, there would be no India 😲...<br><br><br><br><br>
  Who knows what else will happen in your lifetime??? <br><br><br><br>
  So always STAY HAPPY and live the moment.
  <br><br><br><br><br>
  🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗🤗 `
  
}
// setInterval(function () {
//   calDate();
// }, 1000);

calDate();
