/*
  Соединить задание 1 и 2
  
  Напишите функцию validate которая проверяет все поля формы и возвращает результат в виде обьекта со свойствами firstname, lastname и tel.
  
  Кроме того, формат объекта: в свойства записывается буль-флаг уведомляющий о статусе прохождения валидации для поля.
  
  При клике на кнопку submit должна происходить проверка.
  
  Визуализировать результат проверки.
    Написать функцию showResults(results), которая принимает один аргумент results - объект такого формата который возвращает функция validate, и создает html разметку по результатам этого объекта.
  
    showResults добавляет в список с классом .results (уже есть в html), li для каждого поля формы. В li записать:
    SUCCESS: 'имя поля' passed validation
    ERROR: 'имя поля' failed validation
  
    Для li с положительным результатом дать класс success, с отрицательным error.
*/

const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");

//регулярное выражение для имени и фамилии написаных латиницей
const firstNameLat = /^([^\d\s\_\-]+[a-z]\s)?([^\d\s\_\-]+[a-z]\s)?([^\d\s\_\-]+[a-z])$/i;
const lastNameLat = /^([^\d\s\_\-]*[a-z])\s?-?\s?([^\d\s\_\-]*[a-z])$/i;

//регулярное выражение для имени и фамилии написаных кириллицей
const firstNameCyr = /^([^\w\s\-]+[а-яё]\s)?([^\w\s\-]+[а-яё]\s)?([^\w\s\-]+[а-яё])$/i;
const lastNameCyr = /^([^\w\s\-]*[а-яё])\s?-?\s?([^\w\s\-]*[а-яё])$/i;

//реглярное выражение для номера телефона
const regExpTel = /^\+(?:[\-\s]?\d){12}$/;



const res = {
    firstname: "",
    lastname: "",
    tel: ""
};


submitBtn.addEventListener("click", validate);

function validate(evt) {
    evt.preventDefault();
    if (resultsList.innerHTML) {
        resultsList.innerHTML = "";
    }
    const checkVal = firstname.value && lastname.value && tel.value;
    if (checkVal) {
        res.firstname = firstNameLat.test(firstname.value) || firstNameCyr.test(firstname.value);
        res.lastname = lastNameLat.test(lastname.value) || lastNameCyr.test(lastname.value);
        res.tel = regExpTel.test(tel.value);
        showResults(res);
        if(res.firstname && res.lastname && res.tel) {
            firstname.value = "";
            lastname.value = "";
            tel.value = "";
        }
    } else {
        resultsList.insertAdjacentHTML('beforeend', '<li class="error">Необходимо заполнить все поля</li>');
    }

}

function showResults(results) {
    let res = Object.keys(results).map(key => {
        if (results[key]) {
            key = `<li class="success">SUCCESS: ${key} passed validation</li>`;
        } else {
            key = `<li class="error">ERROR: ${key} failed validation</li>`;
        }
        return key;
    }).reduce((acc, next) => acc + next);
    resultsList.insertAdjacentHTML('beforeend', res);
}