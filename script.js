function threeSum(arr, target) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Initialize variables to keep track of the closest sum and the difference
  let closestSum = Infinity;
  let minDiff = Infinity;

  // Iterate through the array
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      const diff = Math.abs(sum - target);

      // Update the closestSum and minDiff if a closer sum is found
      if (diff < minDiff) {
        closestSum = sum;
        minDiff = diff;
      }

      // Adjust pointers based on the comparison with the target
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}

module.exports = threeSum;
