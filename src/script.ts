export function sum(nums: number[], requiredSum: number): boolean {
  if (nums.length === 0) {
    throw new Error("Empty array");
  }
  if (nums.length === 1) {
    throw new Error("Array must have at least two elements");
  }
  for (let i = 0; nums.length > i; i++) {
    for (let j = 0; nums.length > j; j++) {
      if (nums[i] + nums[j] === requiredSum && i !== j) return true;
    }
  }
  return false;
}

export function sumOptimized(nums: number[], requiredSum: number): boolean {
  if (nums.length === 0) {
    throw new Error("Empty array");
  } else if (nums.length === 1) {
    throw new Error("Array must have at least two elements");
  }
  const numbersTest = new Set();
  for (let i = 0; i < nums.length; i++) {
    const complement = requiredSum - nums[i];
    if (numbersTest.has(complement)) {
      return true;
    }
    numbersTest.add(nums[i]);
  }
  return false;
}
