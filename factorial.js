const factorial = (num) => {
  let result = 1;
  for (let i = num; i >= 1; i--) {
    result = result * i;
  }
  console.log(`Factorial of ${num} is: `, result);
};

factorial(3);
factorial(10);
factorial(5);
