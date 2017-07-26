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