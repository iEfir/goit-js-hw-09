import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix';

const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

const btnStart = document.querySelector('button[data-start]');
btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      Notify.failure('Please choose a date in the future');
    }
    if (selectedDates[0] > new Date()) {
      btnStart.disabled = false;
      btnStart.addEventListener('click', onBtnStart);
      let interavlId = null;

      function onBtnStart() {
        btnStart.disabled = true;
        interavlId = setInterval(countDownDate, 1000);
      }

      function countDownDate(ms) {
        ms = selectedDates[0] - new Date();
        if (ms === 0) {
          clearInterval(interavlId);
        } else {
          const second = 1000;
          const minute = second * 60;
          const hour = minute * 60;
          const day = hour * 24;

          const days = Math.floor(ms / day);
          const hours = Math.floor((ms % day) / hour);
          const minutes = Math.floor(((ms % day) % hour) / minute);
          const seconds = Math.floor((((ms % day) % hour) % minute) / second);

          daysEl.textContent = addZero(days);
          hoursEl.textContent = addZero(hours);
          minutesEl.textContent = addZero(minutes);
          secondsEl.textContent = addZero(seconds);
        }
      }
    }
  },
};

flatpickr('#datetime-picker', options);

function addZero(number) {
  return String(number).padStart(2, 0);
}
