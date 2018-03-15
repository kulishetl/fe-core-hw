import compareCharacter from '../compareCharacter';
import { buttons, txt, timerOutput, errors } from '../elements';
import trainer from '../timer/trainer';
import startTimer from '../timer/startTimer';
import stopTimer from '../timer/stopTimer';
import { charsArr } from '../fillExcercise';

let i = 0;

function pressedKey (evt) {
    if (compareCharacter (buttons, evt)) {
        const nameKey = evt.key;
        trainer.total += 1;
        if(trainer.total === 1) {
            startTimer();
        }
        if(nameKey === charsArr[i]) {
            trainer.inputChars.push(nameKey);
            txt.textContent += nameKey;
            i += 1;
            if(i === charsArr.length) {
                stopTimer();
                trainer.bestTime = parseInt(timerOutput.textContent.slice(0, 2) * 60) + parseInt(timerOutput.textContent.slice(3));
                trainer.countKPS();
                window.removeEventListener("keydown", pressedKey);
            }
        } else {
            trainer.err += 1;
            errors.textContent =trainer.err;
        }
    }
}

function zeroOut () {
    i = 0;
}

export { pressedKey, zeroOut };