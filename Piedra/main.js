let botonPapel = document.getElementById('botonPapel')
let botonPiedra = document.getElementById('botonPiedra')
let botonTijera = document.getElementById('botonTijera')
let mostrarGanador = document.getElementById('ganador')
let mostrarJugador1 = document.getElementById('Jugador1')
let mostrarJugador2 = document.getElementById('Jugador2')
let botonJugador = document.getElementById('botonJugar')

let piedra = 'piedra'
let papel = 'papel'
let tijera = 'tijera'
let player1

const papelF = () => {
    mostrarJugador1.innerHTML = 'papel'
    mostrarJugador2.innerHTML = 'Jugador2'
    // mostrarGanador = 'Quien gano'
    player1 = papel
}
const piedraF = () => {
    mostrarJugador1.innerHTML = 'piedra'
    mostrarJugador2.innerHTML = 'Jugador2'
    // mostrarGanador = 'Quien gano'
    player1 = piedra
}
const tijeraF = () => {
    mostrarJugador1.innerHTML = 'tijera'
    mostrarJugador2.innerHTML = 'Jugador2'
    // mostrarGanador = 'Quien gano'
    player1 = tijera
}



const juego = () => {
    console.log("El valor de player1 es : " + player1)
    let respuesta = ['piedra', 'papel', 'tijera']
    var Randomres = respuesta[Math.floor(respuesta.length * Math.random())]
    mostrarJugador2.innerHTML = Randomres
    if (player1 === Randomres) {
        console.log('Es un empate')
        mostrarGanador.innerHTML = 'Es un empate'
    }
    if (player1 === piedra && Randomres === tijera) {
        console.log('El player 1 gano')
        mostrarGanador.innerHTML = 'El player 1 gano'
    } else if (player1 === papel && Randomres === piedra) {
        console.log('El player 1  gana')
        mostrarGanador.innerHTML = 'El player 1 gano'
    } else if (player1 === tijera && Randomres === papel) {
        console.log('El player 1  gana')
        mostrarGanador.innerHTML = 'El player 1 gano'

    } else if (player1 === piedra && Randomres === papel) {
        console.log('El player 2 gano')
        mostrarGanador.innerHTML = 'El player 2 gano'

    } else if (player1 === papel && Randomres === tijera) {
        console.log('El player 2 gano')
        mostrarGanador.innerHTML = 'El player 2 gano'
    }

    else if (player1 === tijera && Randomres === piedra) {
        console.log('El player 2 gano')
        mostrarGanador.innerHTML = 'El player 2 gano'
    }

}


botonPapel.addEventListener('click', papelF)
botonPiedra.addEventListener('click', piedraF)
botonTijera.addEventListener('click', tijeraF)
botonJugador.addEventListener('click', juego)

