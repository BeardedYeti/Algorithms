//Find
// Worst case it goes to the end of the array
// O(n)

function find(needle, haystack) {
	for (var i = 0; i < haystack.length; i++) {
		if (haystack[i] === needle) return true;
	}
}

find(3, arr);