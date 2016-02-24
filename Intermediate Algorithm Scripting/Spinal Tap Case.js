/*Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.*/

function spinalCase(str) {

  str = str.replace(/_/g, "-").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/ /g, "-").toLowerCase();

  return str;
}

spinalCase('This Is Spinal Tap');
