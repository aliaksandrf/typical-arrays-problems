
exports.min = function min (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  let min = array[0];
  for (let key of array) {
    if (min > key) {
      min = key;
    }
  }
  return min;
}


exports.max = function max (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  let max = array[0];
  for (let key of array) {
    if (max < key) {
      max = key;
    }
  }
  return max;
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let key of array) {
    sum += key;
  }
  return (sum/array.length);
}
