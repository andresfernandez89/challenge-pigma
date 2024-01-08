import { sum, sumOptimized } from "../../script.js";

const nums = [1, 2, 4, 4];
const requiredSum = 8;
// Mide el uso de la memoria al ejecutar una funcion.
// Nos permite comparar el impacto en el uso de la memoria de una funcion.
// Retorna la propiedad heapUsed (la cantidad de memoria actualmente en uso en el heap).

export function measureMemoryUsage(
  fn: (nums: number[], requiredSum: number) => void,
  name: string,
): void {
  const startMemoryUsage = process.memoryUsage();
  fn(nums, requiredSum);
  const endMemoryUsage = process.memoryUsage();
  // Calcula la diferencia en el uso de la memoria, entre antes de la ejecucion de la funcion y despues.
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
