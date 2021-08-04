// const reverseInt = (int) => {
//   let intCopy = int;
//   let reversed = 0;
//   while (intCopy) {
//     reversed = reversed * 10 + (intCopy % 10);
//     intCopy = Math.trunc(intCopy / 10);
//   }
//   return reversed;
// };

const reverseInt = (number) => {
  const string = number.toString();
  const reversedString = string.split("").reverse().join("");
  return parseInt(reversedString) * Math.sign(number);
};

console.log(reverseInt(-401));
