import './styles.css';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      daysRef: document.querySelector(`${this.selector} [data-value="days"]`),
      hoursRef: document.querySelector(`${this.selector} [data-value="hours"]`),
      minutesRef: document.querySelector(`${this.selector} [data-value="mins"]`),
      secondsRef: document.querySelector(`${this.selector} [data-value="secs"]`),
    }
  }
  start() {
    setInterval(() => {
      const currentTime = Date.now()
      const time = this.targetDate - currentTime;
      this.updateClock(time);
    }, 1000)
  }
  updateClock(time) {
    const { daysRef, hoursRef, minutesRef, secondsRef } = this.refs;
    const days = padDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    daysRef.textContent = days;
    hoursRef.textContent = hours;
    minutesRef.textContent = mins;
    secondsRef.textContent = secs;
  }
    
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function padDays(value) {
  return String(value).padStart(value.length + 1, '0');
}

const initTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 21, 2021'),
});

initTimer.start();