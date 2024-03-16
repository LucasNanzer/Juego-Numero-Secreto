let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

condicionesIniciales();


function AsignarTextoElemento (elemento , texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if( numeroDeUsuario === numeroSecreto) { 
        // SI ACERTAMOS EL NUMERO PASA ESTO
        AsignarTextoElemento ('p',`Acertaste el numero en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        //SI NO ACERTAMOS EL NUMERO PASA ESTO
        if (numeroDeUsuario > numeroSecreto){
            AsignarTextoElemento('p','El numero secreto es menor');
    }      else {
             AsignarTextoElemento('p','El numero secreto es mayor');
        }  
        intentos++
        limpiarCaja();
    }
    return;
} 

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; // SE GENERA EL NUMERO ALEATORIO

    if (listaNumerosSorteados.length === numeroMaximo) {   // SI YA HAY 10 NUMEROS EMITIDOS MUESTRA EL SIGUIENTE MENSAJE
        AsignarTextoElemento('p','Ya se sortearon todos los numeros disponibles');
    } else {                                              // SI TODAVIA QUEDAN ESPACIOS DISPONIBLES EL NUEVO NUMERO GENERADO SIGUE A LA SIGUIENTE CONDICION
        console.log(numeroGenerado);    
        console.log(listaNumerosSorteados);
        if (listaNumerosSorteados.includes(numeroGenerado)) { // PERO ANTES SE VERIFICA QUE EL NUMERO NO SEA IGUAL A UNO YA EMITIDO
            return generarNumeroSecreto(); //SI EL NUMERO YA ESTA EMITIDO SE VUELVE A GENERAR LA FUNCION
        } else { 
            listaNumerosSorteados.push(numeroGenerado); //DE LO CONTRARIO, SE RETORNA EL NUEVO NUMERO Y SE AGREGA AL ARRAY
            return numeroGenerado;
        } 
    }
}

function condicionesIniciales () {
    AsignarTextoElemento('h1' , 'Juego del número secreto!');
    AsignarTextoElemento('p' , `Elige un número del 1 al ${numeroMaximo}!`);
    numeroSecreto = generarNumeroSecreto ();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}