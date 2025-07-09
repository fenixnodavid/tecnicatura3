let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let botonPersonajeJugador = document.getElementById('boton-personaje');
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = "none"

    document.getElementById("reglas-del-juego").style.display = "none";

    document.getElementById('boton-reglas').addEventListener('click', mostrarReglas);
    document.getElementById('boton-jugar').addEventListener('click', seleccionarPersonajeJugador);

    let botonPunio = document.getElementById('boton-punio') //ahora creanos un escuchador de eventos
    botonPunio.addEventListener('click', ataquePunio)
    let botonPatada = document.getElementById('boton-patada')  
    botonPatada.addEventListener('click', ataquePatada)
    let botonBarrida = document.getElementById('boton-barrida')  
    botonBarrida.addEventListener('click', ataqueBarrida)

    //Creamos una nueva variable
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)

}

function mostrarReglas(){
    document.getElementById("reglas-del-juego").style.display = "block";
    
}

function seleccionarPersonajeJugador(){
    let inputZuko = document.getElementById('zuko')
    let inputKatara = document.getElementById('katara')
    let inputAang = document.getElementById('aang')
    let inputToph = document.getElementById('toph')
    let spanPersonajeJugador = document.getElementById('personaje-jugador')

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block' //mostramos
    let sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje')
    sectionSeleccionarPersonaje.style.display = 'none' //ocultamos

    document.getElementById('reglas-del-juego').style.display = "none";

     
    if(inputZuko.checked){
        spanPersonajeJugador.innerHTML ='Zuko'
    }else if(inputKatara.checked){
        spanPersonajeJugador.innerHTML ='Katara'
    }else if(inputAang.checked){
        spanPersonajeJugador.innerHTML ='Aang'
    }else if(inputToph.checked){
        spanPersonajeJugador.innerHTML ='Toph'
    }else{
        //Mostrar un mensaje temporal en la pantalla si no se ha seleccionado un personaje
        let mensajeError = document.createElement("p")
        mensajeError.innerHTML = 'Selecciona un personaje'
        mensajeError.style.color = "red"

        let seccionSeleccionarPersonaje = document.getElementById("seleccionar-personaje")
        seccionSeleccionarPersonaje.appendChild(mensajeError)

        //Eliminar el mensaje error después de 2 segundos y reiniciar el juego
        setTimeout(() => {
            seccionSeleccionarPersonaje.removeChild(mensajeError)
        }, 2000)
        reiniciarJuego()
        return
        
    } 
    seleccionarPersonajeEnemigo()              
}

function seleccionarPersonajeEnemigo(){  //esta variable va dentro de seleccionarPersonaje
    let personajeAleatorio = aleatorio(1, 4)  //a continuacion creamos la variable
    let spanPersonajeEnemigo = document.getElementById('personaje-enemigo')

    //comenzamos con la logica
    if(personajeAleatorio == 1){
        spanPersonajeEnemigo.innerHTML = 'Zuko'
    } else if(personajeAleatorio == 2){
        spanPersonajeEnemigo.innerHTML = 'Katara'
    } else if(personajeAleatorio == 3){
        spanPersonajeEnemigo.innerHTML = 'Aang'
    } else {
        spanPersonajeEnemigo.innerHTML = 'Toph'
    }
}

function ataquePunio(){  //Modificamos la variable global ataqueJugador
    ataqueJugador = 'Punio'
    ataqueAleatorioEnemigo()
}

function ataquePatada(){ //Modificamos la variable global ataqueJugador
    ataqueJugador = 'Patada'
    ataqueAleatorioEnemigo()
}

function ataqueBarrida(){ //Modificamos la variable global ataqueJugador
    ataqueJugador = 'Barrida'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){ //Ahora ocupando la variable global nueva le decimos el ataque t necesitamos la funcion aleatoria
    let ataqueAleatorio = aleatorio(1, 3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'Punio'
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'Patada'
    } else {
        ataqueEnemigo = 'Barrida'
    }
    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    //COMBATE
    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
        
    } else if(ataqueJugador == 'Punio' && ataqueEnemigo == 'Barrida'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if( ataqueJugador == 'Patada' && ataqueEnemigo == 'Punio'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Barrida' && ataqueEnemigo == 'Patada'){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    //Revisar vidas
    revisarVidas()

}

function revisarVidas(){
    if(vidasEnemigo == 0){
        //Ganamos
        crearMensajeFinal("GANASTE LA BATALLA. NO DEJES DE ENTRENAR PARA TU PROXIMO COMBATE.")
    } else if(vidasJugador == 0){
         crearMensajeFinal("PERDISTE, ENTRANA MAS TU ELEMENTO... TE ESTARE ESPERANDO")

    }
}

function crearMensajeFinal(resultado){
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = "block"

    let sectionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')

    parrafo.innerHTML = resultado

    sectionMensaje.appendChild(parrafo)
    let botonPunio = document.getElementById('boton-punio') //ahora creanos un ecuhador de eventos
    botonPunio.disabled = true
    let botonPatada = document.getElementById('boton-patada')  
    botonPatada.disabled = true
    let botonBarrida = document.getElementById('boton-barrida')  
    botonBarrida.disabled = true

}

function crearMensaje(resultado){
    let sectionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')

    parrafo.innerHTML = 'Tu personaje ataco con ' + ataqueJugador + ', el personaje del enemigo ataco con ' + ataqueEnemigo + ' ' + resultado

    sectionMensaje.appendChild(parrafo)

}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor( Math.random() * (max - min + 1) +min)
}   

window.addEventListener('load', iniciarJuego)