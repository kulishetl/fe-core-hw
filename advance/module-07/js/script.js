function createLayout(lang) {
    //создаем строки
    const topRow = `
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `,
        middleRow = `
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `,
        bottomRow = `
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                `,
        keyboard = topRow + middleRow + bottomRow,
        //выбор места вставки
        keys = document.querySelector("body");
        //вставка в DOM объект
    keys.insertAdjacentHTML('beforeend', keyboard);
    
    const elements = document.getElementsByTagName('li');
    let arr = [...elements];
    //простановка значений на клавиши
    return arr.map((elem, i) => elem.textContent = lang[i]);
}

let strEn = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
//let strRu = "йцукенгшщзхъфывапролджэячсмитьбю.";
//let strUa = "йцукенгшщзхїфівапролджєячсмитьбю.";
createLayout(strEn);