let x = 10;
console.log(x.length);

//Metodo comun para crear objetos
let persona = {  //el objeto persona almacena la referencia en memoria
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.nombreCompleto());
console.log(persona);

//Crear objeto usando new

let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15';
persona2.tel = '55443322';

console.log(persona2.tel);

//Otras formas de acceder a propiedades
console.log(persona['apellido']);

//For in
for (nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

//Agregar, modificar y eliminar propiedades

persona.tel = '55443322';
persona.tel = '2223334455';
console.log(persona);

delete persona.tel;
console.log(persona);

//Imprimir objetos

    //Concatenar cada valor de cada propiedad
    console.log(persona.nombre + ', '+ persona.apellido );

    //for in 
    for(nombrePropiedad in persona){
        console.log(persona[nombrePropiedad]);
    }

    //object.values (convierte los valores del objeto en arreglo)
    let personaArray = Object.values(persona);
    console.log(personaArray);

    //JSON stringify
    let personaString = JSON.stringify(persona);
    console.log(personaString);