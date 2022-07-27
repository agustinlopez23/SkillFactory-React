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

  return true;
}

export function mesesDelAño(array) {
  // Tu código:

  return;
}

export function mayorACien(array) {
  // Tu código:

  return;
}

export function breakStatement(numero) {
  // Tu código:

  return;
}

export function continueStatement(numero) {
  // Tu código:

  return;
}
