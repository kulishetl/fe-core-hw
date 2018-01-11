/* 
Массив строк клавиатуры из прошлого модуля преобразовать в объект keyboard следующего формата.
поле layouts содержит обьекты раскладок языков, в каждом из которых по 3 массива строк клавиатуры
поле langs содержит массив доступных языков
поле currentLang будет содержать язык который сейчас выбран
Написать скрипт который на старте спрашивает пользователя какой язык он хочет использовать на тренажере. Это обычный prompt в котором написано en-0, ru-1, ua-2. Пользователь вводит 0, 1 или 2, если введено другое значение то вывести alert о том что был выбран не доступный язык и повторить prompt до того момента пока не будет введено подходящее значание языка или нажат cancel. При cancel прекратить выполнение скрипта.
Результат выбора языка пользователем записать в обьект keyboard в поле currentLang как строку, 0 это en, 1 это ru, 2 это ua.
Модифицировать функцию getRandCharInAlph() так, чтобы она возвращала случайную букву из выбраного пользователем алфавита.
*/
const keyboard = {
    layouts: {
        en: {
            topRow: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
            middleRow: ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
            bottomRow: ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
        },
        ru: {
            topRow: ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
            middleRow: ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"],
            bottomRow: ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "."]
        },
        ua: {
            topRow: ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ї"],
            middleRow: ["ф", "і", "в", "а", "п", "р", "о", "л", "д", "ж", "є"],
            bottomRow: ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "."]
        }
    },
    langs: ["en", "ru", "ua"],
    currentLang: ""
};

let userChoise;
let wrongChoise = "Введите корректное значение: en-0, ru-1, ua-2";
let langChoise;

// проверка корректности ввода
do {
    userChoise = prompt("Выберите язык для использования: en-0, ru-1, ua-2", '');
    langChoise = (userChoise === "0") || (userChoise === "1") || (userChoise === "2") || (userChoise === null);
    if (!langChoise) {
        alert(wrongChoise);
    }
} while (!langChoise);

//возврат рандомного символа выбранного алфавита
function getRandCharInAlph(lang) {
    let arr = Object.values(lang);
    let firstIndex = Math.floor(Math.random() * arr.length);
    let secondIndex = Math.floor(Math.random() * arr[firstIndex].length);
    return arr[firstIndex][secondIndex];
}

//переключение языка в зависимости от выбранного алфавита
switch (userChoise) {
    case "0":
        console.log(getRandCharInAlph(keyboard.layouts.en));
        keyboard.currentLang = "en";
        break;
    case "1":
        console.log(getRandCharInAlph(keyboard.layouts.ru));
        keyboard.currentLang = "ru";
        break;
    case "2":
        console.log(getRandCharInAlph(keyboard.layouts.ua));
        keyboard.currentLang = "ua";
        break;
    default:
        console.log("Вы отказались от выбора раскладки");
}

console.log(keyboard);