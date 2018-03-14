import { keyLangs, keys, errors, txt, press } from '../elements';
import lang from '../lang';
import fillExcercise from '../fillExcercise';
import stopTimer from '../timer/stopTimer';
import updateTimer from '../timer/updateTimer';
import trainer from '../timer/trainer';

//переключение языка и сброс других параметров
const handleClick = (evt) => {
    if(evt.target.classList.contains("keyboard__lng")) {
        if(!evt.target.classList.contains("keyboard__lng--active")) {
            keyLangs.map(el => el.classList.remove("keyboard__lng--active"));
            evt.target.classList.add("keyboard__lng--active");
            lang.currentLang = evt.target.textContent;            
            keys.map((key, index) => key.textContent = lang[lang.currentLang][index]);
            fillExcercise(lang.currentLang);
            stopTimer();
            updateTimer (0)
            trainer.total = 0;
            trainer.err = 0;
            errors.textContent = trainer.err;
            txt.textContent = "";
            press.textContent = "";
        }
    }
}

export default handleClick;