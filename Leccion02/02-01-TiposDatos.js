// Declarar variables sin var, let o const es una mala practica
// Declarar variables con var es una mala practica
// Las variables son case sensitive
let nombreCompleto = 'Carlos Lara';
console.log( nombreCompleto );
let nombrecompleto = 'Juan Perez';
console.log( nombrecompleto );

// Se pueden definir variables empezando con _, $, letras minusculas o mayusculas
// No se pueden definir variables empezando con numeros
// No se pueden definir variables con palabras reservadas
let _variable;
let $variable;
let v1ariable;
let Variable;

//Declarar multiples variables en una sola linea
let x, y;
x = 10, y = 20;
let z = x + y;
console.log( z );


// CONCATENACION DE CADENAS
// var nombre = 'Juan';
// var apellido = 'Perez';

// var nombreCompleto = nombre + ' ' + apellido;
// console.log(nombreCompleto);

// var nombreCompleto2 = 'Carlos' + ' ' + 'Lara';
// console.log(nombreCompleto2);

// var x = nombre + 219;
// console.log(x);

// x = nombre + (2+4);
// console.log(x);

// x = 2 + 4 + nombre;
// console.log(x);


// /*
// EJEMPLOS DE TIPOS DE DATOS EN JAVASCRIPT
// */

// //Tipo de dato string
// var nombre = "Carlos";
// console.log(typeof nombre);

// nombre = 10;
// console.log(typeof nombre);

// //Tipo de dato numerico
// var numero = 1000;
// console.log(numero);

// //Tipo de dato object
// var objeto = {
//     nombre: "Juan",
//     apellido: "Perez",
//     telefono: "123456789"
// };
// console.log(typeof objeto);

// //Tipo de dato boolean (true, false)
// var bandera = false;
// console.log(typeof bandera);

// //Tipo de dato function
// function miFuncion(){}
// console.log(typeof miFuncion)

// //Tipo de dato Symbol
// var simbolo = Symbol("mi simbolo");
// console.log(typeof simbolo);

// //Tipo clase (es una function)
// class Persona{
//     constructor(nombre, apellido){
//         this.nombre = nombre;
//         this.apellido = apellido;
//     }
// }
// console.log(typeof Persona)

// //Tipo undefined
// var x;
// console.log(typeof x);

// x = undefined;
// console.log(x);

// //null = ausencia de valor
// var y = null;
// console.log(typeof y);

// //arrays
// var autos = ['BMW', 'Audi', 'Volvo'];
// console.log(autos);
// console.log(typeof autos);

// var z = '';
// console.log(z);
// console.log(typeof z);