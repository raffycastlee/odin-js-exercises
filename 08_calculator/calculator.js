const add = function(x,y) {
  return x+y;
};

const subtract = function(x,y) {
  return x-y;
};

const sum = function(arr) {
  let res = 0;
  arr.forEach((val) => res += val);
  return res;
};

const multiply = function(arr) {
  let res = 1;
  for (const val of arr) {
    console.log(res);
    console.log(val);
    res *= val;
  }
  return res;
};

const power = function(x,n) {
  return Math.pow(x,n);
};

const factorial = function(n) {
  let res = 1;
  for (let i=1; i <=n; i++) {
    console.log(res);
    console.log(i);
    res *= i;
  }
  return res;
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
