//EJERCICIO NUMERO PAR

let numero = 10;
if(numero % 2 == 0){
    console.log("El numero es par");
}else{
    console.log("El numero es impar");
}

//EJERCICIO MAYOR DE EDAD

let edad = 20, adulto = 18;

if(edad >= adulto){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");
}

// //OPERADORES RELACIONALES
// let a = 3, b = 3, c = "3";

// let z = a < b;
// console.log(z);

// z = a <= b;
// console.log(z);

// z = a > b;
// console.log(z);

// z = a >= b;
// console.log(z);

////OPERADORES DE COMPARACION

// let a = 3, b = 2, c = "3";

// let z = a == c; //en este caso se revisa sin importar el tipo de dato (si tienen tipos diferentes hace la conversion)
// console.log(z);

// z = a === c; //en este caso se revisa tanto que los valores sean iguales como que el tipo de dato sea el mismo
// console.log(z);

// z = a != c; //sin importar el tipo
// console.log(z);

// z = a !== c; //revisa el tipo tambien
// console.log(z);

// //OPERADORES DE ASIGNACION
// let a = 1;

// a += 3; //a = a + 3
// console.log(a);

// a-= 2; //a = a - 2
// console.log(a);

// a *= 2; //a = a * 2
// console.log(a);

// a /= 2; //a = a / 2
// console.log(a);

// a %= 2; //a = a % 2
// console.log(a);

// a**= 2; //a = a ** 2
// console.log(a);

// //ORDEN DE OPERACIONES

// let a = 3, b = 2, c = 1,  d = 4;

// let z = a * b + c;
// console.log(z);

// z = c + a * b;
// console.log(z);

// z = a*b +  c/d;
// console.log(z);

// z = c + a * b / d;
// console.log(z);

// z = (c + a) * b / c;
// console.log(z);

// //OPERADORES ARITMETICOS

// //SUMA
// let a = 3, b = 2;
// let z = a + b;
// console.log("Resultado de la suma: " + z);

// //RESTA
// z = a - b;
// console.log("Resultado de la resta: " + z);

// //MULTIPLICACION
// z = a * b;
// console.log("Resultado de la multiplicacion: " + z);

// //DIVISION
// z = a / b;
// console.log("Resultado de la division: " + z);

// //RESIDUO
// z = a % b;
// console.log("Resultado del residuo: " + z);

// //EXPONENTE
// z = a ** b;
// console.log("Resultado del exponente: " + z);

// //OPERADORES DE INCREMENTO Y DECREMENTO

//     //INCREMENTO
//         //PRE-INCREMENTO (incrementa el valor directamente)
//         z = ++a;
//         console.log( a );
//         console.log( z);
//         //POST-INCREMENTO (incrementa el valor la proxima vez que se use la variable)
//         z = b++;
//         console.log(b);
//         console.log(z);

//     //DECREMENTO
//         //PRE-DECREMENTO (decrementa el valor directamente)
//         z = --a;
//         console.log( a );
//         console.log( z);
//         //POST-DECREMENTO (decrementa el valor la proxima vez que se use la variable)
//         z = b--;
//         console.log(b);
//         console.log(z);