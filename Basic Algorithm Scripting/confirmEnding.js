function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
return str.substring(str.length - target.length) === target ? true : false;
}

end('Bastian', 'n');