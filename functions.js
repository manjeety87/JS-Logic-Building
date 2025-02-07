// Write a function to add two numbers

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(10, 20);
console.log("SUM", sum);

// write a fucntion that calculates and prints area of rectangle given it's width and length

const areaOfRectangle = (length, width) => {
  if (length <= 0 || width <= 0) {
    console.log(
      "AREA can never be a non negative number please try changing the length and width"
    );
    return;
  }
  const area = length * width;
  console.log("AREA OF RECTANGLE is :", area);
};

areaOfRectangle(4, 6);
areaOfRectangle(-4, 6);
areaOfRectangle(4, -6);
areaOfRectangle(-4, -6);
areaOfRectangle(0, 0);

// write a function that tells if a number is odd or even
const oddOrEven = (number) => {
  if (number % 2 == 0) {
    return "EVEN";
  } else {
    return "ODD";
  }
};

const oddOrEven2 = (number) => {
  return number % 2 === 0 ? "EVEN" : "ODD";
};

const oddOrEven3 = (number) => {
  switch (number % 2 === 0) {
    case true:
      return "EVEN";
    case false:
      return "ODD";
  }
};

console.log(oddOrEven(20));
console.log(oddOrEven(-11));
console.log(oddOrEven(99));
console.log(oddOrEven(1));

console.log(oddOrEven2(-11));
console.log(oddOrEven2(99));
console.log(oddOrEven2(20));
console.log(oddOrEven2(1));

console.log(oddOrEven3(-11));
console.log(oddOrEven3(99));
console.log(oddOrEven3(20));
console.log(oddOrEven3(10));
console.log(oddOrEven3(1));
