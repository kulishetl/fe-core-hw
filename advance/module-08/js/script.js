/*
 Напишите скрипт который реализует следующее поведение:
 
 - При нажатии на клавишу (не виртуальной клавиатуры) должно 
  обрабатываться событие keydown.
  (Для обработки нажатия нажатия клавиш, повесьте слушателя на window.
  window.addEventListener("keydown", callback);)
 
 - Должны обрабатываться только те клавиши, которые присутствуют
  в разметке HTML (на виртуальной клавиатуре).
 
 - Звук нажатия на клавишу должен соответсвовать ноте, описанной 
  в атрибуте button data-note.

 - Подсветку текущей клавиши реализуйте с помощью класса
  keyboard__btn--active.
 
 - Чекбокс Sound должен включать и выключать звук нажатия на клавиши. 
*/

const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};

const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");
const checkbox = document.getElementById("slideThree");
const keyClickDown = (evt) => {

//поиск DOM элемента, содержащего символ, аналогичный нажатой клавише
    let sym = buttons.find(button => button.textContent === evt.key) || buttons.find(button => button.textContent === evt.code.toLowerCase());
    if (sym) {

//присвоение найденному элементу класса        
        sym.classList.add("keyboard__btn--active");
//определение ноты        
        let sound = sym.dataset.note;
//воспроизведение звука
        if (checkbox.checked) {
            playSound(sound);
        }
    } 
};

//удаление класса при отжатии кнопки
const keyClickUp = (evt) => {
    buttons.forEach(button => button.classList.remove("keyboard__btn--active"));
}
//слушатели событий
window.addEventListener("keydown", keyClickDown);
window.addEventListener("keyup", keyClickUp);