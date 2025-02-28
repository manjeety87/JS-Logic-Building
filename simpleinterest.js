// write a function that calculates and prints simple interest on a loan amount.

const calculateSimpleInterest = (interestRate, principleAmount, duration) => {
  let simpleInterest = (interestRate * principleAmount * duration) / 100;
  simpleInterest = simpleInterest.toFixed(2);
  console.log(simpleInterest);
};

calculateSimpleInterest(1000, 5, 1);
calculateSimpleInterest(20000, 10, 5);
calculateSimpleInterest(20000.88, 10.775, 5);
