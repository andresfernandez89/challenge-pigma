// Algorithm 1.
// This function checks if there are two elements in the 'nums' array whose sum equals 'requiredSum'.
export function sum(nums: number[], requiredSum: number): boolean {
  // If the array 'nums' is empty, an error is thrown.
  if (nums.length === 0) {
    throw new Error("Empty array");
  }
  // If the array 'nums' has only one element, an error is thrown.
  if (nums.length === 1) {
    throw new Error("Array must have at least two elements");
  }
  // Compare all possible combinations of elements in the array.
  for (let i = 0; nums.length > i; i++) {
    for (let j = 0; nums.length > j; j++) {
      // If the sum of two different elements in the array equals 'requiredSum', returns 'true'.
      if (nums[i] + nums[j] === requiredSum && i !== j) return true;
    }
  }
  return false;
}

// Algorithm 2.
// Complexity: O(n)
// This function optimized checks if there are two elements in the 'nums' array whose sum equals 'requiredSum'.
export function sumOptimized(nums: number[], requiredSum: number): boolean {
  // If the array 'nums' is empty, an error is thrown.
  if (nums.length === 0) {
    throw new Error("Empty array")
    // If the array 'nums' has only one element, an error is thrown;
  } else if (nums.length === 1) {
    throw new Error("Array must have at least two elements");
  }
  // Create a Set to store numbers as they are processed.
  const numbersTest = new Set();
  // Iterate the array to find the pair of elements with the required sum.
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement needed to reach the required sum.
    const complement = requiredSum - nums[i];
    // If the complement is already in the set 'numbersTest', the function returns 'true'.
    if (numbersTest.has(complement)) {
      return true;
    }
    // If the complement is not in the set, 'nums[i]' is added to the set 'numbersTest'.
    numbersTest.add(nums[i]);
  }
  return false;
}
