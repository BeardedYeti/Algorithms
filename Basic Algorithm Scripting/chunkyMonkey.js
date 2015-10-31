function chunk(arr, size) {
  var monkeyArray = [],
  i = 0;
  
  while (i < arr.length) {
    monkeyArray.push(arr.slice(i, i += size));
  }
  return monkeyArray;

  
}

chunk(['a', 'b', 'c', 'd'], 2);
