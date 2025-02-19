// Write a fucntion that generates and prints a multiplication table for a given number up to a specified number
const table = (num, range) => {
  if (num > 0 && range > 0) {
    for (let i = 1; i <= range; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
  } else {
    console.log(`Please enter positive integer to print table!`);
  }
};

// table(5, -10);
// console.log("");
// table(5, 60);
// console.log("");
// table(-5, 3);
// console.log("");
// console.log("String");
// table("5", "3");

const table2 = (num, range) => {
  let count = 1;
  if ((num > 0 && range > 0) && typeof num === "number" && typeof range === "number") {
    while (true) {
      console.log(`${num} x ${count} = ${num * count}`);
      count = count + 1;
      if (count == range + 1) {
        break;
      }
    }
  } else {
    console.log(`Please enter positive integer to print table!`);
  }
};

table2(5, -10);
console.log("");
table2(5, 60);
console.log("");
table2(5, 3);
console.log("");
console.log("String");
table2("5", "3");
console.log("NUMBER");
table2(5, 3);
