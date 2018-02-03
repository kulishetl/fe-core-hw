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
  
   let f = buttons.find(button => button.textContent === evt.key);
    if(f) {
      f.classList.add("keyboard__btn--active");
      let sound = f.getAttribute("data-note");
      if(checkbox.checked) {
        playSound(sound);
      }
    } else if(evt.key === " ") {
      let sp = document.querySelector(".keyboard__btn--space");
      sp.classList.add("keyboard__btn--active")
      let sound = sp.getAttribute("data-note");
      if(checkbox.checked) {
        playSound(sound);
      }
    }
  };
  
  const keyClickUp = (evt) => {
    buttons.forEach(button => button.classList.remove("keyboard__btn--active"));
  }
  
  window.addEventListener("keydown", keyClickDown);
  window.addEventListener("keyup", keyClickUp);