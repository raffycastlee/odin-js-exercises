const sumAll = function(start, end) {
  if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
    return "ERROR";
  }
  let sum = 0;
  if (start <= end) {
    for (; start <= end; start++) {
      sum += start;
    }
  } else {
    for (; end <= start; end++) {
      sum += end;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
