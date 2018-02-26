/*
Создать две кнопки в HTML: start и stop.
Создать класс Timer с полями startTime, stopTime и interval. Создать несколько экземпляров класса с разными значениями свойств, вывести их в консоль.
Для класса Timer создать методы start и stop, getTime.
Создать экземпляр класса Timer, пусть он называется stopwatch.
При нажатии на кнопку start, метод stopwatch.start сохраняет момент нажатия в свойство startTime.
При нажатии на кнопку stop, метод stopwatch.stop сохраняет значение текущего момента времени в stopTime и записывает разницу между startTime и stopTime в interval. А метод stopwatch.getTime возвращает значение поля interval, которое необходимо вывести в консоль.
Для класса Timer создать статический метод timeToNY который возвращает кол-во дней от сегодня и до Нового Года.
*/

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const buttons = Array.from(document.querySelectorAll('button'));

class Timer {
  constructor(startTime = 0, stopTime = 0) {
    this.startTime = startTime;
    this.stopTime = stopTime;
    this.interval = this.stopTime - this.startTime;
  }
  show () {
    Object.keys(this).map(key => {
    console.log(`${key}: ${this[key]}`);
  });
  }
  start () {
    this.startTime = new Date();
  }
  stop () {
    this.stopTime = new Date();
    this.interval = this.stopTime - this.startTime;
  }
  getTime () {
    return console.log(`Прошло ${this.interval} ms`);
  }
  static timeToNY () {
    const today = new Date();
    const nextYear = today.getFullYear();
    const endYear = new Date(nextYear, 11, 31, 23, 59, 59, 999);
    const remainingTimeMillisecond = endYear.getTime() - today.getTime();
    const days = parseInt(remainingTimeMillisecond/(1000*60*60*24));
    return `До Нового Года осталось ${days} дней`;
  }
};

console.log(Timer.timeToNY());

const timer1 = new Timer(10, 20);
const timer2 = new Timer(15, 18);
const timer3 = new Timer(12, 45);
timer1.show();
timer2.show();
timer3.show();


const stopwatch = new Timer();

function startTimer () {
  if(!start.classList.contains("lang-ctrls__btn--active")) {
    buttons.map(btn => btn.classList.remove("lang-ctrls__btn--active"));
    start.classList.add("lang-ctrls__btn--active");
    stopwatch.start();
  }
};

function stopTimer (){
  if(!stop.classList.contains("lang-ctrls__btn--active")) {
    buttons.map(btn => btn.classList.remove("lang-ctrls__btn--active"));
    stop.classList.add("lang-ctrls__btn--active");
    stopwatch.stop();
    stopwatch.getTime();
  }
};

start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);