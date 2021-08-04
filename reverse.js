// const reverse = (string) => {
//   let reversed = "";
//   for (let index = string.length - 1; index >= 0; index--) {
//     reversed += string[index];
//   }
//   return reversed;
// };
const reverse = (string) => {
  return string.split("").reduce((reversed, char) => char + reversed, "");
};
console.log(reverse("pula"));
// console.log("pizda".split("").reverse().join(""));
