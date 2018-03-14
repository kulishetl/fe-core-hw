import { buttons } from '../elements';

const keyClickUp = (evt) => {
    buttons.map(button => button.classList.remove("keyboard__btn--active"));
}

export default keyClickUp;