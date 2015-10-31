function largestOfFour(arr) {
  // You can do this!
  var big = [];
  var zero = 0;
  for (var i in arr) {
    for (var x in arr[i]) {
      if (arr[i][x] > zero) {
        zero = arr[i][x];
      }
    }
    big.push(zero);
  }
  return big;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);