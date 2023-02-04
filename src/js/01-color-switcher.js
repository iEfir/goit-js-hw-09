const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId = setInterval(getRandomHexColor, 1000);

btnStart.addEventListener('click', onBtnStart);
btnStop.addEventListener('click', onBtnStop);

function updateColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function onBtnStart() {
  intervalId = setInterval(updateColor, 1000);
  btnStart.disabled = true;
  btnStop.disabled = false;
}

function onBtnStop() {
  clearInterval(intervalId);
  btnStart.disabled = false;
  btnStop.disabled = true;
}
