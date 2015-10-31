function factorialize(num) {
  var tmp = 1;
  for (var i=1; i<=num; i++) {
    tmp *= i;
  }
  return tmp;
}

factorialize(5);