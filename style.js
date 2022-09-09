
var timeEl = $("#currentDay")


function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeEl.text(rightNow);
    
  }

















  setInterval(displayTime, 1000);


