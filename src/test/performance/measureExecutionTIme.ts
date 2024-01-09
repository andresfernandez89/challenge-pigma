import { sum, sumOptimized } from "../../script.js";

const nums = [1, 2, 4, 4];
const requiredSum = 8;
// Measure the execution time of a function using the `performance.now()` method.
// Takes a function as the first argument and a name as the second argument.
// Returns the execution time of the function in milliseconds.
function measureExecutionTime(
  fn: (nums: number[], requiredSum: number) => void,
  name: string,
) {
  const startTime = performance.now();
  fn(nums, requiredSum);
  const endTime = performance.now();
  console.log(`${name} execution time: ${endTime - startTime} milliseconds`);
  return;
}

measureExecutionTime(sum, "sum function");
measureExecutionTime(sumOptimized, "sumOptimized function");
