var timeEl = $("#currentDay");
var userInputEl = document.querySelector(".userInput");
var currentHour= document.querySelector("#id"); 

//this is the date and time. set interval at the bottom displays it and counts per second "1000"
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeEl.text(rightNow);
}


//save button
$(".saveBtn").on("click",function(){
var user = $(this).siblings(".userInput").val();
var time = $(this).parent().attr("id");
localStorage.setItem(time,user);
});



//recall storage info 
$("#8 .userInput").val(localStorage.getItem("8"));
$("#9 .userInput").val(localStorage.getItem("9"));
$("#10 .userInput").val(localStorage.getItem("10"));
$("#11 .userInput").val(localStorage.getItem("11"));
$("#12 .userInput").val(localStorage.getItem("12"));
$("#13 .userInput").val(localStorage.getItem("13"));
$("#14 .userInput").val(localStorage.getItem("14"));
$("#15 .userInput").val(localStorage.getItem("15"));
$("#16 .userInput").val(localStorage.getItem("16"));




// colorblock 
currentHour= moment().hour();
function timeAttack(){


 for (let i =0; i < currentHour; i++){
    if (currentHour === parseint.timeEl){
    $(this).addClass("past");
 
}  
}
}

setInterval(displayTime, 1000);