//input data
const letters = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

//transfom string to array
function addKeyboardLayout(alphabet) {
    let keyboard = [[], [], []];
    let j = 0;
    while (j <= alphabet.indexOf("]")) {
        keyboard[0][j] = alphabet.charAt(j);
        j += 1;
    }
    while (j <= alphabet.indexOf("'")) {
        keyboard[1][j - alphabet.indexOf("a")] = alphabet.charAt(j);
        j += 1;
    }
    while (j <= alphabet.indexOf("/")) {
        keyboard[2][j - alphabet.indexOf("z")] = alphabet.charAt(j);
        j += 1;
    }
    return keyboard;
}

console.log(addKeyboardLayout(letters));

//ramdom letter of determined line
function getRandCharInRow(alphabet, row) {
    return addKeyboardLayout(alphabet)[row - 1][Math.floor(Math.random() * (addKeyboardLayout(alphabet)[row - 1].length))];
}

console.log(getRandCharInRow(letters, Math.floor(Math.random() * 3 + 1)));


// random letter of input data
function getRandCharInAlph(str) {
    return str.charAt(Math.floor(Math.random() * str.length));
}

console.log(getRandCharInAlph(letters));