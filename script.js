
let startTime = 0;
let elapsed = 0;
let timerInterval;

function updateDisplay() {
  const time = Date.now() - startTime + elapsed;
  const hrs = String(Math.floor(time / 3600000)).padStart(2, '0');
  const mins = String(Math.floor((time % 3600000) / 60000)).padStart(2, '0');
  const secs = String(Math.floor((time % 60000) / 1000)).padStart(2, '0');
  document.getElementById('display').textContent = `${hrs}:${mins}:${secs}`;
}

document.getElementById('startStop').addEventListener('click', () => {
  if (!timerInterval) {
    startTime = Date.now();
    timerInterval = setInterval(updateDisplay, 1000);
    event.target.textContent = 'Pause';
  } else {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsed += Date.now() - startTime;
    event.target.textContent = 'Start';
  }
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsed = 0;
  document.getElementById('display').textContent = '00:00:00';
  document.getElementById('laps').innerHTML = '';
  document.getElementById('startStop').textContent = 'Start';
});

document.getElementById('lap').addEventListener('click', () => {
  const lapItem = document.createElement('li');
  lapItem.textContent = document.getElementById('display').textContent;
  document.getElementById('laps').appendChild(lapItem);
});
