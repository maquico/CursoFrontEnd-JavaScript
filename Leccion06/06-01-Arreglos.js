//ARREGLOS

//Forma vieja para declarar arreglos, no utilizada
let _autos = new Array('BMW', 'Mercedes Benz', 'Volvo');

//Forma actual de declarar arrays
const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos);

//Acceder a los valores del arreglo a traves de indices
console.log(autos[0]);
console.log(autos[2]);

//Recorrer un arreglo
for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i]);
}

//Modificar elementos de un array
autos[1] = 'MercedesBenz';
console.log(autos[1]);

//Agregar elementos a un array
autos.push('Audi');
console.log(autos);

//Otra forma de agregar elementos a un array
console.log(autos.length);
autos[autos.length] = 'Cadillac';
console.log(autos);

//Agregar elemento a un array dejando un hueco, no recomendado
autos[6] = 'Porshe';
console.log(autos);

//Verificar que trabajamos con un arreglo
console.log(typeof autos); //por defecto JavaScript trata los arreglos como objetos
console.log(Array.isArray(autos));
console.log(autos instanceof Array);