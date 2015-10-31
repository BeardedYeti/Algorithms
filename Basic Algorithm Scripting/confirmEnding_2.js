function end(str, target) {
  var wang = target.length;
  
  if(str.substr(-wang) === target) {
    return true;
  } else {
    return false;
  }

  
  
}

end('Bastian', 'n');