/*
  Написать скрипт который собирает 3 строки клавиатуры
  и клавишу "пробел" из шаблона по заданому объекту.
  
  Для зарендереной клавиатуры реализовать поведение из
  модуля 8, подсветка нажатой клавиши, отображение символа итд.
*/

const lang = {
    en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./"
};
const html = document.getElementById("keyboard-tpl").textContent.trim();
const parent = document.getElementById("keyboard-container");

//функция разбивки строки на на массивы по рядам клавиатуры
function createLayout(alphabet, firstPoint, secondPoint) {
    this.topRow = alphabet.split("").slice(0, firstPoint);
    this.middleRow = alphabet.split("").slice(firstPoint, secondPoint);
    this.bottomRow = alphabet.split("").slice(secondPoint);
}
//создание клавиатурных строк английской раскладки
const rows = new createLayout(lang.en, 12, 23);

//функция рендеринга html разметки по шаблону
function renderKeyboard(tpl, rows, parent) {
    const compiled = _.template(tpl);
    const result = compiled(rows);
    parent.innerHTML += result;
};
//рендеринг клавиатуры по шаблону
renderKeyboard(html, rows, parent);

const buttons = Array.from(document.querySelectorAll("li"));
const pressed = document.querySelector(".pressed");
const keyClickDown = (evt) => {
    //очистка содержимого элемента pressed 
    pressed.textContent = "";
    //поиск DOM элемента, содержащего символ, аналогичный нажатой клавише
    let key = buttons.find(button => button.textContent === evt.key) || buttons.find(button => button.textContent === evt.code.toLowerCase());
    //присвоение класса active нажатой клавише
    if (key) {
        key.classList.add("keyboard__btn--active");
        //отображение последней нажатой клавиши        
        pressed.textContent = key.textContent;
    }
};
//удаление класса active
const keyClickUp = (evt) => {
    buttons.forEach(button => button.classList.remove("keyboard__btn--active"));
};
//слушатели собитий
window.addEventListener("keydown", keyClickDown);
window.addEventListener("keyup", keyClickUp);