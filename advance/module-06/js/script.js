/*
1.Создайте объект keyTrainer, содержащий свойство chars, значением которого будет массив символов алфавита.
chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

2.Добавьте свойство charCount и метод setCharCount. Метод делает запрос через prompt о количестве символов, которые пользователь должен будет набрать.

3.Добавьте метод checkPositiveInteger, который проверяет является ли число целым положительным числом. Используйете метод checkPositiveInteger в методе setCharCount для проверки корректности ввода пользователем. Если ввод неверный, используйте цикл while для того чтобы запрашивать у пользователя верное число (целое положительное).

4.Создайте свойство task и метод createTask, который создает массив длинной в charCount и заполняет его случайными буквами из массива chars.

5.Создайте метод startTask, который с помощью prompt выводит строку из массива task и просит набрать эту строку в этом же prompt сообщении.

6.Результат, полученный методом startTask запишите в свойство userInput и затем сравните строки userInput и task посимвольно. Если симовол не совпадает, то запишите количество ошибок в свойство userErrors.

7.Выведите в консоль userErrors: eсли количество ошибок 0, то поздравьте, если отлично от ноля - напишите количество ошибок и пожелание успехов в следующем упражнении.

Все свойства и методы должны быть внутри одного объекта keyTrainer, но вызов по очереди всех методов поместите внутри функции run и затем вызовите эту функцию.
*/

const keyTrainer = {
    //алфавит
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    //количество символов
    charCount: '',
    //ввод количества символов для задания
    setCharCount() {
        return prompt("Введите количество символов", '');
    },
    //проверка вводимого значения на соответсвие условиям
    checkPositiveInteger() {
        let d;
        do {
            d = this.setCharCount();
        } while (!(Number.isInteger(+d) && +d > 0));
        this.charCount = +d;
        return this;
    },
    //задание для пользователя
    task: '',
    //создание задания для пользователя
    createTask() {
        this.task = new Array(this.charCount).fill(1).map(x => x = this.chars[Math.floor(Math.random() * this.chars.length)]).reduce((x, y) => x + y);
        return this;
    },
    //ввод пользователем задания
    startTask() {
        this.userInput = prompt(`Задание для ввода " ${this.task} "`, '');
        return this;
    },
    //результат выполнения задания пользователем
    userInput: '',
    //сравнение заданного и полченного значений
    compare() {
        let i = 0;
        let err = 0;
        while (i < Math.max(this.task.length, this.userInput.length)) {
            if (this.task[i] !== this.userInput[i]) {
                err += 1;
            }
            i += 1;
        }
        this.userErrors = err;
        if (err > 0) {
            return console.log(`Допущено ошибок: ${err}. Желаем успехов в следующей попытке.`);
        } else {
            return console.log(`Поздравляем с успешным выполнением задания`);
        }
    },
    //количество ошибок, допущенных пользователем
    userErrors: ''
}

//функция для запуска выполнения keyTrainer
function run() {
    keyTrainer.checkPositiveInteger().createTask().startTask().compare();
}

run();