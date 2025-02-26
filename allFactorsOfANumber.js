// write a fucntion that finds all the factors of a given number.
// input: number, positive, integer
const allFactorsOfNumber = (num) => {
  let factors = [];
  if (num > 1) {
    for (let i = 0; i <= num; i++) {
      if (num % i === 0) factors.push(i);
    }
    return factors;
  }
  return "Please enter a postive integer number"
};

console.log("Factor of 4", allFactorsOfNumber(4));
console.log("Factor of -4", allFactorsOfNumber(-4));
console.log("Factor of 14", allFactorsOfNumber("14"));
console.log("Factor of 35", allFactorsOfNumber(35));
console.log("Factor of 35", allFactorsOfNumber("a"));
