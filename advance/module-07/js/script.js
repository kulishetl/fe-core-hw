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
    currentLang: "",
//создание ряда
    createLayout(row) {
//создание элемента ul
        let rowEl = document.createElement('ul');
//создание элементов li и объединение их в одну строку
        let rowItems = row.map(n => n = '<li></li>')
            .reduce((acc, next) => acc + next);
//вставка li внутрь ul
        rowEl.insertAdjacentHTML('beforeend', rowItems);
//заполнение li буквами соответствующего ряда
        const elRow = rowEl.querySelectorAll('li');
        let arrRow = [...elRow];
        arrRow.map((el, i) => el.textContent = row[i]);
        return rowEl;
    },
    createLayouts() {
//создание обертки
        let wrap = document.createElement('div');
        const keys = document.querySelector("body");
//получение рядов клавиатуры выбранного языка        
        const top = this.createLayout(this.layouts[this.langs[this.currentLang]].topRow);
        const middle = this.createLayout(this.layouts[this.langs[this.currentLang]].middleRow);
        const bottom = this.createLayout(this.layouts[this.langs[this.currentLang]].bottomRow);
//сборка элементов
        wrap.append(top, middle, bottom);
        keys.append(wrap);
        return this;
    },
//выбор языка
    setCurrentLang() {
        return prompt("Выберите язык клавиатуры: en-0, ru-1, ua-2", '');
    },
//проверка корректности выбора
    checkPositiveInteger() {
        let d, langChoise;
        do {
            d = this.setCurrentLang();
        } while (!((+d === 0) || (+d === 1) || (+d === 2)));
        this.currentLang = +d;
        return this;
    }
};

function run() {
    keyboard.checkPositiveInteger().createLayouts();
}
run();