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

//результаты проверки соответствия введенных данных
const valid = {
    firstname: "",
    lastname: "",
    tel: ""
};
//введенные данные, прошедшие валидацию
const dataResult = {
    "first name": "",
    "last name": "",
    "tel number": ""
};

submitBtn.addEventListener("click", validate);

function validate(evt) {
    evt.preventDefault();
    //проверка наличия данных в списке resultsList, для обнуления
    if (resultsList.innerHTML) {
        resultsList.innerHTML = "";
    }
    //проверка наличия данных на входе
    const checkVal = firstname.value && lastname.value && tel.value;
    if (checkVal) {
        //валидация введенных данных в соответсвии с заданными регулярными выражениями
        valid.firstname = firstNameLat.test(firstname.value) || firstNameCyr.test(firstname.value);
        valid.lastname = lastNameLat.test(lastname.value) || lastNameCyr.test(lastname.value);
        valid.tel = regExpTel.test(tel.value);
        //отрисовка результатов валидации
        showResults(valid);
        //приведение к заданному виду и запись валидных данных
        if(valid.firstname && valid.lastname && valid.tel) {
            dataResult["first name"] = firstname.value;
            dataResult["last name"] = lastname.value;
            dataResult["tel number"] = tel.value.replace(/[\s-]/g, '').replace(/^(\+{1}\d{3})(\d{2})(\d{2})(\d{2})(\d{3})/, '$1 $2 $3 $4 $5');
            //обнуление полей ввода, в случае успешного заполнения формы
            firstname.value = "";
            lastname.value = "";
            tel.value = "";
            console.log(dataResult);
        }
    } else {
        resultsList.insertAdjacentHTML('beforeend', '<li class="error">Необходимо заполнить все поля</li>');
    }

}
//функция для отрисовки результатов валидации
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