import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refForm = document.querySelector('.form');
refForm.addEventListener('submit', onFormSubmit);


function onFormSubmit(e) {
  e.preventDefault();
  
let {elements: { amount, step, delay },} = e.currentTarget;
  amount = Number(amount.value);
  step = Number(step.value);
  delay = Number(delay.value);

  

  for (let position = 1; position <= amount; position += 1) {

    
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
e.currentTarget.reset();
}


function createPromise(position, delay) {
  // amount = "";
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay});
      } else {
        reject({ position, delay});
      }
    }, delay);
  });
}
