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