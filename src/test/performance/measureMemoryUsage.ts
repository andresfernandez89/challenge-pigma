import { sum, sumOptimized } from "../../script.js";

const nums = [1, 2, 4, 4];
const requiredSum = 8;
// Measure the memory usage when executing a function.
// Compare the impact on memory usage of a function.
// Returns the heapUsed property (the amount of memory currently in use in the heap).

export function measureMemoryUsage(
  fn: (nums: number[], requiredSum: number) => void,
  name: string,
): void {
  const startMemoryUsage = process.memoryUsage();
  fn(nums, requiredSum);
  const endMemoryUsage = process.memoryUsage();
  // Calculates the difference in memory usage between before and after the execution of the function.
  const memoryDiff = {
    rss: endMemoryUsage.rss - startMemoryUsage.rss,
    heapTotal: endMemoryUsage.heapTotal - startMemoryUsage.heapTotal,
    heapUsed: endMemoryUsage.heapUsed - startMemoryUsage.heapUsed,
  };
  console.log(`${name} memory usage (heapUsed):, ${memoryDiff.heapUsed}`);
  return;
}

measureMemoryUsage(sum, "sum function");
measureMemoryUsage(sumOptimized, "sumOptimized function");
