// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

export function devolverString(str) {
  // Tu código:

  return str.toString();
}

export function suma(a, b) {
  // Tu código:

  return a + b;
}

export function resta(a, b) {
  // Tu código:

  return a - b;
}

export function multiplica(a, b) {
  // Tu código:

  return a * b;
}

export function divide(a, b) {
  // Tu código:

  return a / b;
}

export function sonIguales(a, b) {
  // Tu código:

  return a === b;
}

export function tienenMismaLongitud(a, b) {
  // Tu código:

  return a.length === b.length;
}

export function menosQueNoventa(a) {
  // Tu código:

  return a < 90;
}

export function mayorQueCincuenta(a) {
  // Tu código:

  return a > 50;
}

export function obtenerResto(a, b) {
  // Tu código:

  return a % b;
}

export function esPar(a) {
  // Tu código:

  return a % 2 === 0;
}

export function esImpar(num) {
  // Tu código:

  return num % 2 !== 0;
}

export function elevarAlCuadrado(num) {
  // Tu código:

  return num * num;
}

export function elevarAlCubo(num) {
  // Tu código:

  return num * num * num;
}

export function elevar(num, exponent) {
  // Tu código:

  return Math.pow(num, exponent);
}

export function redondearNumero(num) {
  // Tu código:

  return Math.round(num);
}

export function redondearHaciaArriba(num) {
  // Tu código:

  return Math.ceil(num);
}

export function numeroRandom() {
  // Tu código:

  return Math.random();
}

export function esPositivo(num) {
  // Tu código:

  if (Math.sign(num) === 1) {
    return "Es positivo";
  }
  if (Math.sign(num) === -1) {
    return "Es negativo";
  } else return false;
}

export function agregarSimboloExclamacion(str) {
  // Tu código:

  return str.toString() + "!";
}

export function combinarNombres(a, b) {
  // Tu código:

  return a + " " + b;
}

export function obtenerSaludo(name) {
  // Tu código:

  return "Hola " + name + "!";
}

export function obtenerAreaRectangulo(alto, ancho) {
  // Tu código:

  return alto * ancho;
}

export function retornarPerimetro(lado) {
  // Tu código:

  return lado * 4;
}

export function areaDelTriangulo(base, altura) {
  // Tu código:

  return (base * altura) / 2;
}

export function deEuroAdolar(euro) {
  //Supongamos que 1 euro equivale a 1.20 dólares.
  // Tu código:

  return euro * 1.2;
}

export function esVocal(letra) {
  // Tu código:
  const array = ["a", "e", "i", "o", "u"];
  if (letra.length > 1 || array.indexOf(letra) === -1) {
    return "Dato incorrecto";
  } else {
    return "Es vocal";
  }
}
