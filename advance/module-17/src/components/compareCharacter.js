export default function compareCharacter (arr, evt) {
    return arr.find(item => item.textContent === evt.key) || arr.find(item => item.textContent === evt.code.toLowerCase());
}