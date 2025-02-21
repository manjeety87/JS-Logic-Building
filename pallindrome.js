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
checkPallidrome(878);
checkPallidrome("LEVEL");
