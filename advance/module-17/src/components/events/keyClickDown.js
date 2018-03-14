import { press, buttons } from '../elements';
import compareCharacter from '../compareCharacter';

const keyClickDown = (evt) => {
    press.textContent = "";
    let key = compareCharacter(buttons, evt);
    if (key) {
        key.classList.add("keyboard__btn--active");
        press.textContent = key.textContent;
    }
};

export default keyClickDown;