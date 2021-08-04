// const isPalindrome = (string) => {
//   reversedString = string
//     .split("")
//     .reduce((reversed, char) => char + reversed, "");
//   return reversedString === string;
// };

// !Not the best sollution, but good to give as an alternative

const isPalindrome = (str) => {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
};
console.log(isPalindrome("samsar"));
