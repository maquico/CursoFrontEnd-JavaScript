//FUNCIONES

//Hoisting (nos permite llamar la funcion antes de su declaracion, pues internamente coloca al inicio la declaracion de la funcion)
miFuncion(3,3);

//Declaracion de la funcion
function miFuncion(a, b){
    console.log("Suma: " + (a+b));
}

//Llamando la funcion
miFuncion(1, 2);
miFuncion(2, 3);