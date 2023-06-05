var hrs = document.getElementById("hrs");
var min = document.getElementById("min");
var sec = document.getElementById("sec");

var hrsVal = prompt("Enter hrs");
var minVal = prompt("Enter min");
var secVal = prompt("Enter sec");

var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var resetBtn = document.getElementById("resetBtn");

var interval;

function renderTime() {
  hrs.innerHTML = hrsVal;
  min.innerHTML = minVal;
  sec.innerHTML = secVal;
}

if (hrsVal == "" && minVal == "" && secVal == "") {
  hrsVal = 0;
  minVal = 0;
  secVal = 0;
}

function timer() {
  secVal--;
  if (secVal == -1) {
    minVal--;
    secVal = 59;
  }
  if (minVal == -1) {
    hrsVal--;
    minVal = 59;
  }
  if (hrsVal == 0 && minVal == 0 && secVal == 0) {
    stopTime();
  }
  renderTime();
}

function startTime() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  interval = setInterval(function () {
    timer();
  }, 1000);
}

function stopTime() {
  stopBtn.disabled = true;
  startBtn.disabled = false;
  clearInterval(interval);
}
function resetTime() {
  hrsVal = 0;
  minVal = 0;
  secVal = 0;
  renderTime();
  stopTime();
}