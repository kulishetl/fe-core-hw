const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let keyboard = [[],[],[]];
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
console.log(keyboard);

const hello = keyboard[1][5] + keyboard[0][2] + keyboard[1][8] + keyboard[1][8] + keyboard[0][8];
const javascript = keyboard[1][6] + keyboard[1][0] + keyboard[2][3] + keyboard[1][0] + keyboard[1][1] + keyboard[2][2] + keyboard[0][3] + keyboard[0][7] + keyboard[0][9] + keyboard[0][4];
const trainer = keyboard[0][4] + keyboard[0][3] + keyboard[1][0] + keyboard[0][7] + keyboard[2][5] + keyboard[0][2] + keyboard[0][3];
console.log(hello);
console.log(javascript);
console.log(trainer);