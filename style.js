var timeEl = $("#currentDay");
var userInputEl = document.querySelector(".userInput");
var save = document.querySelector(".saveBtn");


function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeEl.text(rightNow);
    
  };

  
function renderSave(){
var userStorage = localStorage.getItem("userStorage");
userInputEl.textContent = userStorage;
};














    





















  setInterval(displayTime, 1000);


