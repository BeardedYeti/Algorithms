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