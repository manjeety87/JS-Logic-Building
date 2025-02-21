// write a fucntion that finds and prints the maximum element in an array of numbers

const biggestNumberInArray = (arr) => {
  if (arr.length > 0) {
    let max = arr[0];
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    console.log("Maxium number is ", max);
  } else {
    console.log("Array is empty!");
  }
};

biggestNumberInArray([2, "10", 8, 7, 9, 1, "87"]);
biggestNumberInArray([]);

const biggestNumberInArray2 = (arr) => {
  if (arr.length > 0) {
    let max = Math.max(...arr);
    console.log("Maxium number is ", max);
  } else {
    console.log("Array is empty!");
  }
};

biggestNumberInArray2([2, "10", 8, 7, 9, 1, "101", "87", 99]);
biggestNumberInArray2([]);