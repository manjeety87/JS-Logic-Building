// Write a funtion that prints sum of a number
const sumOfNumber2 = (num) => {
  let numString = num.toString();
  let splittedString = numString.split("");
  let sum = 0;
  splittedString.map((n) => {
    sum = sum + parseInt(n);
  });
  console.log(`SUM of ${num} is:`, sum);
};

sumOfNumber2(123);
sumOfNumber2(321);
sumOfNumber2(124);
