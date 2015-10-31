function where(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });
  
  var home = 0;
  
  for(var i = 0; i < arr.length; i++) {
    if(arr[i]  < num) {
      home = i + 1;
    } else {
      return home;
    }
  }

  
  
}

where([40, 60], 50);
