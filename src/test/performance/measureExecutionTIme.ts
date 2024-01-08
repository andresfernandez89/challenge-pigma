import { sum, sumOptimized } from "../../script.js";

const nums = [1, 2, 4, 4];
const requiredSum = 8;
// Mide el tiempo de ejecución de una función utilizando el método `performance.now().
// Recibe una función como primer argumento y un nombre como segundo argumento.
// Retorna el tiempo de ejecucion en milisisegundos de la funcion.
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
