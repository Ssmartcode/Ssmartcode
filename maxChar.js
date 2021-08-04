const maxChar = (string) => {
  const mapString = {};
  string.split("").forEach((char) => {
    mapString[char] > 0 ? mapString[char]++ : (mapString[char] = 1);
  });
  const maxNumber = Math.max(...Object.values(mapString));
  for (char in mapString) {
    if (mapString[char] === maxNumber) {
      return char;
    }
  }
};

console.log(maxChar("mamaammmmmma"));
