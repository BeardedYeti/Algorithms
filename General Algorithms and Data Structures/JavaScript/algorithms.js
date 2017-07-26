//Algorithms

// Cross Add
// Go over everything once
// O(n)

function crossAdd(input) {
	var answer = [];
	for (var i = 0; i < input.length; i++) {
		var goingUp = input[i];
		var goingDown = input[input.length-1-i];
		answer.push(goingUp + goingDown);
	}
	return answer;
}

var arr = [1, 2, 3];
crossAdd(arr);

//Find
// Worst case it goes to the end of the array
// O(n)

function find(needle, haystack) {
	for (var i = 0; i < haystack.length; i++) {
		if (haystack[i] === needle) return true;
	}
}

find(3, arr);

//Tuples
// Makes every combination of arrays in an array
// Loop in a loop
// O(n^2)

function makeTuples(input) {
    var answer = [];
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input.length; j++) {
            answer.push([input[i], input[j]]);
        }
    }
    return answer;
}

makeTuples(arr);

// Constant
// Just returns a value with no loops
// O(1)

function constant(input) {
	return input;
}

//Divide and Conquer Strategy
// As you add more and more elements it will take less and less time
// O(log n)
// Merge sort, Quick sort, Tree Search

//Recursion
let wr = (msg='--------') => document.write(`<br>${msg}`);

function basicRecursion(max, current) {
  if (current > max) return;
  wr(current);
  basicRecursion(max, current+1);
}

basicRecursion(5,1);
wr();
wr();

function fibonacci(n) {
    if(n <= 2) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

for (var i = 1; i <= 20; i++) {
  wr(`${i}. ${fibonacci(i)}`);
}

// Factorial Recursion
/*
  Make a function that computes a factorial recursively.
  A factorial is when you take a number n and multiply by each preceding integer until you hit one.
  n * (n-1) * (n-2) ... * 3 * 2 * 1
  
  Call the function factorial
  
  factorial(1) = 1
  factorial(2) = 2
  factorial(3) = 6 
*/

function factorial (n) {
  if (n < 2) {
    return 1
  }
  
  return n * factorial(n-1)
}

// Sorting Algorithms

// Bubble Sort
// O(n^2)
// Do While Loop that will iterate through and foreach iterated number it will swap adjacent numbers out of order and will iterate through until all is in order
// Bubble sort works by comparing two adjacent numbers next to each other and then swapping their places if the smaller index's value is larger than the larger index's. Continue looping through until all values are in ascending order

var bubbleSort = nums => {  
  do {
    var swapped = false;
    for (var i = 0; i < nums.length; i++) {
      snapshot(nums);
      if (nums[i] > nums[i+1]) {
        var temp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = temp;
        swapped = true;
      }
    }
  } while(swapped);
  snapshot(nums);
};

var nums = [10,5,3,8,2,6,4,7,9,1];
bubbleSort(nums);

// Insertion Sort
// O(n^2) but is suited for times when you're pretty sure a list is almost sorted or better.
// From the start, it will compare and insert the number where when it compares. 
var insertionSort = nums => {  
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      snapshot(nums);
      if (nums[i] < nums[j]) {
        let spliced = nums.splice(i, 1);
        nums.splice(j, 0, spliced[0]);
      }
    }
  }
};

var nums = [10,5,3,8,2,6,4,7,9,1];
insertionSort(nums);

// Merge Sort
// O(n log n) for time complexity but O(n) for space complexity which is worse than previous algorithms
// Divide and Conquer and Recursive
// Used a lot
// Take a big list, break into smaller lists and sort
/*
[1, 5, 6] sublist 1
[2, 7, 8] sublist 2

-> compare 1 and 2, take 1 and put it in new list
-> compare 5 and 2, take 2 and put it in new list
-> compare 5 and 7, take 5 and put it in new list
-> compare 6 and 7, take 6 and put it in new list
-> list one has no more elements
   add the rest of list two in order (7 and 8)
*/

const mergeSort = nums => {
  if (nums.length < 2) {
    return nums;
  }
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle, length);
  
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  
  const results = [];
  
  while (left.length && right.length) {
    
    if (left[0] <= right[0]) {
      results.push(left.shift());
    }
    else {
      results.push(right.shift());
    }
  }
  
  while(left.length) {
    results.push(left.shift());
  }
  while(right.length) {
    results.push(right.shift());
  }
  
  return results;
};

var nums = [10,5,3,8,2,6,4,7,9,1];
var ans = mergeSort(nums);

// Quicksort
// O(n log n)
// Takes less up less memory than merge sort so is often favored
// Divide and Conquer, recursive, take the last element in the list and call that the pivot.
// Everything that is smaller than the pivot get's put to the left, everything larger to the right.
// You can then call quick sort on th left and right lists independently
/*
[4,9,3,5] list
-> 5 is made the pivot since it's the last in the array
-> divide list into two lists, [4,3] and [9]
-> call quicksort on those two lists

[4, 3]
-> 3 is pivot
-> call quicksort on [] and [4]
-> those both return as is as they are the base case of length 0 or 1
-> concat [], 3, and [4]
-> return [3,4]

[9]
-> returns as this it is a base case of length 1

(back into the original function call)
-> call concat on [3,4], 5, and [9]
-> return [3,4,5,9]
*/


const quickSort = nums => {
  if (nums.length <= 1) return nums;
  
  const pivot = nums[nums.length-1];
  const left = [];
  const right = [];
  
  for (let i = 0; i < nums.length-1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    }
    else {
      right.push(nums[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};


const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
const answer = quickSort(input);
