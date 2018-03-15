import 'styles.css';
import handleClick from './components/events/handleClick';
import keyClickDown from './components/events/keyClickDown';
import keyClickUp from './components/events/keyClickUp';
import { pressedKey } from './components/events/pressedKey';




//слушатели
window.addEventListener("click", handleClick);
window.addEventListener("keydown", keyClickDown);
window.addEventListener("keyup", keyClickUp);
window.addEventListener("keydown", pressedKey);