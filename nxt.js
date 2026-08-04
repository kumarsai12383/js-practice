/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let name = s;
  let trimed = "";
  let reversed = "";
  for (let each of name) {
    if (
      each !== " " &&
      each !== "," &&
      each !== ":" &&
      each !== "." &&
      each !== "/" &&
      each !== "@" &&
      each !== "#" &&
      each !== "_" &&
      each !== "-" &&
      each !== "^" &&
      each !== "%" &&
      each !== "*" &&
      each !== "$" &&
      each !== "&" &&
      each !== "|" &&
      each !== "{" &&
      each !== "}" &&
      each !== "\\"
    ) {
      trimed += each.toLowerCase();
    }
  }
  console.log(trimed);
  for (let each of trimed) {
    reversed = each + reversed;
  }
  if (trimed === reversed) {
    return true;
  } else {
    return false;
  }
};
console.log("");
console.log(isPalindrome('Marge, let\'s "[went]." I await {news} telegram.')); // true
