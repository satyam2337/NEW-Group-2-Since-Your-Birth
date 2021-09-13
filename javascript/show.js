
var begin = document.getElementById("begin-btn");
var noOfDays = document.getElementById("earthrotation");
let image = document.getElementById('image');
let images = ['img/avatar1.png', 'img/avatar2.png', 'img/avatar3.png', 'img/avatar4.png', 'img/avatar5.png', 'img/avatar6.png', 'img/avatar7.png']
//image change function
setInterval(function () {
    let random = Math.floor(Math.random() * 7);
    image.src = images[random];
}, 1200);

begin.addEventListener("click", myFunction);
function myFunction() {
    let name = document.forms["myForm"]["nameid"].value;
    let date = document.forms["myForm"]["main_date"].value;

    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (date == "") {
        alert("Date Of Birth must be filled out");
        return false;
    }
    // else{
    //     window.location="main_page.html"
    // }

    var date1 = new Date(date);
    var Difference_In_Time;
    var Difference_In_Days;
    // To calculate the time difference of two dates
    // noOfDays.innerHTML="";
    function calDate() {
        let str = document.getElementById("earthrotation").innerHTML; 
        var date2 = new Date();
        Difference_In_Time = date2.getTime() - date1.getTime();

        // To calculate the no. of days between two dates
        Difference_In_Days = Difference_In_Time / (3600 * 1000 * 24);

        //To display the final no. of days (result)
        document.getElementById("earthrotation").innerHTML=str.replace("Hello",Difference_In_Days);;

    }
    
    setInterval(function () { calDate() }, 1000);
}