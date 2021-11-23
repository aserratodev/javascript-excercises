import saludar, {Saludar, PI, usuario} from "./constantes.js";
import {aritmetica as arit} from "./aritmetica.js";

console.log("Archivo módulos.js");
console.log(PI, usuario);
//console.log(aritmetica.restar(5, 7));
console.log(arit.sumar(5, 5));
saludar();
let saludo = new Saludar();
saludo;