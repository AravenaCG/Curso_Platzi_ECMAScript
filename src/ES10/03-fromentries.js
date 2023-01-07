//object.entries ahora ademas de convertir un array ahora pasa de array a objeto

const entries = new Map([["Name", "Cristian"], ["age", 35]]);
console.log(Object.fromEntries(entries));