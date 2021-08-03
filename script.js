window.onload = function () {
  var seconds = 00;
  var tenths = 00;
  var appendTenths = document.getElementById("tenths");
  var appendSeconds = document.getElementById("seconds");
  var startButton = document.getElementById("start");
  var stopButton = document.getElementById("stop");
  var restartButton = document.getElementById("restart");
  var interval;

  startButton.onclick = function () {
    clearInterval(interval);
  };
};
