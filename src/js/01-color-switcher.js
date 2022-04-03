const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

// console.log(refs)

function getStart() {
  refs.startBtn.setAttribute("disabled", "true");
  refs.stopBtn.removeAttribute("disabled");
  timerId = setInterval(() => {document.body.style.background = getRandomHexColor();
  }, 1000);
  console.log('change color');
}
