//Convert the given number into a roman numeral.


function convert(num) {
  var roman = [];
  var Numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var numEquals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  for(var i = 0; i < numEquals.length; i++) {
    while(num >= numEquals[i]){
      roman = roman + Numerals[i];
      num = num - numEquals[i];
    }
  }
 return roman;
}

convert(36);
