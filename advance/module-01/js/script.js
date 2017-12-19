// consts of lines of keyboard
const topLine = 'qwertyuiop[]';
const middleLine = 'asdfghjkl;\'';
const bottomLine = 'zxcvbnm,./';

// length of lines of keyboard
const topLength = topLine.length;
const middleLength = middleLine.length;
const bottomLength = bottomLine.length;

// first and last symbols of lines
/*console.log(topLine.charAt(0));
console.log(topLine.charAt(topLength-1));

console.log(middleLine.charAt(0));
console.log(middleLine.charAt(middleLength-1));

console.log(bottomLine.charAt(0));
console.log(bottomLine.charAt(bottomLength-1)); */

// index of symbols
let firstSearch = topLine.indexOf('[');
let secondSearch = topLine.indexOf(']');


const message = `Создано три строчных константы:
topLine = ${topLine}, 
middleLine = ${middleLine},
bottomLine = ${bottomLine}

Рассчитана длина этих строк:
topLength = ${topLength}
middleLength = ${middleLength},
bottomLength = ${bottomLength}

Используя charAt найдены первые и последние символы этих строк:
topLine первый = ${topLine.charAt(0)}, последний = ${topLine.charAt(topLength-1)},
middleLine первый = ${middleLine.charAt(0)}, последний = ${middleLine.charAt(middleLength-1)},
bottomLine первый = ${bottomLine.charAt(0)}, последний = ${bottomLine.charAt(bottomLength-1)}

Используя indexOf найдены номера позиций для следующих символов:
'[' = ${firstSearch},
']' = ${secondSearch}`;


console.log(message);