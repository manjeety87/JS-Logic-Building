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
console.log(" ");

const countVowelAndConsonant2 = (str) => {
  const vowels = "aeiou";
  const consonants = "bcdfghjklmnpqrstvwxyz";
  str = str.toLowerCase();
  str = str.replace(" ", "");
  let vowelCount = 0;
  let consonantsCount = 0;
  for (let i = 0; i <= str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelCount++;
    } else if (consonants.includes(str[i])) {
      consonantsCount++;
    } else {
      console.log("This is neither a consonant nor a vowel");
    }
  }
  console.log("VOWEL", vowelCount, "CONSONANTS", consonantsCount);
};
countVowelAndConsonant2("Hello World to Manjeet!");
