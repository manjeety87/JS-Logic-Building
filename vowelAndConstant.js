// write a function that counts and prints the number of vowels and consonants in a string

const countVowelAndConsonant = (str) => {   // This fucntion can't handle other than words
  str = str.replace(/ /g, "");
  console.log("STR", str);
  //   str = str.replace(" ", "");
  let strLowerCase = str.toLowerCase();
  //   strLowerCase = strLowerCase.replace(/ /g, "");

  const vowels = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;
  let consonantCount = 0;
  //   let spaceCounts = strLowerCase.split(" ").length - 1;
  for (i = 0; i <= strLowerCase.length; i++) {
    vowels.map((v) => {
      if (v === strLowerCase[i]) {
        vowelsCount++;
      } else if (/^[a-z]$/.test(strLowerCase[i])) {
        console.log("ADDING CONSONANT", strLowerCase[i]);
        consonantCount++;
      } else {
        console.log(strLowerCase[i], "This is neither a consonant nor a vowel");
      }
    });
  }
  console.log("VOWELS", vowelsCount, "CONSONANTS", consonantCount);
};

countVowelAndConsonant("Hello World to Manjeet");
countVowelAndConsonant("Hello World to Manjeet! 124");
console.log(" ");

const countVowelAndConsonant2 = (str) => {
  const vowels = "aeiou";
  const consonants = "bcdfghjklmnpqrstvwxyz";
  str = str.toLowerCase();
  //   str = str.replace(" ", ""); //this does not removes the extra words in the string
  str = str.replace(/ /g, ""); //using a regrex expression this will remove the extra spaces and the extra words
  console.log("STR", str);
  let vowelCount = 0;
  let consonantsCount = 0;
  for (let i = 0; i <= str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelCount++;
    } else if (/^[a-z]$/.test(str[i])) {
      consonantsCount++;
      // } else if (consonants.includes(str[i])) {
      //   consonantsCount++;
    } else {
      console.log("This is neither a consonant nor a vowel");
    }
  }
  console.log("VOWEL", vowelCount, "CONSONANTS", consonantsCount);
};
// countVowelAndConsonant2("Hello World to Manjeet!");
// countVowelAndConsonant2("Hello World to Manjeet! 124");
