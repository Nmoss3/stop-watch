window.onload = function () {
  var seconds = 00;
  var tenths = 00;
  var appendTenths = document.getElementById("tenths");
  var appendSeconds = document.getElementById("seconds");
  var startButton = document.getElementById("start");
  var stopButton = document.getElementById("stop");
  var restartButton = document.getElementById("restart");
  var Interval;

  startButton.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };
  stopButton.onclick = function () {
    clearInterval(Interval);
  };
  restartButton.onclick = function () {
    clearInterval(Interval);
    tenths = "00";
    seconds = "00";
    appendTenths.innerHTML = tenths;
    appendSeconds.innerHTML = seconds;
  };

  function startTimer() {
    tenths++;

    if (tenths <= 9) {
      appendTenths.innerHTML = "0" + tenths;
    }

    if (tenths > 9) {
      appendTenths.innerHTML = tenths;
    }

    if (tenths > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tenths = 0;
      appendTenths.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
};
