//variation of resorts
const resort1 = "Taba";
const resort2 = "Sharm";
const resort3 = "Hurgada";


//available amounts of each groups
let amountGroup1 = 6;
let amountGroup2 = 15;
let amountGroup3 = 25;

const currentAmount = prompt("Введите число участников группы");

//info messages
const infoMessage = "Указанное Вами число не целое или меньше либо равно нулю!";
const maxAmount = Math.max(amountGroup1, amountGroup2, amountGroup3);
const tooBigAmount = `Максимальное число свободных мест в группе составляет ${maxAmount}`;
const noChoice = `Вы не выбрали ни один из вариантов`;

//user's decision
let decision1;
let decision2;
let decision3;


if (currentAmount % 1 === 0) {                                                  //check for an integer
    if (currentAmount > 0) {                                                    //check for a positive number
        if (currentAmount <= amountGroup1) {                                    //check available options
            decision1 = confirm(`Есть места в группе на ${resort1}`);
            if (decision1) {
                amountGroup1 = amountGroup1 - currentAmount;
            } else {
                decision2 = confirm(`Есть места в группе на ${resort2}`);
                if (decision2) {
                    amountGroup2 = amountGroup2 - currentAmount;
                } else {
                    decision3 = confirm(`Есть места в группе на ${resort3}`);
                    if (decision3) {
                        amountGroup3 = amountGroup3 - currentAmount;
                    } else {
                        alert(noChoice);                                        //choice not made
                    }
                }
            }
        } else if (currentAmount <= amountGroup2) {                             //check available options
            decision2 = confirm(`Есть места в группе на ${resort2}`);
            if (decision2) {
                amountGroup2 = amountGroup2 - currentAmount;
            } else {
                decision3 = confirm(`Есть места в группе на ${resort3}`);
                if (decision3) {
                    amountGroup3 = amountGroup3 - currentAmount;
                } else {
                    alert(noChoice);                                            //choice not made
                }
            }
        } else if (currentAmount <= amountGroup3) {                             //check available options
            decision3 = confirm(`Есть места в группе на ${resort3}`);
            if (decision3) {
                amountGroup3 = amountGroup3 - currentAmount;
            } else {
                alert(noChoice);                                                //choice not made
            }
        } else {
            alert(tooBigAmount);                                                //currentAmount > maxAmount
        }

    } else {
        alert(infoMessage);                                                     //currentAmount not integer or less 0
    }
} else {
    alert(infoMessage);
}

console.log(`В группе на ${resort1} осталось мест: ${amountGroup1}
В группе на ${resort2} осталось мест: ${amountGroup2}
В группе на ${resort3} осталось мест: ${amountGroup3}`);