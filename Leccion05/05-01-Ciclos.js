//WHILE
let contador = 0;

while(contador < 3){
    console.log(contador);
    contador++
}
console.log("Fin ciclo while");

//DO WHILE
contador = 0;

do{
    console.log(contador);
    contador++
}
while(contador < 3);
console.log("Fin ciclo do while");

//FOR

for(let i = 0; i<3; i++){
    console.log(i);
}
console.log("Fin ciclo for");

//PALABRA BREAK

for(let i = 0; i<11; i++){
    let num = (i % 2 === 0) ? i : "a";
    if(isNaN(num) === false) {
        console.log(num);
        break;
    }
}
console.log("Fin del ciclo for por break");


//PALABRA CONTINUE y ETIQUETAS
//Usar etiquetas no es buena practica, solo conocer por si se observa en codigo de otros
inicio: 
for(let i = 0 ; i<11; i++){
    if(i % 2 !== 0 ) continue inicio; //ir a la siguiente iteracion
    else console.log(i);
}

