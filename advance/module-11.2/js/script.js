/*
  Написать функцию get, которая используя
  REST сервис по адресу http://fecore.net.ua/rest/
  посылает get запрос и получает ответ.
  
  Результатом fetch будет массив объектов с полями.
  
  В элемент result поместить форму состоящую из 2-х
  столбцов след формата, где кол-во строк будет такое как
  и кол-во объектов пользователей в ответе:
  
  Name Score
  имя  кол-во очков 
  имя  кол-во очков 
*/

const getBtn = document.querySelector("#js-get");
const result = document.querySelector(".result");
let urlRest = "http://fecore.net.ua/rest/";

getBtn.addEventListener("click", get);

function get(evt) {
    evt.preventDefault();
  fetch(urlRest, {method: "get"})
  .then((response) => {
      if(response.ok) {
        return response.json();
      } else {
        return  new Error("Error fetching data");
      }
  })
  .then((data) => {
    renderData(data);
  })
  .catch(err => {
    console.log('Fetch Error :-S', err);
  })
}

const renderData = (data) => {
 result.innerHTML = `<ul>
                        <li>Name</li>
                        <li>Score</li>
                    </ul>`;
  let res = data.map((el) =>   `<ul>
                                    <li>${el.name}</li>
                                    <li>${el.score}</li>
                                </ul>`).reduce((accum, elem) => accum += elem);
  result.innerHTML += res;
}