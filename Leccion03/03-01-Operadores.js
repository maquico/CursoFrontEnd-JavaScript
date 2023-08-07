//OPERADORES ARITMETICOS

//SUMA
let a = 3, b = 2;
let z = a + b;
console.log("Resultado de la suma: " + z);

//RESTA
z = a - b;
console.log("Resultado de la resta: " + z);

//MULTIPLICACION
z = a * b;
console.log("Resultado de la multiplicacion: " + z);

//DIVISION
z = a / b;
console.log("Resultado de la division: " + z);

//RESIDUO
z = a % b;
console.log("Resultado del residuo: " + z);

//EXPONENTE
z = a ** b;
console.log("Resultado del exponente: " + z);

//OPERADORES DE INCREMENTO Y DECREMENTO

    //INCREMENTO
        //PRE-INCREMENTO (incrementa el valor directamente)
        z = ++a;
        console.log( a );
        console.log( z);
        //POST-INCREMENTO (incrementa el valor la proxima vez que se use la variable)
        z = b++;
        console.log(b);
        console.log(z);

    //DECREMENTO
        //PRE-DECREMENTO (decrementa el valor directamente)
        z = --a;
        console.log( a );
        console.log( z);
        //POST-DECREMENTO (decrementa el valor la proxima vez que se use la variable)
        z = b--;
        console.log(b);
        console.log(z);