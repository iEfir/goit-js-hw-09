import { Notify } from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  let mainDelay = e.currentTarget.delay.valueAsNumber;
  const delayStep = e.currentTarget.step.valueAsNumber;
  const amountOfPromise = e.currentTarget.amount.valueAsNumber;

  setTimeout(() => {
    for (let position = 1; position <= amountOfPromise; position++) {
      createPromise(position, mainDelay);
      mainDelay += delayStep;
    }
  }, mainDelay);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  promise.then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  });
  promise.catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
