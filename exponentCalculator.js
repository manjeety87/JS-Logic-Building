// write a function that returns the result of raising a given number to a specified power.

const calulateExponent = (num, power) => {
  let tempNum = 1;
  for (i = 1; i <= power; i++) {
    tempNum = tempNum * num;
  }
  console.log("ANS", tempNum);
};

calulateExponent(2, 2);
calulateExponent(2, 3);
calulateExponent(3, 2);
calulateExponent(3, 3);
calulateExponent(16, 2);
calulateExponent(15, 2);
calulateExponent(7, 3);
calulateExponent("5", "4");
