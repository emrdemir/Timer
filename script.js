let centiseconds = 0;
let seconds = 0;

function updateTime() {
  centiseconds++;
  if (centiseconds == 100) {
    centiseconds = 0;
    seconds++;
  }
  document.getElementById("centiseconds").innerText = centiseconds.toString().padStart(2, "0");
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
}

let timerId = null;

function startStopwatch() {
  if (timerId !== null) return;
  timerId = setInterval(updateTime, 10);
}

function stopStopwatch() {
  clearInterval(timerId);
  timerId = null;
}

function resetStopwatch() {
  stopStopwatch();
  centiseconds = 0;
  seconds = 0;
  document.getElementById("centiseconds").innerText = "00";
  document.getElementById("seconds").innerText = "00";
}
