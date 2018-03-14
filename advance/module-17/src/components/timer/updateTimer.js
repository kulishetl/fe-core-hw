import { timerOutput } from '../elements';
import getFormattedTime from './getFormattedTime';

function updateTimer (time) {
    timerOutput.textContent = getFormattedTime(time);
}

export default updateTimer;