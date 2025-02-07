// write num1 function that finds smallest number among three input numbers
// without using inbuilt functions

const smallestOfThree = (num1, num2, num3) => {
  if (num1 <= num2 && num1 <= num3) {
    return num1;
  } else if (num2 <= num1 && num2 <= num3) {
    return num2;
  } else if (num3 <= num1 && num3 <= num2) {
    return num3;
  }
  return num1;
};

const smallestOfThree2 = (num1, num2, num3) => {
  let smallestNumber = num1;
  if (num2 < smallestNumber) {
    smallestNumber = num2;
  } else if (num3 < smallestNumber) {
    smallestNumber = num3;
  }
  return smallestNumber;
};

const smallestOfThree3 = (a, b, c) => {
  let smallestNumber = a;
  b < smallestNumber
    ? (smallestNumber = b)
    : c < smallestNumber
    ? (smallestNumber = c)
    : (smallestNumber = a);
  return smallestNumber;
};

console.log("Smallest Number from (2, 5, -1) is :", smallestOfThree(2, 5, -1));
console.log(
  "Smallest Number from (-2, 5, -10) is :",
  smallestOfThree(-2, 5, -10)
);
console.log("Smallest Number from (7, 7, 7) is :", smallestOfThree(7, 7, 7));
console.log("Smallest Number from (2, 7, 7) is :", smallestOfThree(2, 7, 7));
console.log("Smallest Number from (7, 9, -7) is :", smallestOfThree2(7, 9, -7));

console.log("");
console.log("");
console.log("");

console.log("Smallest Number from (2, 5, -1) is :", smallestOfThree2(2, 5, -1));
console.log(
  "Smallest Number from (-2, 5, -10) is :",
  smallestOfThree2(-2, 5, -10)
);
console.log("Smallest Number from (7, 7, 7) is :", smallestOfThree2(7, 7, 7));
console.log("Smallest Number from (2, 7, 7) is :", smallestOfThree2(2, 7, 7));
console.log("Smallest Number from (7, 9, -7) is :", smallestOfThree2(7, 9, -7));
console.log("");
console.log("");
console.log("");
console.log(
  "Smallest Number using TERNARY (7, 7, 7) is :",
  smallestOfThree3(7, 7, 7)
);
console.log(
  "Smallest Number using TERNARY (2, 7, 7) is :",
  smallestOfThree3(2, 7, 7)
);
console.log(
  "Smallest Number using TERNARY (7, 7, 2) is :",
  smallestOfThree3(7, 7, 2)
);
console.log(
  "Smallest Number using TERNARY (7, 9, -7) is :",
  smallestOfThree3(7, 9, -7)
);
