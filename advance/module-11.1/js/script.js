/*
  Написать функцию post, которая используя
  REST сервис по адресу http://fecore.net.ua/rest/
  посылает post запрос с именем введенным в input.
  
  Результатом fetch будет ответ от сервера со статусом
  операции записи, вывести ОК или ERROR в поле result.
*/
const input = document.querySelector("input");
const postBtn = document.querySelector("#js-post");
const result = document.querySelector(".result");
const apiUrl = "http://fecore.net.ua/rest/";
postBtn.addEventListener("click", post);


function post(evt) {
  evt.preventDefault();
  const userRequest = `${apiUrl}?action=1&name=${input.value}`;
  fetch(userRequest, {method: "post"})
  .then(response => {
    if(response.ok) {
      return response.json();
    } else {
      return new Error("Error fetching data");
    }
  })
  .then(data => {
    result.innerHTML = `Ответ сервера: создание пользователя с именем ${input.value}:  ${data[0].mysql}`
  })
  .catch(err => {
    console.error("Error: ", err);
    result.innerHTML = `Error`;
  })
}
