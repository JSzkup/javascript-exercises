const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (numList) {
  let result = numList.reduce((total, current) => total + current, 0);
  return result;
};

const multiply = function (numList) {
  let result = numList.reduce((total, current) => total * current, 1);

  return result;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  // create a list of num size of only num numbers
  let factorialArray = [];
  const originalNum = num;

  for (let i = 0; i < originalNum; i++) {
    factorialArray.push(num);
    num -= 1;
  }

  const result = multiply(factorialArray)

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
