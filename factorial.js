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

const factorial2 = (num) => {
  // tried with increment too with type check
  if (typeof num === "number") {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result = result * i;
    }
    console.log(`Factorial of ${num} is: `, result);
  } else {
    console.log("Enter a number to get a factorial!");
  }
};
factorial2("3");
factorial2(10);
factorial2(5);

const factorialUsingRecursion = (num) => {
  if (num === 1 || num === 0) {
    return 1;
  } else {
    return num * factorialUsingRecursion(num - 1);
  }
};

// factorialUsingRecursion("3");
console.log("Factorial using RECURSION",factorialUsingRecursion(10));
console.log("Factorial using RECURSION",factorialUsingRecursion(5));
console.log("Factorial using RECURSION",factorialUsingRecursion(3));
console.log("Factorial using RECURSION",factorialUsingRecursion(4));