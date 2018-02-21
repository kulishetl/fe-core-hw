/*
Создать две кнопки в HTML: start и stop.
Реализовать функционал таймера отсчета старта печати через функцию-конструктор со свойсвами startTime, stopTime и interval. Добавить в prototype методы start и stop.
При нажатии на кнопку start, функция сохраняет момент нажатия в свойство startTime.
При нажатии на кнопку stop, функция сохраняет значение текущего момента времени в stopTime и записывает разницу между startTime и stopTime в interval.
При нажатии на stop, значение interval выводится в консоль.
*/
const clockface = document.querySelector(".clock__time");
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const controls = document.querySelector(".lang-ctrls__body");
const buttons = Array.from(document.querySelectorAll('button'));

//создание конструктора для таймера
function Timer(){
	this.startTime = 0;
	this.stopTime = 0;
	this.interval = 0;
};

//метод для записи начального времени в прототип
Timer.prototype.start = function() {
  this.interval = 0;
  updateClockface(this.interval);
  this.startTime = new Date();
};

//метод для записи конечного времени вывода интервала в консоль
Timer.prototype.stop = function() {
  this.stopTime = new Date();
  this.interval = this.stopTime - this.startTime;
  updateClockface(this.interval);
  console.log(`Прошло ${this.interval} ms`);
}

const timer = new Timer();

//callback функции
function startTimer () {
  if(!startBtn.classList.contains("lang-ctrls__btn--active")) {
    timer.start();
  }
};

function stopTimer (){
  if(!stopBtn.classList.contains("lang-ctrls__btn--active")) {
    timer.stop();
  }
};

//подсветка активной кнопки
function setActiveBtn(e) {
  buttons.map(btn => btn.classList.remove("lang-ctrls__btn--active"));
  let elem = e.target;
  if (e.target.classList.contains("material-icons")) {
    elem = elem.parentNode;
  }
  if (!elem.classList.contains("lang-ctrls__btn")) {
    return false;
  }
  elem.classList.add("lang-ctrls__btn--active");
};

//слушатели
controls.addEventListener("click", setActiveBtn);
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);

//добавлена возмолжность вывода финального интервала в html
//форматирование ms в минуты и секунды
function getFormattedTime(time) {
  const date = new Date(time);
  const mt =
    date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
  const sc =
    date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
  const ms =
    date.getMilliseconds() < 10
      ? "00" + date.getMilliseconds()
      : date.getMilliseconds() < 100
        ? "0" + date.getMilliseconds()
        : date.getMilliseconds();

  return `${mt}:${sc}:${ms}`;
}
//отображение финального значения прошедшего времени в html
function updateClockface(time) {
  clockface.textContent = getFormattedTime(time);
}

//вариант с применением делегирования и одним слушателем. Функция выглядит более громоздко, для корректной работы появляется еще один оператор if
/*const body = document.querySelector('.lang-ctrls__body');

function controlTimer (evt) {
  if(evt.target !== this){
    if(evt.target === startBtn && !startBtn.classList.contains("lang-ctrls__btn--active")) {
      buttons.map(btn => btn.classList.remove("lang-ctrls__btn--active"));
      startBtn.classList.add("lang-ctrls__btn--active");
      timer.start();
    }
    if(evt.target === stopBtn && !stopBtn.classList.contains("lang-ctrls__btn--active")) {
      buttons.map(btn => btn.classList.remove("lang-ctrls__btn--active"));
      stopBtn.classList.add("lang-ctrls__btn--active");
      timer.stop();
    }
      
  }
}



body.addEventListener('click', controlTimer);*/