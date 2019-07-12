// let nombre = prompt('Ingresa tu nombre:')
// let cumpleaños = prompt('Cual es el dia de tu cumpleaños')
// let correo = prompt('Cual es tu correo')
// console.log('Tu nombre es : '+ nombre)
// console.log('Tu fecha de cumpleaños es : '+ cumpleaños)
// console.log('Tu correo es : '+ correo)

// let año = prompt('Ingresa el año en que naciste')
// Number(año) se necesita cambiar a number 
// let resta = 2019 - año

// console.log('Tu edad es: '+ resta +' '+'años')

//Variables especiales de tipo arreglo
// let arreglo = ['perrito', 'tortuga', 'hipopotamo']
// let persona = ['Ricardo','jair@b.com','5564221801']
// console.log(persona[0])
//Crear un arreglo de 10 elemento 
let animales = ['perro', 'gato', 'tortuga', 'elefante', 'jirafa', 'tigre', 'koala', 'tigre', 'leon', 'delfin']
// console.log('El animal en el numero 5 es :'+ animales[4])
// console.log('El animal en el numero 9 es :'+ animales[8])
// console.log(animales[5],animales[9])
//  Cambio de valor en el arreglo
// animales[0]='gato'
// animales[10]='perro'
//Agrega al final un elemento 
//animales.pop()
//animales.push('pajaro','dragon','nutria')

//Quita el elemento final 

//animales.slice()
//let numero = [1,2,3,4,5,6,7,8,9,10]
//console.log(numero)
//numero.splice(5,1) //le pides que te borre el numero del arreglo (5,2) y cuantos elementos quieres borrar
// console.log(numero)

// let objeto = {
//     nombre:'Jair',
//     direccion:'Pino',
//     musica:'Kpop',
//     telefono:'5564221801',
//     libros:['hola','codigo'],
//     peliculas:{
//         terror:'Anabelle',
//         accion:['Rapido','Protect']
//     }

// }
// console.log(objeto.direccion)
// console.log(objeto.libros[1])
// console.log(objeto.peliculas.accion[0])

let persona = {
    nombre: 'Jair Hernandez',
    direccion:'Pino',
    correo:'jair@hotmail.com',
    telefono:'5564221801',
    Viajes:{
        internacionales:['cuba','alemania','brazil'],
        nacionales:['cancun','merida','guadalajara']
    },
    musica:['rap','pop','metal'],
    peliculas:{
        Generos:{
            terror:['anabelle','eso'],
            comedia:['mmm','oooo'],
            accion:['rapido','lento','furioso']
        }
    }
}
console.log('La ultima pelicula del genero terror es: '+persona.peliculas.Generos.terror[1])
console.log('El ultimo viaje nacional es: '+ persona.Viajes.nacionales[0])
console.log('La ultima musica agregada es: '+persona.musica[2])