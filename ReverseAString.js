// write a fucntion that returns the reverse of as string

const reverseString = (inputString) => {
  if (typeof inputString !== "string") {
    console.log("Please enter a string");
    return;
  }
  let currentString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    currentString = currentString + inputString[i];
  }
  console.log("REVRESE USING LOOPS", currentString);
};

reverseString("Manjeet");
reverseString("Manjeet is a begineer");

const reverseString2 = (inputString) => {
  if (typeof inputString !== "string") {
    console.log("Please enter a string");
    return;
  }
  let currentString = inputString.split("");
  let result = "";
  for (let i = currentString.length - 1; i >= 0; i--) {
    result = result + inputString[i];
  }
  console.log("REVERSE USING SLPIT", result);
};

reverseString2("Manjeet");
reverseString2(12478);
reverseString2("Manjeet is a begineer");
