# Quicksort
# O(n log n)

def quicksort(arr):
	# Checks for length to see if quicksort is worth it
	if len(arr) < 2:
		return arr
	else:
		# Gets pivot
		pivot = arr[0]

		# Gets less than pivot
		less = [i for i in arr[1:] if i <= pivot]

		# Gets greater than pivot
		greater = [i for i in arr[1:] if i > pivot]

		# Creates an array using quicksort recursively
		return quicksort(less) + [pivot] + quicksort(greater)

print(quicksort([12, 88, 8, 89, 2, 96, 63, 58]))