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

//функция разбивки строки на на массив
function createLayout(alphabet, firstIndex, finalIndex) {

    return alphabet.split("").slice(firstIndex, finalIndex);
};

const rows = {}
//создание массивов по строкам клавиатуры
rows.topRow = createLayout(lang.en, 0, 12);
rows.middleRow = createLayout(lang.en, 12, 23);
rows.bottomRow = createLayout(lang.en, 23);
//функция рендеринга html разметки по шаблону
function renderKeyboard(tpl, rows, parent) {
    const compiled = _.template(tpl);
    const result = compiled(rows);
    parent.innerHTML += result;
}
//рендеринг клавиатуры по шаблону
renderKeyboard(html, rows, parent);

const buttons = Array.from(document.querySelectorAll("button"));
const pressed = document.querySelector(".pressed");
const keyClickDown = (evt) => {
//очистка содержимого элемента pressed 
    pressed.textContent = "";
//поиск DOM элемента, содержащего символ, аналогичный нажатой клавише
    let key = buttons.find(button => button.textContent === evt.key) || buttons.find(button => button.textContent === evt.code.toLowerCase());
//присвоение класса active нажатой клавише
    if (key) {
        key.classList.add("keyboard__btn--active");
        pressed.textContent = key.textContent;
    }
};
//удаление класса active
const keyClickUp = (evt) => {
    buttons.forEach(button => button.classList.remove("keyboard__btn--active"));
}

window.addEventListener("keydown", keyClickDown);
window.addEventListener("keyup", keyClickUp);