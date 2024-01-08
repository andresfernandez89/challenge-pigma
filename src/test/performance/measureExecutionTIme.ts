import { sum,sumOptimized } from "../../script.js";

const nums = [1, 2, 4, 4];
const requiredSum = 8;

function measureExecutionTime(fn: (nums:number[], requiredSum:number)=>void, name:string) {
  const startTime = performance.now();
  const result = fn(nums, requiredSum);
  const endTime = performance.now();
  console.log(`${name} execution time: ${endTime - startTime} milliseconds`);
  return result;
}

measureExecutionTime(sum, 'sum function');
measureExecutionTime(sumOptimized, 'sumOptimized function');
