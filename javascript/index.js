//image change function
let image = document.getElementById("image");
let images = [
  "img/avatar1.png",
  "img/avatar2.png",
  "img/avatar3.png",
  "img/avatar4.png",
  "img/avatar5.png",
  "img/avatar6.png",
  "img/avatar7.png",
];
//random image
setInterval(function () {
  let random = Math.floor(Math.random() * 7);
  image.src = images[random];
}, 1200);


//main function
function myFunction() {
  var name = document.forms["myForm"]["nameid"].value;
  var date = document.forms["myForm"]["main_date"].value;
  console.log(date);

  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  if (date == "") {
    alert("Date Of Birth must be filled out");
    return false;
  } else {
    //--------------passing data using new Window--------

    // var newwin = window.open("main_page.html");
    // newwin.onload = function(){
    //   // "this" refers to newwin
    //   this.name = name;
    //   this.date = date;
    // };

    //-----------------Using Local Storage to save variable---------------------------------

    // (SAVE TO LOCAL STORAGE
    // localStorage.setItem("KEY", "VALUE");
    localStorage.setItem("date", date);

    // REDIRECT OR OPEN NEW WINDOW IF YOU WANT
    // window.open("main_page.html");
    location.href = "main_page.html";
  }
}
