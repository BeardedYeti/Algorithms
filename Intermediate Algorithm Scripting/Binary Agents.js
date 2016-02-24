/*Return an English translated sentence of the passed binary string.

The binary string will be space separated.*/

function binaryAgent(str) {

  code = str.split(" ");

  for(var i = 0; i < code.length; i++) {
    code[i] = String.fromCharCode(parseInt(code[i], 2));
  }
  str = code.join('');
  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
