//Leer de arriba hacia abajo

//IF ELSE
let condicion = true;
if(condicion){
    console.log("Condicion verdadera")
}
else{
    console.log("Condicion falsa")
}

//EJEMPLO IF

let numero = 2.5;

if(numero === 1 ){
    console.log("1");
}
else if(numero ===2){
    console.log("2");
}
else if(numero===3){
    console.log("3")
}
else if(numero===4){
    console.log("4")
}
else{
    console.log("Numero desconocido");
}

//EJERCICIO ESTACION DEL AÑO
let mes =4;

function CalcularEstacion(mes){
    let estacion;
    if(mes < 3 || mes === 12){
        estacion = "Invierno"
    }
    else if(mes > 2 && mes < 6){
        estacion = "Primavera"
    }
    else if(mes > 5 && mes < 9){
        estacion = "Verano"
    }
    else{
        estacion = "Otoño"
    }
    
    return estacion
}

if(isNaN(mes) || mes > 12 || mes < 1){
    console.log("Valor Incorrecto")
}
else{
    let estacion = CalcularEstacion(mes);
    console.log(estacion);

}

//EJERCICIO CALCULA HORA DEL DIA

let hora =6;

function CalcularHora(hora){
    let mensaje;
    if(hora > 5 && hora < 12){
        mensaje = "Buenos días"
    }
    else if(hora > 11 && hora < 19){
        mensaje = "Buenos tardes"
    }
    else if(hora > 18 && hora < 25){
        mensaje = "Buenos tardes"
    }
    else{
        mensaje = "Durmiendo"
    }
    return mensaje;
}

if(isNaN(hora) || hora > 24 || hora < 0){
    console.log("Valor Incorrecto")
}
else{
    hora = Math.floor(hora);
    let mensaje = CalcularHora(hora);
    console.log(mensaje);
}


//SWITCH

let _numero = 3;

let numeroTexto = "Valor desconocido";

switch(_numero){
    case 1:
        numeroTexto = "Numero uno";
        break;  //si no se coloca break se siguen evaluando los siguientes casos hasta encontrar un break
    case 2:
        numeroTexto = "Numero dos";
        break;
    case 3:
        numeroTexto = "Numero tres";
        break;
    case 4:
        numeroTexto = "Numero cuatro";
        break;
    default:
        numeroTexto = "Caso no encontrado"
        //aqui no es necesario break porque es la ultima sentencia del switch
}

console.log(numeroTexto)

//EJERCICIO ESTACION DEL AÑO CON SWITCH

let _mes = 8;
let _estacion = "Estacion desconocida";

//switch utiliza comparacion estricta (requiere el mismo tipo de dato)
//switch permite usar cadenas
switch(_mes){
    case 1: case 2: case 12:
        _estacion = 'Invierno';
        break;
    case 3: case 4: case 5:
        _estacion = 'Primavera';
        break;
    case 6: case 7: case 8:
        _estacion = "Verano";
        break;
    case 9: case 10: case 11:
        _estacion = "Otoño"
        break;
    default:
        _estacion = "No encontrada"
}

console.log(_estacion);


