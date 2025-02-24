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

console.log("");
console.log("Pallinndrome using LOOPS & Manipulating the indexes");
console.log("");

const checkPallidrome3 = (str) => {
  if (typeof str === "string") {
    for (let i = 0; i <= str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
      return true;
    }
  } else {
    console.log("Please pass string variable to check pallindrome");
    return false;
  }
};

console.log("lolo", checkPallidrome3("lolo"));
console.log("hurruh", checkPallidrome3("hurruh"));
console.log("madam", checkPallidrome3("madam"));
console.log("Manjeet", checkPallidrome3("Manjeet"));
console.log("878", checkPallidrome3(878));
console.log("LEVEL", checkPallidrome3("LEVEL"));

console.log("");
console.log("Pallinndrome using LOOPS & Manipulating the indexes");
console.log("");

const checkPallidrome4 = (str) => {
  if (typeof str === "string") {
    let start = 0;
    let end = str.length - 1;
    for (start, end; start < end; start++, end--) {
      //   console.log(str[start], str[end]);
      if (str[start] !== str[end]) {
        return false;
      }
      return true;
    }
  } else {
    console.log("Please pass string variable to check pallindrome");
    return false;
  }
};

console.log("lolo", checkPallidrome4("lolo"));
console.log("hurruh", checkPallidrome4("hurruh"));
console.log("madam", checkPallidrome4("madam"));
console.log("Manjeet", checkPallidrome4("Manjeet"));
console.log("878", checkPallidrome4(878));
console.log("LEVEL", checkPallidrome4("LEVEL"));

console.log("");
console.log("Pallinndrome using SLPIT Method");
console.log("");

const checkPallidrome5 = (str) => {
  if (typeof str === "string") {
    let strLowerCase = str.toLowerCase();
    let strArray = strLowerCase.split("");
    let reverserStrArr = strArray.reverse();
    let reverseStr = reverserStrArr.join("");
    console.log(
      strLowerCase === reverseStr
        ? `${str} is Pallindrome`
        : `${str} is Not Pallindrome`
    );
  } else {
    console.log("Please pass string variable to check pallindrome");
  }
};

checkPallidrome5("lolo");
checkPallidrome5("hurruh");
checkPallidrome5("madam");
checkPallidrome5("Manjeet");
checkPallidrome5(878);
checkPallidrome5("LEVEL");
