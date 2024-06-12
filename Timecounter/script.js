const initialContainer = document.getElementById('initialContainer');
const timerContainer = document.getElementById('timerContainer');
const timerElement = document.getElementById('timer');
const showTimerButtonsButton = document.getElementById('showTimerButtons');
const buttons = {
  btn5: document.getElementById('btn5'),
  btn10: document.getElementById('btn10'),
  btn20: document.getElementById('btn20'),
  start: document.getElementById('start'),
  stop: document.getElementById('stop'),
  reset: document.getElementById('reset'),
};

let countdown;
let timerRunning = false;
let timeLeft = 0;

function startTimer() {
  if (timeLeft > 0 && !timerRunning) {
    const now = Date.now();
    const then = now + timeLeft * 1000;

    timerRunning = true;

    countdown = setInterval(() => {
      timeLeft = Math.round((then - Date.now()) / 1000);

      if (timeLeft <= 0) {
        clearInterval(countdown);
        timeLeft = 0;
        timerRunning = false;
      }

      displayTimeLeft(timeLeft);
    }, 1000);

    updateButtonStates();
  }
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerElement.textContent = display;
}

function setTimer(minutes) {
  clearInterval(countdown);
  timeLeft = minutes * 60;
  displayTimeLeft(timeLeft);
  timerRunning = false;
  updateButtonStates();
}

function stopTimer() {
  clearInterval(countdown);
  timerRunning = false;
  updateButtonStates();
}

function resetTimer() {
  clearInterval(countdown);
  timeLeft = 0;
  timerRunning = false;
  displayTimeLeft(timeLeft);
  updateButtonStates();
}

function updateButtonStates() {
  buttons.start.disabled = timerRunning || timeLeft === 0;
  buttons.stop.disabled = !timerRunning;
  buttons.reset.disabled = timeLeft === 0;

  buttons.btn5.disabled = timerRunning;
  buttons.btn10.disabled = timerRunning;
  buttons.btn20.disabled = timerRunning;
}

showTimerButtonsButton.addEventListener('click', () => {
  initialContainer.style.display = 'none';
  timerContainer.style.display = 'block';
});

buttons.btn5.addEventListener('click', () => setTimer(5));
buttons.btn10.addEventListener('click', () => setTimer(10));
buttons.btn20.addEventListener('click', () => setTimer(20));
buttons.start.addEventListener('click', startTimer);
buttons.stop.addEventListener('click', stopTimer);
buttons.reset.addEventListener('click', resetTimer);

updateButtonStates();
