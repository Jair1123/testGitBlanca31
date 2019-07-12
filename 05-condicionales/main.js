// if(*condicion){
//     se ejecuta si se cumple el if
// }else{
//     si no se compila el primer bloque se compila este de aqui 
// }
// let condicion = true
// if (condicion === true){
//     console.log("Se ejecuto el if :D")
// }else{
//     console.log("No se ejecuto el if :C")
// }

// // < > === este es identicos no es igual a == que solo es igual

// if('computadora'=== 'Computadora'){
//     console.log('Son identicos')
// }else{
//     console.log('No son identicos ;(')
// }

// if('10'== 10){
//     console.log('Son identicos')
// }else{
//     console.log(' NO son iguales')
// }

// if('10'=== 10){
//     console.log('Son identicos')
// }else{
//     console.log('NO son iguales')
// }

// let edad = prompt('Cual es tu edad?')
// Number(edad)
// if (edad >= 18  ){
//     console.log('Puedes entrar al bar')
// }else{
//     console.log('NO puedes entrar al bar')
// }

// let edad = prompt('Ingresa tu edad')
// if(edad < 16){
//     console.log('No puedes sacar tu licencia')
// }else if(edad < 18 && edad >= 16 ){
//     console.log('Puedes sacar un permiso')
// }else{
//     console.log('Puedes conducir')
// }

// let numero = prompt('Introduce un numero')
// Number(numero)
// if(numero % 2 === 0){
//     console.log('Es un numero par: '+ numero)
// }else{
//     console.log('Es un numero impar: '+ numero)
// }


//Piedra papel o tireja
let player1 = prompt('Introduce piedra, papel o tijera')
// let player2 = prompt('Introduce piedra, papel o tijera')
let piedra = 'piedra'
let papel = 'papel'
let tijera = 'tijera'
let respuesta = ['piedra','papel','tijera']
var Randomres = respuesta[Math.floor(respuesta.length * Math.random())]
// console.log(Randomres)

if(player1 === Randomres){
    console.log('Es un empate')
}
if(player1 === piedra && Randomres === tijera){
    console.log('El player 1 gano')
}else if(player1 === papel && Randomres === piedra ){
    console.log('El player 1  gana')
}else if(player1 === tijera && Randomres === papel){
    console.log('El player 1  gana')
}else{
    console.log('El player 2 gano')
}
console.log('El player 2 escogio: '+Randomres)

