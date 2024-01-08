import { sum, sumOptimized } from "../../script.js";

// Mide el uso de la memoria al ejecutar una funcion.
// Nos permite comparar el impacto en el uso de la memoria de una funcion.
// Retorna un objeto en la consola con 3 propiedades:
//  - rss (cantidad de memoria asignada al proceso).
//  - heapTotal (cantidad de memoria asignada al heap, donde se almacenan los objetos de javascript).
//  - heapUsed (la cantidad de memoria actualmente en uso en el heap).

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
  return;
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
