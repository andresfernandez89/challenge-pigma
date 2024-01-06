import { sum, sumOptimized } from "../../script.js";

// Mide el uso de la memoria, en este caso al ejecutar la funcion sum y sumOptimized.
// Nos permite comparar el impacto en el uso de la memoria entre las dos funciones.
// Retorna la informacion en la consola.

export function measureMemoryUsage(callback: () => void): void {
  const startMemoryUsage = process.memoryUsage();
  callback();
  const endMemoryUsage = process.memoryUsage();
  // Calcula la diferencia en el uso de la memoria, entre antes de la ejecucion de la funcion y despues.
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
