import './styles.css';

const daysRef = document.querySelector('[data-value="days"]')
const hoursRef = document.querySelector('[data-value="hours"]')
const minutesRef = document.querySelector('[data-value="mins"]')
const secondsRef = document.querySelector('[data-value="secs"]')

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  start() {
    setInterval(() => {
      const currentTime = Date.now()
      const time = this.targetDate - currentTime;
      updateClock(time);
    }, 1000)
  }
}



function updateClock(time) {
  const days = pad1(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  daysRef.textContent = days;
  hoursRef.textContent = hours;
  minutesRef.textContent = mins;
  secondsRef.textContent = secs;
}
function pad(value) {
  return String(value).padStart(2, '0');
}

function pad1(value) {
  return String(value).padStart(value.length + 1, '0');
}

const test = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 03, 2021'),
});

test.start();