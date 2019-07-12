let titulo = document.getElementById('titulo')
// console.log(h1)
let subtitulo = document.getElementById('subtitulo')
// titulo.innerHTML = 'Soy el titulo cambiado'
let boton = document.getElementById('boton')
let input = document.getElementById('input')
let mostrar = document.getElementById('mostrar')


const cambiar = () =>{
    titulo.innerHTML = 'Soy el titulo cambiado'
    subtitulo.innerHTML = 'Soy el jefe xd'
}

const mostrarInput = () =>{
    let texto = input.value
    mostrar.innerHTML = texto 
}


boton.addEventListener('click',cambiar)
boton.addEventListener('click',mostrarInput)






