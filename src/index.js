
exports.min = function min (array) {
  if (!array || array.length==0) return 0;
  let min = array[0]
  array.forEach(element => {
    if (element<min) min=element
  });
  return min;
}

exports.max = function max (array) {
  if (!array || array.length==0) return 0;
  let max = array[0]
  array.forEach(element => {
    if (element>max) max=element
  });
  return max;
}

exports.avg = function avg (array) {
  if (!array || array.length==0) return 0;
  let sum = 0
  array.forEach(element => {
    sum+=element
  });
  let avg=sum/array.length
  return avg;
}
