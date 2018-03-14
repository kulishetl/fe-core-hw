const topResult = document.querySelector(".top-result");
const currentResult =  document.querySelector(".current-result");
const chars = document.querySelector(".exercise");

const txt = document.querySelector(".text");
const timerOutput = document.querySelector(".timer");
const errors = document.querySelector(".amount-err");
const lng = document.querySelector(".keyboard__lng");
const keyLangs = Array.from(document.querySelectorAll(".keyboard__lng"));
const press = document.querySelector(".pressed");
const keys = Array.from(document.querySelectorAll(".btn"));
const buttons = Array.from(document.querySelectorAll(".keyboard__btn"));
let charsArr = '';
lng.classList.add("keyboard__lng--active");


export { topResult, currentResult, chars, txt, timerOutput, errors, lng, keyLangs, press, keys, buttons };
export default charsArr;