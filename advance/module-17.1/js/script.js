/*
  Создать компонент счетчика времени.
  Простой прямоугольник который показывает время со старта упражения и до того момента когда все клавиши были верно нажаты.
  На входе есть строка символов для упражнения.
  Написать метод countKPS() который,по окончанию упражнения, возвращает кол-во верных клавиш в секунду, которое было нажато за время выполнения упражнения.
  Записать результат в localStorage, но только в том случае если он лучше чем тот что уже есть в localStorage.
  При повторном посещении страницы надо брать то что записано в localStorage и вешать на страницу, это будет компонент лучшего результата.
*/
// дается строка и от первого нажатия до посленего
// правильного набранного знака считать время


//работа с шаблонами
const timerTpl = document.getElementById("timer-tpl").textContent.trim();
const parentTimer = document.getElementById("timer-container");
const langsTpl = document.getElementById("langs-tpl").textContent.trim();
const parentLangs = document.getElementById("langs-container");
const keyboardTpl = document.getElementById("keyboard-tpl").textContent.trim();
const parentKeqboard = document.getElementById("keyboard-container");


const lang = {
  en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./",
  ru: "йцукенгшщзхъфывапролджэячсмитьбю.",
  ua: "йцукенгшщзхїфівапролджєячсмитьбю.",
  langs: ["en", "ru", "ua"],
  currentLang: 'en'
};
const letters = {
    en: "qwertyuiopasdfghjklzxcvbnm",
    ru: "йцукенгшщзхъфывапролджэячсмитьбю",
    ua: "йцукенгшщзхїфівапролджєячсмитьбю"
};

//функция разбивки строки на три массива, для построения клавиатурных строк
function CreateLayout(alphabet) {
  this.topRow = alphabet.split("").slice(0, 12);
  this.middleRow = alphabet.split("").slice(12, 23);
  this.bottomRow = alphabet.split("").slice(23);
}

const rows = new CreateLayout(lang[lang.currentLang]);
//функция для рендера html разметки по шаблонам
function renderKeyboard(tpl, parent, data) {
  const compiled = _.template(tpl);
  const result = compiled(data);
  parent.innerHTML = result;
};

renderKeyboard(timerTpl, parentTimer);
renderKeyboard(langsTpl, parentLangs, lang);
renderKeyboard(keyboardTpl, parentKeqboard, rows);

const lng = document.querySelector(".keyboard__lng");
const keyLangs = Array.from(document.querySelectorAll(".keyboard__lng"));
lng.classList.add("keyboard__lng--active");

//работа с клавиатурой
const buttons = Array.from(document.querySelectorAll(".keyboard__btn"));
//callback функция для отслеживания нажатых клавиш
const press = document.querySelector(".pressed");
function compareCharacter (arr, evt) {
  return arr.find(button => button.textContent === evt.key) || arr.find(button => button.textContent === evt.code.toLowerCase());
}

const keyClickDown = (evt) => {
  press.textContent = "";
//поиск DOM элемента, содержащего символ, аналогичный нажатой клавише
  //let key = buttons.find(button => button.textContent === evt.key) || buttons.find(button => button.textContent === evt.code.toLowerCase());
  let key = compareCharacter (buttons, evt);
  if (key) {
    key.classList.add("keyboard__btn--active");
    press.textContent = key.textContent;
  } 
};

const keyClickUp = (evt) => {
  buttons.map(button => button.classList.remove("keyboard__btn--active"));
}

//работа с таймером
const chars = document.querySelector(".exercise");
let charsArr;

function fillExcercise(lng) {
  const string = new Array(7).fill(1).map(x => x = letters[lng][Math.floor(Math.random()*letters[lng].length)]).join("");
  charsArr = string.split("").reverse();
  
  chars.innerHTML = charsArr.join("");
}






fillExcercise(lang.currentLang);

const keys = Array.from(document.querySelectorAll(".btn"));
const handleClick = (evt) => {
  if(evt.target.classList.contains("keyboard__lng")) {
    if(!evt.target.classList.contains("keyboard__lng--active")) {
      keyLangs.map(el => el.classList.remove("keyboard__lng--active"));
      evt.target.classList.add("keyboard__lng--active");
      lang.currentLang = evt.target.textContent;
      keys.map((key, index) => key.textContent = lang[lang.currentLang][index]);
      fillExcercise(lang.currentLang);
      stopTimer();
      updateTimer (0)
      trainer.total = 0;
      trainer.err = 0;
      errors.textContent =trainer.err;
      txt.textContent = "";
      press.textContent = "";
    }
  }
}

window.addEventListener("click", handleClick);




const timerOutput = document.querySelector(".timer");
const topResult = document.querySelector(".top-result");
const currentResult = document.querySelector(".current-result");

const errors = document.querySelector(".amount-err");
const txt = document.querySelector(".text");
const trainer = {
  total: 0,
  inputChars: [],
  err: 0,
  lastResult: 0,
  currentTime: 0,
  timerId: "",
  bestTime: "",
  //получение скорости печати для записи в localStorage
  countKPS () {
    this.lastResult = parseFloat((this.total - this.err) / this.bestTime).toFixed(1);
    if(localStorage.getItem("userScore") < this.lastResult) {
      localStorage.setItem("userScore", this.lastResult);
      topResult.textContent = `${localStorage.getItem("userScore")}  символов в секунду`;
    }
    currentResult.textContent = `${this.lastResult} символов в секунду`;
  }
};

if(!localStorage.getItem("userScore")) {
    localStorage.setItem("userScore", "0");
}
topResult.textContent = `${localStorage.getItem("userScore")}  символов в секунду`;




let i = 0;
//проверка корректности нажатия клавиш для учета количества ошибок

function pressedKey (evt) {
  if (compareCharacter (buttons, evt)) {
    //console.log(evt.key);
    const nameKey = evt.key;
    trainer.total += 1;
    if(trainer.total === 1) {
      startTimer();
    }
    if(nameKey === charsArr[i]) {
      trainer.inputChars.push(nameKey);
      txt.textContent += nameKey;
      i += 1;
      if(i === charsArr.length) {
        stopTimer();
        trainer.bestTime = parseInt(timerOutput.textContent.slice(0, 2) * 60) + parseInt(timerOutput.textContent.slice(3));
        trainer.countKPS();
        window.removeEventListener("keydown", pressedKey);
      }
    } else {
      trainer.err += 1;
      errors.textContent =trainer.err;
    }
  }

}

//работа с таймером
function startTimer () {
  trainer.currentTime = 0;
  trainer.timerId = setInterval (() => {
    trainer.currentTime += 1000;
    updateTimer(trainer.currentTime);
  }, 1000);
}

function stopTimer () {
  clearInterval(trainer.timerId);
}

function updateTimer (time) {
  timerOutput.textContent = getFormattedTime(time);
}

function getFormattedTime(time) {
  const date = new Date(time);
  const mt =
    date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
  const sc =
    date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();

  return `${mt}:${sc}`;
}
//слушатели событий
window.addEventListener("keydown", keyClickDown);
window.addEventListener("keyup", keyClickUp);
window.addEventListener("keydown", pressedKey);


