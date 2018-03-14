import trainer from './trainer';

export default function stopTimer () {
    clearInterval(trainer.timerId);
}