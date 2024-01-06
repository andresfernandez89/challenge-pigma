import { sum, sumOptimized } from "../../script.js";
export function measureMemoryUsage(callback: () => void): void {
  const startMemoryUsage = process.memoryUsage();
  callback();
  const endMemoryUsage = process.memoryUsage();
  const memoryDiff = {
    rss: endMemoryUsage.rss - startMemoryUsage.rss,
    heapTotal: endMemoryUsage.heapTotal - startMemoryUsage.heapTotal,
    heapUsed: endMemoryUsage.heapUsed - startMemoryUsage.heapUsed,
  };
  console.log("Memory Usage Diff:", memoryDiff);
}

console.log("sum function");
measureMemoryUsage(() => {
  sum([1, 2, 4, 4], 8);
});

console.log("--------------------------------------------------------------");

console.log("sumOptimized function");
measureMemoryUsage(() => {
  sumOptimized([1, 2, 4, 4], 8);
});
