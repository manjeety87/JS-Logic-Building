// write a fucntion that returns the reverse of as string

const reverseString = (inputString) => {
  let currentString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    currentString = currentString + inputString[i];
  }
  console.log("::::::::", currentString);
};

reverseString("Manjeet");
reverseString("Manjeet is a begineer");
