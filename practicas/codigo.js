// 1 sera piedra 2 sera papel 3 tijera
function aleatorio(min, max){
    return Math.floor( Math.random() * (max - min + 1) +min)
}          
        
function eleccion(jugada){        
    let resultado = ""       
    if(jugada == 1 ){    
        resultado = "Piedra 👊🏻"            
    } else if(jugada == 2){        
        resultado = "Papel 🤚🏻"           
    }else if(jugada == 3){        
        resultado = "Tijera ✌🏻"
    } else {                
        resultado = "Mal elegido"
    } 
    return resultado    
}        

let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0  

while(triunfos < 3 && perdidas < 3){
    pc = aleatorio(1, 3)
    jugador = prompt("Elige : 1 piedra, 2 papel , 3 tijera")
//alert("Elige jugador"+jugador)
        
    alert("PC elige: "+ eleccion(pc))
    alert("Tu eligers: "+ eleccion(jugador))

//COMBATE
    if(pc == jugador){
        alert("EMPATE")
    } else if(jugador == 1 && pc == 3){
        alert("GANASTE")
//triunfos += 1;
        triunfos = triunfos + 1
    } else if( jugador == 2 && pc == 1){
        alert("GANASTE")
        triunfos = triunfos + 1
    } else if(jugador == 3 && pc == 2){
        alert("GANASTE")
        triunfos = triunfos + 1
    } else {
        alert("PERDISTE-----> YOU SUCK 🤣")
        perdidas = perdidas + 1
    }
}

       
alert("Ganaste "+triunfos+" veces. Perdiste "+perdidas+" veces.")
 //Math.round(Math.random() * (max - min) + min)                      