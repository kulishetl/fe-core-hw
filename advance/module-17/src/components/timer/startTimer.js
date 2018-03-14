import updateTimer from './updateTimer';
import trainer from './trainer';

function startTimer () {
    trainer.currentTime = 0;
    trainer.timerId = setInterval (() => {
        trainer.currentTime += 1000;
        updateTimer(trainer.currentTime);
    }, 1000);
}

export default startTimer;