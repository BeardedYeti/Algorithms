function destroyer(arr) {
  var destroyed = [];
  for(var i = 1; i < arguments.length; i++) {
    destroyed.push(arguments[i]);
  }

  var survivors = arguments[0].filter(function(element, index) {
    var toReturn = true;
    
    for(var i = 0; i < destroyed.length; i++) {
      if(element === destroyed[i]) {
        toReturn = false;
      }
    }
    return toReturn;
  })
  
  return survivors;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);