// Write a function that check if a string is pallindrome or not.

const checkPallidrome = (str) => {
  if (typeof str === "string") {
    let tempStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      tempStr = tempStr + str[i];
    }
    console.log(
      tempStr === str ? `${str} is Pallindrome` : `${str} is Not Pallindrome`
    );
  } else {
    console.log("Please pass string variable to check pallindrome");
  }
};

checkPallidrome("lolo");
checkPallidrome("hurruh");
checkPallidrome("madam");
checkPallidrome("Manjeet");
checkPallidrome(878);
checkPallidrome("LEVEL");

console.log("");
console.log("Pallinndrome using SLPIT Method");
console.log("");

const checkPallidrome2 = (str) => {
  if (typeof str === "string") {
    let strArray = str.split("");
    let tempStr = "";
    for (let i = strArray.length - 1; i >= 0; i--) {
      tempStr = tempStr + strArray[i];
    }
    console.log(
      tempStr === str ? `${str} is Pallindrome` : `${str} is Not Pallindrome`
    );
  } else {
    console.log("Please pass string variable to check pallindrome");
  }
};

checkPallidrome2("lolo");
checkPallidrome2("hurruh");
checkPallidrome2("madam");
checkPallidrome2("Manjeet");
checkPallidrome2(878);
checkPallidrome2("LEVEL");
