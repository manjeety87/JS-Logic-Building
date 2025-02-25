// write a function that counts and prints the number of vowels and consonants in a string

const countVowelAndConsonant = (str) => {
  let strLowerCase = str.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;
  let spaceCounts = strLowerCase.split(" ").length - 1;
  let consonantCounts = 0;
  for (i = 0; i <= strLowerCase.length; i++) {
    vowels.map((v) => {
      if (v === strLowerCase[i]) {
        vowelsCount++;
      }
    });
  }
  consonantCounts = strLowerCase.length - (spaceCounts + vowelsCount);
  console.log("VOWELS", vowelsCount, "CONSONANTS", consonantCounts);
};

countVowelAndConsonant("Hello World to Manjeet");
