/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/

const aleatorio = () => console.info(Math.round((Math.random() * 100) + 500));

aleatorio();


/*10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
*/

const capicua = (numero = 0) => {
    if (!numero) return console.warn("No has ingresado un número");

    if (typeof numero !== "number") return console.error(`El valor ${numero} ingresado, NO es un número`);

    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");

    return (numero === alReves)
    ? console.info(`Sí es capicúa, Nro original ${numero}, Nro al revés ${alReves}`)
    : console.info(`No es capicúa, Nro original ${numero}, Nro al revés ${alReves}`)
}

//capicua();
//capicua("19");
//capicua({});
//capicua(2000);
//capicua(2002);
//capicua(18.99);
//capicua(212.212);

/*
11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, se define como el producto de todos 
los números enteros positivos desde 1 hasta n), 
pe. miFuncion(5) devolverá 120.
*/

const factorial = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un Número.");

    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO ingresaste un Número.`);

    if (numero === 0) return console.error("El número NO puede ser 0");

    if (Math.sign(numero) === -1) return console.error("El Nro NO puede ser negativo.");

    let factorial = 1;

    for (let i = numero; i > 1; i--) {
        factorial *= i;
    }

    return console.info(`El factorial ${numero} es ${factorial}`);
}

factorial();
factorial("5");
factorial(0);
factorial(-5);
factorial(5);