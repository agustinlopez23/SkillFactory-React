// No cambies los nombres de las funciones.

export function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Tu código:

  return Math.max(x, y);
}

export function mayoriaDeEdad(edad) {
  // Tu código:
  if (edad >= 18) {
    return "Allowed";
  } else {
    return "Not allowed";
  }
}

export function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico.
  // Tu código:
  if (status === 1) {
    return "Online";
  } else if (status === 2) {
    return "Away";
  } else {
    return "Offline";
  }
}

export function saludo(idioma) {
  // Tu código:

  if (idioma === "aleman") {
    return "Guten Tag!";
  } else if (idioma === "ingles") {
    return "Hello!";
  } else if (idioma === "mandarin") {
    return "Ni Hao!";
  } else if (idioma === "frances") {
    return "Hola!";
  } else {
    return "Hola!";
  }
}

export function colors(color) {
  //Usar el statement Switch.
  // Tu código:
  switch (color) {
    case "blue":
      return `This is ${color}`;
    case "red":
      return `This is ${color}`;
    case "green":
      return `This is ${color}`;
    case "orange":
      return `This is ${color}`;

    case "pink":
      return "Color not found";
    default:
      return "Color not found";
  }
}

export function esDiezOCinco(numero) {
  // Tu código:
  switch (numero) {
    case 5:
      return true;
    case 10:
      return true;
    default:
      return false;
  }
}

export function estaEnRango(numero) {
  // Tu código:
  if (numero >= 21 && numero <= 49) {
    return true;
  } else {
    return false;
  }
}

export function esEntero(numero) {
  // Tu código:
  if (Number.isInteger(numero)) {
    return true;
  } else {
    return false;
  }
}

export function fizzBuzz(numero) {
  // Tu código:
  if (numero % 5 === 0 && numero % 3 === 0) {
    return "fizzbuzz";
  }
  if (numero % 3 === 0) {
    return "fizz";
  }
  if (numero % 5 === 0) {
    return "buzz";
  } else {
    return numero;
  }
}

export function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos.
  // Tu código:
  if (Math.sign(num1) === 0 || Math.sign(num2) === 0 || Math.sign(num3) === 0) {
    return "Error";
  } else if (num1 < num3 && num2 < num3) {
    return num3 + num1;
  } else if (
    Math.sign(num1) === -1 ||
    Math.sign(num2) === -1 ||
    Math.sign(num3) === -1
  ) {
    return "Hay negativos";
  } else if (Math.max(num1, num2, num3) === num1 && Math.sign(num1) === 1) {
    return "Número 1 es mayor y positivo";
  } else {
    return false;
  }
}

export function esPrimo(numero) {
  /// Tu código:
  if (numero === 0 || numero === 1 || numero === 4) return false;

  for (let i = 2; i < numero / 2; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

export function esVerdadero(valor) {
  // Tu código:
  if (!valor) {
    return "Soy falso";
  } else {
    return "Soy verdadero";
  }
}

export function tablaDelSeis() {
  // Tu código:
  const array = [];
  for (let i = 0; i <= 10; i++) {
    array.push(6 * i);
  }
  return array;
}

export function tieneTresDigitos(numero) {
  // Tu código:
  const str = numero.toString().length;
  if (str === 3) {
    return true;
  } else {
    return false;
  }
}

export function doWhile(numero) {
  //Usar el bucle do ... while.
  let cont = 1;
  let resp = 0;
  do {
    resp = numero + 5 * cont;
    cont++;
  } while (cont <= 8);
  return resp;
}
