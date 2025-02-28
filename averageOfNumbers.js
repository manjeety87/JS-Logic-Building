// write a function that calculates and prints average of a set of numbers in an array of numbers

const calculateAverage = (arr) => {
  let avg = 0;
  let arry = [];
  if (typeof arr === "object" && arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0 && typeof arr[i] === "number") {
        avg = avg + arr[i];
      } else {
        console.log("Array has some values that is not positive integer.");
        return;
      }
    }
    avg = avg / arr.length;
    console.log("Average is:", avg);
  } else {
    console.log("Please pass arr of integers to calculate average of a set.");
  }
};

calculateAverage([1, 2, 4]);
calculateAverage(["1", "2", "4"]);
calculateAverage([1, 2, 7, 14]);
calculateAverage([1, 5, 7, 35]);
calculateAverage("[1, 5, 7, 35]");
calculateAverage({ value: "[1, 5, 7, 35]" });
