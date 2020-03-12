A binary search is performed by continually dividing a sorted range of values in half until the target value is found.
Pseudocode:
1. Set the low index of the array to 0, the high index to the array length, and find the midpoint by diving the high point by 2 and rounding.
1. Compare our key to that midpoint.
1. If it's a match, hooray! Return that index.
1. If the key is less, divide and search the lower half of the array (set the new high point to the old midpoint, and find a new midpoint)
1. If the key is more, divide and search the upper half of the array
1. Continue the previous three steps until a match is found.