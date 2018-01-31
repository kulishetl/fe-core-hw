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
    currentLang: '',
    createLayout() {
        //создание обертки для клавиатуры
        let wrap = document.createElement('div');
        //создание списков для строк      
        let topRowEl = document.createElement('ul');
        topRowEl.classList.add('top');
        let middleRowEl = document.createElement('ul');
        middleRowEl.classList.add('middle');
        let bottomRowEl = document.createElement('ul');
        bottomRowEl.classList.add('bottom');
        //массивы букв по строкам
        let topRowArr = this.layouts[this.langs[this.currentLang]].topRow,
            middleRowArr = this.layouts[this.langs[this.currentLang]].middleRow,
            bottomRowArr = this.layouts[this.langs[this.currentLang]].bottomRow;


        //создание элементов списка
        let topRowItems = topRowArr.map(n => n = '<li></li>')
                                   .reduce((acc, next) => acc + next),
            middleRowItems = middleRowArr.map(n => n = '<li></li>')
                                   .reduce((acc, next) => acc + next),
            bottomRowItems = bottomRowArr.map(n => n = '<li></li>')
                                   .reduce((acc, next) => acc + next);
        //выбор места для вставки клавиатуры
        const keys = document.querySelector("body");
        //сборка элементов
        wrap.append(topRowEl, middleRowEl, bottomRowEl);
        topRowEl.insertAdjacentHTML('beforeend', topRowItems);
        middleRowEl.insertAdjacentHTML('beforeend', middleRowItems);
        bottomRowEl.insertAdjacentHTML('beforeend', bottomRowItems);
        keys.append(wrap);
        //формирование массивов из элементов списка по строкам
        const elTop = topRowEl.querySelectorAll('li'),
            elMiddle = middleRowEl.querySelectorAll('li'),
            elBottom = bottomRowEl.querySelectorAll('li');
        let arrTop = [...elTop],
            arrMiddle = [...elMiddle],
            arrBottom = [...elBottom];
        //запись букв текущего языка в кнопки клавиатуры
        return arrTop.map((el, i) => el.textContent = topRowArr[i]) +
               arrMiddle.map((el, i) => el.textContent = middleRowArr[i]) +
               arrBottom.map((el, i) => el.textContent = bottomRowArr[i]);
    },
    //выбор языка клавиатуры
    setCurrentLang() {
        return prompt("Выберите язык клавиатуры: en-0, ru-1, ua-2", '');
    },
    //проверка корректности выбора языка
    checkPositiveInteger() {
        let d;
        do {
            d = this.setCurrentLang();
        } while (!((+d === 0) || (+d === 1) || (+d === 2)));
        this.currentLang = +d;
        return this;
    }
};

function run() {
    keyboard.checkPositiveInteger().createLayout();
}

run();