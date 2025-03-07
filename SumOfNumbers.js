// Write a funtion that prints sum of a number
const sumOfNumber = (num) => {
  if (num >= 0) {
    let numString = num.toString();
    let splittedString = numString.split("");
    let sum = 0;
    splittedString.map((n) => {
      sum = sum + parseInt(n);
    });
    console.log(`SUM of ${num} is:`, sum);
  } else {
    console.log("Please enter a positive number!");
  }
};

// Using forEach
const sumOfNumber2 = (num) => {
  if (num >= 0) {
    let numString = num.toString();
    let splittedString = numString.split("");
    let sum = 0;
    splittedString.forEach((n) => {
      sum = sum + parseInt(n);
    });
    console.log(`SUM of ${num} is:`, sum);
  } else {
    console.log("Please enter a positive number!");
  }
};

// Using remainder method
const sumOfNumber3 = (num) => {
  if (num >= 0) {
    let number = num;
    let sum = 0;
    while (number > 0) {
      let remainder = number % 10;
      sum = sum + remainder;
      number = Math.floor(number / 10);
    }
    console.log(`SUM of ${num} is:`, sum);
  } else {
    console.log("Please enter a positive number!");
  }
};

sumOfNumber(-123);
sumOfNumber(124);
sumOfNumber(321);

sumOfNumber2(123);
sumOfNumber2(124);
sumOfNumber2("-32");

sumOfNumber3(123);
sumOfNumber3(124);
sumOfNumber3(-111);
