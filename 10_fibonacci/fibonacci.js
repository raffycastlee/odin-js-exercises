const fibonacci = function(n) {
  n = Number(n);
  if (n<0) {
    return "OOPS";
  }
  if (n === 0 ) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  let left = 1;
  let right = 1;
  for (let i = 3; i <= n; i++) {
    [left,right] = [right,left+right];
  }
  return right;
};

// Do not edit below this line
module.exports = fibonacci;
