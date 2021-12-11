/*
12) Programa una función que determine si un número es primo 
(aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) 
devolverá true.
*/
const numeroPrimo = (numero = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste un número");

    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un número`);

    if(numero === 0) return console.error("El número no puede ser 0");

    if(numero === 1) return console.error("El número no puede ser 1");

    if(Math.sign(numero) === -1) return console.error("El número NO puede ser Negativo");

let divisible = false;

for(let i = 2; i < numero; i++) {
    if((numero % i) === 0) {
        divisible = true;
        break;
    }
}

    return (divisible)
    ? console.log(`El número ${numero} NO es primo.`)
    : console.log(`El número ${numero} SÍ es primo.`);
}

//numeroPrimo();
//numeroPrimo("320");
//numeroPrimo(true);
//numeroPrimo(0);
//numeroPrimo(1);
//numeroPrimo(-13);
//numeroPrimo(13);
//numeroPrimo(200);

/*
13) Programa una función que determine si un número es par o impar, 
pe. miFuncion(29) devolverá Impar.
*/

const numeroParImpar = (numero = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste un número");

    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un número`);

    return ((numero % 2) === 0)
    ? console.info(`El número ${numero} es Par`)
    : console.info(`El número ${numero} es Impar`)
}

//numeroParImpar();
//numeroParImpar("23");
//numeroParImpar(-398);
//numeroParImpar(3);
//numeroParImpar(4);


/*
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
pe. miFuncion(0,"C") devolverá 32°F.
*/

const convertirGrados = (grados = undefined, unidad = undefined) => {
    if(grados === undefined) return console.warn("No ingresaste grados a convertir");

    if(typeof grados !== "number") return console.error(`El valor "${grados}" ingresado, NO es un número`);

    if (unidad === undefined) return console.warn("No ingresaste el tipo de grado a convertir");

    if (typeof unidad !== "string") return console.error(`El valor "${unidad}" ingresado, NO es una cadena de texto`);

    if (unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("El valor de unidad no reconocido");

    if (unidad === "C") {
        return console.info(`${grados}°C = ${Math.round((grados * (9 / 5)) + 32)}°F`);
    }else if (unidad === "F") {
        return console.info(`${grados}°F = ${Math.round(((grados - 32) * (5 / 9)))}°C`);
    }

    console.info("Funcionó!!!");
}

convertirGrados();
convertirGrados("2");
convertirGrados(2);
convertirGrados(2, true);
convertirGrados(2, "Hola");
convertirGrados(2, "E");
convertirGrados(0, "C");
convertirGrados(100, "C");
convertirGrados(32, "F");
convertirGrados(100, "F");