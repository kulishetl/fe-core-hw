import { topResult, currentResult } from '../elements';

const trainer = {
    total: 0,
    inputChars: [],
    err: 0,
    lastResult: 0,
    currentTime: 0,
    timerId: "",
    bestTime: "",
    //получение скорости печати для записи в localStorage
    countKPS () {
        this.lastResult = parseFloat((this.total - this.err) / this.bestTime).toFixed(1);
        if(localStorage.getItem("userScore") < this.lastResult) {
            localStorage.setItem("userScore", this.lastResult);
            topResult.textContent = `${localStorage.getItem("userScore")}  символов в секунду`;
        }
        currentResult.textContent = `${this.lastResult} символов в секунду`;
    }
};

if(!localStorage.getItem("userScore")) {
    localStorage.setItem("userScore", "0");
}
topResult.textContent = `${localStorage.getItem("userScore")}  символов в секунду`;

export default trainer;