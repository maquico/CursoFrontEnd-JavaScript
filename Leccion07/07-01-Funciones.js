//FUNCIONES

//Hoisting (nos permite llamar la funcion antes de su declaracion, pues internamente coloca al inicio la declaracion de la funcion)
miFuncion(3,3);

//Declaracion de la funcion

 // function miFuncion(a, b){
 //     console.log("Suma: " + (a+b));
 // }

function miFuncion(a= 4, b= 5){ //Valores por defecto
    console.log(arguments.length); //Debemos estar dentro de la funcion para acceder a los atributos de la funcion
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + arguments[2];
}
//si no agregamos return javascript automaticamente agrega return undefined

//Llamando la funcion
let resultado = miFuncion(1, 2, 7);
console.log(resultado);

resultado = miFuncion(2, 3);
console.log(resultado);

//Declaracion funcion de tipo expresion
let sumar = function(a, b){return a + b};

resultado = sumar(1, 2);
console.log(resultado);

//Funciones Self Invoking (se ejecutan inmediatamente despues de ser definidas)
(function(a, b){
    console.log("Ejecutando la funcion: " + (a + b));
})(3, 4);

//Funcion como objeto
console.log(typeof miFuncion); 

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

//Funcion tipo flecha (arrow function)

const sumarFuncionTipoFlecha = (a, b) => a + b;
resultado = sumarFuncionTipoFlecha(3, 5);
console.log(resultado);

//Parametros: es la lista de variables que definimos al crear una funcion
//Argumentos: es la lista de valores que enviamos a la funcion al momento de llamarla

//Si llamamos una funcion si especificar un argumento se envian como undefined
//Si enviamos mas argumentos que parametros, los argumentos sobrantes se ignoran
//Si existen valores por defecto, estos se usan cuando no se envian argumentos


//Funcion sin parametros
let _resultado = sumarTodo(5, 4, 13, 10, 9, 10, 11, 3);
console.log(_resultado);

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}

//Tipo primitivo  (no tienen propiedades ni metodos asociados)
let x = 10;

function cambiarValor(a){
    a = 20;
}

//Paso por valor en funciones
cambiarValor(x);
console.log(x);
// console.log(a); // a is not defined
2
//Paso por referencia

//Para crear objetos es buena practica usar const
const persona = {
    nombre: "Juan",
    apellido: "Perez"
}

function cambiarValorObjeto (p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara';
}

cambiarValorObjeto(persona);
console.log(persona);


