let botonPapel = document.getElementById('botonPapel')
let botonPiedra = document.getElementById('botonPiedra')
let botonTijera = document.getElementById('botonTijera')
let mostrarGanador = document.getElementById('ganador')
let mostrarJugador1 = document.getElementById('Jugador1')
let mostrarJugador2 = document.getElementById('Jugador2')

let piedra = 'piedra'
let papel = 'papel'
let tijera = 'tijera'
let respuesta = ['piedra','papel','tijera']

const juego = () =>{
    var Randomres = respuesta[Math.floor(respuesta.length * Math.random())]
}

const papelF = () => {
    mostrarJugador1.innerHTML = 'papel'
}
const piedraF = () => {
    mostrarJugador1.innerHTML = 'piedra'
}
const tijeraF = () => {
    mostrarJugador1.innerHTML = 'tijeras'
}


botonPapel.addEventListener('click',papelF)
botonPiedra.addEventListener('click',piedraF)
botonTijera.addEventListener('click',tijeraF)