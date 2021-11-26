/*
1) Programa una función que cuente el número de caracteres de una cadena de texto. 
Por ejemplo: miFuncion("Hola Mundo") devolverá 10.
*/

//1) Solución
let frase = "Hola Mundo";
//console.log(frase.length);


//1) Solución 1.1
let funcion = "Hola Mundo";
//console.log(`El enunciado de la variable funcion, tiene ` + funcion.length + ` caracteres`);

//Solución Definitiva:
/*
function contarCaracteres(cadena = "") {
    if (!cadena) {
        console.warn("No ingresaste ninguna cadena.");
    }else{
        console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres.`);
    }
}

contarCaracteres();
contarCaracteres("Hola Mundo");
*/

//Función Expresada:
const contarCaracteres = (cadena = "") => 
    (!cadena) 
    ? console.warn("No ingresaste ninguna cadena")
    :console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);

//contarCaracteres();
//contarCaracteres("Hola Mundo");





//========================================================================================================================================





/*
2) Programa una función que te devuelva el texto recortado según el número de 
caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/


//2) Solución
const texto = "Hola Mundo";
let mensaje;
mensaje = texto.slice(0,4);
//console.log(mensaje);


//Solución definitiva:
const recortarTexto = (cadena = "", longitud = undefined) =>
(!cadena)
    ? console.warn("No ingresaste una cadena de texto")
    //: console.info(cadena.slice(0, longitud));
    :(longitud === undefined)
        ? console.warn("No ingresaste la longitud para recortar el texto.")
        : console.info(cadena.slice(0, longitud))

//recortarTexto("Hola Mundo", 4);
//recortarTexto("");
//recortarTexto("Hola Hola");
//recortarTexto("", 5);





//========================================================================================================================================





/* 
3) Programa una función que dada una String te devuelva un Array de textos 
separados por cierto caracter, pe. miFuncion('hola que tal', ' ') 
devolverá ['hola', 'que', 'tal'].
*/


//3) Solución
const cadenaAArreglo = (cadena = "", separador = undefined) =>
(!cadena)
    ? console.warn("No ingresaste una cadena de texto.")
    : (separador === undefined)
        ? console.warn("No ingresaste el caracter separador.")
        : console.info(cadena.split(separador));

//cadenaAArreglo("Lorem Ipsum", "");





//=========================================================================================================================================





/*4) Programa una función que repita un texto X veces, pe. 
miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

//Solución definitiva 4:
const repetirTexto = (texto = "", veces = undefined) => {
    if (!texto) return console.warn("No ingresaste un texto.");

    if (veces === undefined) return console.warn("No ingresaste el número de veces a repetir el texto.");

    if (veces === 0) return console.error("El número de veces no puede ser 0.");

    if (Math.sign(veces) === -1) return console.error("El número de veces no puede ser negativo.");

    for (let i = 1; i <= veces; i++){
        console.info(`${texto}, ${i}`);
    }
}

repetirTexto("Hola Mundo", 3);
repetirTexto("Hola Mundo", 0);
repetirTexto("Hola Mundo", -20);
repetirTexto("", -20);
repetirTexto("Hola Mundo");