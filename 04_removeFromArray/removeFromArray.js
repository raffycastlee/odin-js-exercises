const removeFromArray = function(arr, ...deletes) {
  let res = [];
  for (let i in arr) {
    if (deletes.includes(arr[i])) {
      continue;
    }
    res.push(arr[i]);
  }
  return res;
};

// Do not edit below this line
module.exports = removeFromArray;
