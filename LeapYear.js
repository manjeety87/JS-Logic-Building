const isLeapYear = (year) => {
  if (typeof num !== "number") {
    if (year % 4 === 0) {
      return true;
    }
  }
  return false;
};

const isLeapYear2 = (year) => {
  if (typeof num !== "number") {
    if (year % 4 === 0) {
      return true;
    }
  }
};

const isLeapYear3 = (year) => {
  if (typeof num !== "number") {
    return year % 4 === 0 ? true : false;
  }
};

console.log(isLeapYear(2024));
console.log(isLeapYear(2023));
console.log(isLeapYear(2022));
console.log(isLeapYear(2000));

console.log(isLeapYear2(2024));
console.log(isLeapYear2(2023));
console.log(isLeapYear2(2022));
console.log(isLeapYear2(2000));

console.log(isLeapYear3(2024));
console.log(isLeapYear3(2023));
console.log(isLeapYear3(2022));
console.log(isLeapYear3(2000));
