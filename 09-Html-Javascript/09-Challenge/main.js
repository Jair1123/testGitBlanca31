// odigo jair 

// let boton = document.getElementById('boton')
// let input1 = document.getElementById('input1')
// let input2 = document.getElementById('input2')
// let input3 = document.getElementById('input3')
// let mostrar1 = document.getElementById('mostrar1')
// let mostrar2 = document.getElementById('mostrar2')
// let mostrar3 = document.getElementById('mostrar3')


// const mostrarInput1 = () =>{
//     let texto = input1.value
//     mostrar1.innerHTML = 'Nombre: ' + texto 
// }
// const mostrarInput2 = () =>{
//     let texto = input2.value
//     mostrar2.innerHTML = 'Numero telefonico: ' + texto 
// }
// const mostrarInput3 = () =>{
//     let texto = input3.value
//     let texto1 = texto.toLowerCase()
//     if(texto1 == 'sin'){
//         mostrar3.innerHTML = ':)' 
//     }else{
//         mostrar3.innerHTML = ':('
//     }
     
    
// }

// const mostrar = () =>{
//     mostrarInput1()
//     mostrarInput2()
//     mostrarInput3()
// }


// boton.addEventListener('click',mostrar)
// // boton.addEventListener('click',mostrarInput2)
// // boton.addEventListener('click',mostrarInput3)

//Inputs
let inputNombre = document.getElementById('inputNombre')
let inputTelefono = document.getElementById('inputTelefono')
let inputPizza = document.getElementById('inputPizza')
//etiqueta p
let mostrarNombre = document.getElementById('nombre')
let mostrarTelefono = document.getElementById('telefono')
let mostrarPizza = document.getElementById('pizza')
//boton
let boton = document.getElementById('boton')
let card = document.getElementById('card')

const accion = () => {

    let textoNombre = inputNombre.value
    let textoTelefono = inputTelefono.value
    let textoPizza =  inputPizza.value
    let minPizza = textoPizza.toLowerCase()


    mostrarNombre.innerHTML = 'Nombre: ' + textoNombre
    mostrarTelefono.innerHTML ='Telefono: '+ textoTelefono


    if(minPizza === 'sin'){
        mostrarPizza.innerHTML = 'Sin piña :)'
    }else if(minPizza === 'sin'){
        mostrarPizza.innerHTML = 'Con piña :('
    }else{
        mostrarPizza.innerHTML = 'NO respondiste bien la pregunta'
    }
    card.classList.remove("custom-desaparecer")

}
// const aparecer=()=>{
    
// }

boton.addEventListener('click', accion)
// boton.addEventListener('click', aparecer)