/*Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.*/

function convert(str) {

  str = str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/<>/g, "&lt;&gt;");
  // &colon;&rpar;
  return str;
}

convert("Dolce & Gabbana");
