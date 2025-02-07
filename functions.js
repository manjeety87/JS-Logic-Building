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