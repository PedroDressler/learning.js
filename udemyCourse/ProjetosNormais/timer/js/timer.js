const clock = document.getElementById('timer');
const pausar = document.getElementById('pausar');
const zerar = document.getElementById('zerar');
const iniciar = document.getElementById('iniciar');
const add = document.getElementById('add');
const table = document.getElementById('table');
const tr = document.querySelector(`#${Id}`);
var seconds = 0, timer, msg = 'The clock is ticking.';
var BD = [], ID = 0, Id;


function createHoursbySec(sec) {
  const data = new Date(sec * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

function eventClock() {
  var time = new Object();
  time.id = ID;
  time.relogio = clock.innerHTML;
  BD.push(time);
  ID++;
  table.innerHTML += `<tr onmouseover='getId(this.id)' id='${time.id}'><td>${time.id}</td><td>${time.relogio}</td></tr>`;
}



function getId(e) {
  if (Id != e) {
    Id = e;
    console.log(e, Id)
  }
}

add.onclick = () => {
  eventClock();
  add.setAttribute('disabled', 'disabled');
  setTimeout(() => {
    add.removeAttribute('disabled')
  }, 500);
}

function startClock() {
  timer = setInterval(() => {
    seconds++;
    clock.innerHTML = createHoursbySec(seconds);
  }, 1000);
}

function resetClock() {
  seconds = 0;
  clock.innerHTML = "00:00:00";
}

function resetBtn() {
  if (seconds > 0) {
    iniciar.textContent = 'Retomar';
    msg = 'The clock has returned to ticking.'
  } else {
    iniciar.textContent = 'Iniciar';
    msg = 'The clock is ticking.'
  }
}

window.addEventListener('load', () => {
  zerar.setAttribute('disabled', 'disabled');
  pausar.setAttribute('disabled', 'disabled');
})

iniciar.addEventListener('click', () => {
  startClock();
  clock.classList.remove('disabled', 'stopped');
  clock.classList.add('active');
  iniciar.setAttribute('disabled', 'disabled');
  pausar.removeAttribute('disabled');
  zerar.removeAttribute('disabled');
  iniciar.classList.add('disable');
  pausar.classList.remove('disable');
  zerar.classList.remove('disable');
  add.toggleAttribute('hidden');
  console.log(msg);
});

pausar.addEventListener('click', () => {
  clearInterval(timer);
  clock.classList.add('stopped');
  clock.classList.remove('active', 'disabled');
  pausar.setAttribute('disabled', 'disabled');
  iniciar.removeAttribute('disabled');
  zerar.removeAttribute('disabled');
  iniciar.classList.remove('disable');
  pausar.classList.add('disable');
  zerar.classList.remove('disable');
  console.log('The clock has been paused.');
  resetBtn();
});

zerar.addEventListener('click', () => {
  clearInterval(timer);
  clock.classList.add('disabled');
  clock.classList.remove('active', 'stopped');
  zerar.setAttribute('disabled', 'disabled');
  pausar.setAttribute('disabled', 'disabled');
  iniciar.removeAttribute('disabled');
  iniciar.classList.remove('disable');
  pausar.classList.add('disable');
  zerar.classList.add('disable');
  add.toggleAttribute('hidden');
  console.log('The clock has been reseted.');
  resetClock();
  resetBtn();
});

