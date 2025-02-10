// write a fucntion that returns the reverse of as string

const typeCheck = (inputType, type) => {
  if (typeof inputType !== type) {
    console.log(
      `Please enter a ${type} type. ${inputType} is ${typeof inputType} type`
    );
    return false;
  }
  return true;
};

const reverseString = (inputString) => {
  let currentString = "";
  if (typeCheck(inputString, "string")) {
    for (let i = inputString.length - 1; i >= 0; i--) {
      currentString = currentString + inputString[i];
    }
    console.log("REVRESE USING LOOPS", currentString);
    return currentString;
  }
};

reverseString("Manjeet");
reverseString("Manjeet is a begineer");

const reverseString2 = (inputString) => {
  let result = "";
  if (typeCheck(inputString, "string")) {
    let currentString = inputString.split("");
    for (let i = currentString.length - 1; i >= 0; i--) {
      result = result + inputString[i];
    }
    console.log("REVERSE USING SLPIT", result);
    return result;
  }
};

reverseString2("Manjeet");
reverseString2(12478);
reverseString2("Manjeet is a begineer");

const reverseString3 = (inputString) => {
  if (typeCheck(inputString, "string")) {
    let slpittedArray = inputString.split("");
    let reversedArray = slpittedArray.reverse();
    let result = reversedArray.join("");
    console.log("3 - SPLITTED REVERSE STRING", result);
    return result;
  }
};

reverseString3("Manjeet");
reverseString3(12478);
reverseString3("Manjeet is a begineer");
