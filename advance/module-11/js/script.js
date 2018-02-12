/*
Написать приложение для работы с REST сервисом http://fecore.net.ua/rest/, реализовать следующий функционал:
функция getUsers должна получать текущий список всех пользователей в БД.
функция addUser должна записывать в БД юзера с полями name и score.
функция removeUser должна удалять из БД юзера по id.
функция updateUser должна обновлять данные пользователя по id.
Сделать минимальный графический интерфейс в виде панели с полями и кнопками, а так же панелью для вывода результатов операций с REST сервисом.
*/

const urlRest = "http://fecore.net.ua/rest/";

//Элементы блока получения данных
const getBtn = document.getElementById("js-get");
const getRes = document.querySelector(".get-result");

//Элементы блока добавления новой записи
const addName = document.getElementById("add-name");
const addScore = document.getElementById("add-score");
const addBtn = document.getElementById("js-add");
const addRes = document.querySelector(".add-result");

//Элементы блока удаления записи
const removeId = document.getElementById("remove-id");
const removeBtn = document.getElementById("js-remove");
const removeRes = document.querySelector(".remove-result");

//Элементы блока обновления информации
const updateId = document.getElementById("update-id");
const updateName = document.getElementById("update-name");
const updateScore = document.getElementById("update-score");
const updateBtn = document.getElementById("js-update");
const updateRes = document.querySelector(".update-result");


getBtn.addEventListener("click", getUsers);
addBtn.addEventListener("click", addUser);
removeBtn.addEventListener("click", removeUser);
updateBtn.addEventListener("click", updateUser);

function getUsers (evt) {
    evt.preventDefault();
    fetch(urlRest, {method: "post"})
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            return  new Error("Error fetching data");
        }
    })
    .then(data => {
        renderData(data);
    })
    .catch(err => {
        console.log('Fetch Error :-S', err);
    })
};

const renderData = (data) => {
    getRes.innerHTML = `<ul>
                           <li>Id</li>
                           <li>Name</li>
                           <li>Score</li>
                       </ul>`;
     let res = data.map((el) =>   `<ul>
                                       <li>${el.id}</li>
                                       <li>${el.name}</li>
                                       <li>${el.score}</li>
                                   </ul>`).reduce((accum, elem) => accum += elem);
                                   getRes.innerHTML += res;
   };

function addUser (evt) {
    evt.preventDefault();
    const addUrl = `${urlRest}?action=1&name=${addName.value}&score=${addScore.value}`;
    fetch(addUrl, {method: "post"})
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            return  new Error("Error fetching data");
        }
    })
    .then(data => {
        addRes.innerHTML = `Создание пользователя, ответ сервера:  ${data[0].mysql}`
    })
    .catch(err => {
        console.error("Error: ", err);
        addRes.innerHTML = `Error`;
      })
      addName.value = "";
      addScore.value = "";
};

function removeUser (evt) {
    evt.preventDefault();
    const removeUrl = `${urlRest}?action=3&id=${removeId.value}`;
    fetch(removeUrl, {method: "post"})
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            return  new Error("Error fetching data");
        }
    })
    .then(data => {
        removeRes.innerHTML = `Удаление пользователя ответ сервера:  ${data[0].mysql}`
    })
    .catch(err => {
        console.error("Error: ", err);
        removeRes.innerHTML = `Error`;
      })
      removeId.value = "";
};

function updateUser (evt) {
    evt.preventDefault();
    const updateUrl = `${urlRest}?action=2&id=${updateId.value}&name=${updateName.value}&score=${updateScore.value}`;
    fetch(updateUrl, {method: "post"})
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            return  new Error("Error fetching data");
        }
    })
    .then(data => {
        updateRes.innerHTML = `Обновление данных пользователя, ответ сервера:  ${data[0].mysql}`
    })
    .catch(err => {
        console.error("Error: ", err);
        updateRes.innerHTML = `Error`;
      })
      updateId.value = "";
      updateName.value = "";
      updateScore.value = "";
};