var timeEl = $("#currentDay");
var userInputEl = document.querySelector(".userInput");
var save = document.querySelector(".saveBtn");

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
})



// colorblocking 











    








setInterval(displayTime, 1000);