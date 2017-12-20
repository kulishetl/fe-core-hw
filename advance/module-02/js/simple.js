//variation of resorts
const resort1 = "Taba";
const resort2 = "Sharm";
const resort3 = "Hurgada";

//enter number of resort
let resortChoice = prompt("Для выбора курорта введите его номер: Taba - 1, Sharm - 2, Hurgada - 3");
let result;

//result of choice
switch (resortChoice) {
    case "1":
        result = `Вы выбрали курорт ${resort1}`;
        break;
    case "2":
        result = `Вы выбрали курорт ${resort2}`;
        break;
    case "3":
        result = `Вы выбрали курорт ${resort3}`;
        break;
    default:
        result = `Пожалуйста, введите значение от 1 до 3`;
}
console.log(result);