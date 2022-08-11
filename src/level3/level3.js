// No cambies los nombres de las funciones.

export function devolverPrimerElemento(array) {
  // Tu código:

  if (array) return array.shift();
}

export function devolverUltimoElemento(array) {
  // Tu código:

  if (array) return array.pop();
}

export function obtenerLargoDelArray(array) {
  // Tu código:

  return array.length;
}

export function incrementarPorUno(array) {
  // Tu código:

  return array.map((element) => element + 1);
}

export function agregarItemAlFinalDelArray(array, elemento) {
  // Tu código:

  array.push(elemento);
  return array;
}

export function agregarItemAlComienzoDelArray(array, elemento) {
  /// Tu código:

  array.unshift(elemento);
  return array;
}

export function dePalabrasAFrase(palabras) {
  // Tu código:
  let arrayFrase = palabras.join(" ");
  return arrayFrase;
}

export function arrayContiene(array, elemento) {
  // Tu código:

  return array.includes(elemento);
}

export function agregarNumeros(numeros) {
  // Tu código:
  const listaNumeros = [...numeros];
  const sumall = listaNumeros
    .map((item) => item)
    .reduce((prev, curr) => prev + curr, 0);
  return sumall;
}

export function promedioResultadosTest(resultadosTest) {
  // Tu código:
  let resultados = [...resultadosTest];
  let sum = resultados.reduce((previous, current) => (current += previous));
  let promedio = sum / resultados.length;
  return promedio;
}

export function numeroMasGrande(numeros) {
  // Tu código:
  const mayor = Math.max(...numeros);
  return mayor;
}

export function multiplicarArgumentos() {
  // Tu código:

  return;
}

export function cuentoElementos(arreglo) {
  // Tu código:

  const result = arreglo.filter((number) => number > 18);
  return result.length;
}

export function diaDeLaSemana(numeroDeDia) {
  // Tu código:
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  }
  return "Es dia Laboral";
}

export function empiezaConNueve(n) {
  // Tu código:
  const number = n.toString();
  if (number.startsWith(9)) {
    return true;
  }
  return false;
}

export function todosIguales(arreglo) {
  // Tu código:

  if (arreglo.every((e) => arreglo[0] === e)) {
    return true;
  } else return false;
}

export function mesesDelAño(array) {
  // Tu código:
  const meses = ["Marzo", "Noviembre", "Enero"];
  const arrayAux = array.filter((mes) => meses.includes(mes));
  return arrayAux.length === 3
    ? arrayAux
    : "No se encontraron los meses pedidos";
}

export function mayorACien(array) {
  // Tu código:
  const mayorACien = array.filter((e) => e > 100);
  return mayorACien;
}

export function breakStatement(numero) {
  // Tu código:
  // for (let i = 0; i < 10; i++) {
  //   if (numero === sum) break;
  //   const sum = numero + 2;
  //   return sum;
  // }
  const auxArray = [];
  let suma = numero;
  let i = 0;
  while (i < 10) {
    i++;
    if (i === suma) break;
    suma += 2;
    auxArray.push(suma);
  }
  return auxArray.length === 10 ? auxArray : "Se interrumpió la ejecución";
}

export function continueStatement(numero) {
  // Tu código:

  const auxArray = [];
  let suma = numero;
  for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    suma += 2;
    auxArray.push(suma);
  }
  return auxArray;
}
