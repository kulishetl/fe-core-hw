import lang from './lang';
import letters from './letters';
import { chars } from './elements';

let charsArr = '';
function fillExcercise(lng) {
    const string = new Array(7).fill(1).map(x => x = letters[lng][Math.floor(Math.random()*letters[lng].length)]).join("");
    charsArr = string.split("").reverse();
    chars.innerHTML = charsArr.join("");
}

fillExcercise(lang.currentLang);
export { charsArr, fillExcercise };