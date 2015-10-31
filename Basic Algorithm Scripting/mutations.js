function mutation(arr) {
  var mutantOne = arr[0].toLowerCase();
  var mutantTwo = arr[1].toLowerCase();
  
  for(var i = 0; i < mutantTwo.length; i++) {
    var scanalize = mutantOne.indexOf(mutantTwo[i]);
    if (scanalize === -1) {
      return false;
    }
  }
return true;
}

mutation(['hello', 'hey']);