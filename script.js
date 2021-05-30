console.log("test")

// Metodo Map

// 1.
// Tenemos un array en una variable numeros con números al azar.
// Usá la función map para crear un nuevo array incrementando cada valor del array en 10, y 
// guardarlo en la variable numerosMasDiez
// Mostrar por consola el array original y el nuevo

const numeros = [1, 2, 3, 4, 5];

let numerosMasDiez = numeros.map((elemento) => {
    return elemento + 10
})

console.log(numerosMasDiez)



// 2
// Tenemos un array en una variable numeros con números al azar.
// Usar la función map para crear un nuevo array multiplicando cada valor del array por 2, 
// y guardarlo en la variable dobles
// Mostrar por consola el array original y el nuevo
const numerosAlAzar = [3, 7, 13, 99];


let dobles = numerosAlAzar.map((elemento) => {
    return elemento*2
})

console.log(numerosAlAzar)
console.log(dobles)



// 3.
// Tenemos un array en una variable frases con frases al azar.
// Usar la función map para crear un nuevo array donde cada frase empiece y termine con signo de exclamación.
// Mostrar por consola el array original y el nuevo

const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

let frasesExclamadas = frases.map((exclamacion) => {
    return "¡" + exclamacion + "!"
})


console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]


// 4
// Tenemos un array en una variable libros con libros para leer sobre Javascript.
// Usar la función map para crear un nuevo array donde cada titulo de los libros esté encerrado en una etiqueta <li></li>.
// Mostrar por consola el array nuevo, encerrándolo entre <ul></ul>

const librosDeJS = [
  'JavaScript for Kids: A Playful Introduction to Programming',
  'Composing Software',
  'Eloquent JavaScript: A Modern Introduction to Programming',
  'JavaScript: The Good Parts',
  'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
  'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
  'JavaScript: The Definitive Guide',
  'You Don’t Know JS',
  'JavaScript Allongé: The Six Edition'
];


// el resultado final debería ser
// <ul><li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li></ul>

let listaDeLibrosDeJS = librosDeJS.map((libros)=> {
   
    return `<li>${libros}</li>`
}) 


console.log(`<ul>${listaDeLibrosDeJS}</ul>`)


// 5
// Tenemos un array en una variable frases con frases al azar.
// Usar la función map para crear un nuevo array que contenga la longitud de cada palabra.
// Mostrar por consola el array original y el nuevo.
// const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

// codear acá la solución del ejercicio


// console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
// console.log(longitudes); // [ 17, 18, 16 ]




// 6
// Tenemos un array en una variable playlist con una lista de canciones de un disco.
// Usar la función map para agregar a cada título de la canción el número de posición en la que está dentro del array.
const playlist = ['Everlong', 'The Pretender', 'Learn to Fly'];

let titulo = playlist.map((cancion, posicion) => {
 return `${posicion} - ${cancion}`
})

console.log(titulo)

// RESULTADO ESPERADO
// [ '0 - Everlong', '1 - The Pretender', '2 - Learn to Fly' ]




// 7
// Tenemos un array en una variable costos con números que representan costos de diferentes productos.
// Completar el siguiente código para llegar al resultado esperado
// A un costo primero se le agrega la ganancia y después el IVA
const costos = [ 12.5, 56, 98, 45.75 ];

// const agregarIVA = function (costo) {
//   return costo * 1.21;
// }

// const sumarGanancia = function (costo) {
//   return costo * 1.5;
// }

// // codear acá la solución del ejercicio

// let preciosFinales = costos.map((conIva))


// console.log(preciosFinales);
// // deberia mostrar
// // [ 22.6875, 101.64, 177.87, 83.03625 ]







// 8
// Tenemos un array en una variable costos con números que representan costos de diferentes productos.
// También tenemos un array en una variable productos con los nombres de cada producto.
// Completar el siguiente código para llegar al resultado esperado
// A un costo primero se le agrega la ganancia y después el IVA
// El nombre de un producto en una posición, se corresponde con el precio que está en la misma posición. Por ejemplo: el producto que está en la posición 1 tiene un costo igual al elemento en la posición 1 del array costos
// const productos = [ 'celular', 'notebook', 'monitor' ];
// const costos = [ 12.5, 56, 98 ];

// const agregarIVA = function (costo) {
//   return costo * 1.21;
// }

// const sumarGanancia = function (costo) {
//   return costo * 1.5;
// }

// // codear acá la solución del ejercicio


// console.log(preciosFinales);
// // deberia mostrar
// // [ "celular 22.6875", "notebook 101.64", "monitor 177.87" ]


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FILTER

// 1
// Tenemos un array en una variable costos con números que representan costos de diferentes productos.
// Usando filter, crear un nuevo array con los precios más caros (mayores a 50) y guardarlo en la variable losMasCaros
// Mostrar el array original y el filtrado

const costosos = [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ];
// // codear acá la solución del ejercicio


let losMasCaros = costosos.filter((caros) => {
    return caros  > 50
})

console.log(costosos);
console.log(losMasCaros);

// // deberia mostrar
// // [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]
// // [ 53, 99, 68, 54, 97, 90, 92, 75, 86 ]



// 2
// Tenemos un array en una variable numeros con números al azar.
// También tenemos dos arrays vacios en las dos variables numerosPares y numerosImpares.
// Utilizando filter crear un nuevo array con todos los números pares y guardalo en la variable numerosPares
// Utilizando filter crear un nuevo array con todos los números impares y guardalo en la variable numerosImpares 
const masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];

let numerosPares = masNumeros.filter((pares) => {
    return pares%2 === 0
})


let numerosImpares = masNumeros.filter((impares) => {
    return impares %2 === 1
})



console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
// // deberias tener como resultado
// // pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// // impares: [43, 11, 37, 29, 9, 3, 37, 25]


// 3
// Tenemos un array en una variable mix con varios elementos, de distintos tipos de datos.
// Usando filter, crear un nuevo array con todos los elementos que sean strings y guardalo en la variable soloStrings.
// Ayuda: para saber si algo es un string en javascript, podés usar typeof ver más
// Mostrar el array resultante
const mix = [
  'Ut vero.',
  2,
  function () { console.log('hola mundo!') },
  56,
  'Diam rebum nonumy et.',
  true,
  false,
  'Kasd stet.',
  'Sit et dolor.',
  null,
  null,
  [ 1, 2, 3],
  'Dolore.'
];

// let soloStrings = mix.filter((texto) => {
//  return typeOf(texto) == string
// })




// console.log(soloStrings);
// // // deberia mostrar
// // [ 'Ut vero.', 'Diam rebum nonumy et.', 'Kasd stet.', 'Sit et dolor.', 'Dolore.' ]









// 4
// Tenemos un array playlist con canciones seleccionadas al azar por spotify para reproducir.
// Tenemos otro array playlistEscuchada que tiene canciones que ya escuchamos anteriormente.
// Usando filter, queremos crear una nueva lista que solo contenga aquellas canciones guardadas en playlist que no están en playlistEscuchada
// Guarda el resultado en la variable playlistSinEscuchar
// const playlist = ['Smells Like Teen Spirit', 'Everlong', 'Come As You Are', 'The Pretender', 'Heart-Shaped Box', 'Learn to Fly', 'Lithium'];
// var playlistEscuchada = ['The Pretender', 'Lithium', 'Come As You Are']

// /// codea aca tu solución


// console.log(playlistSinEscuchar);
// // deberia mostrar
// // [ 'Smells Like Teen Spirit', 'Everlong', 'Heart-Shaped Box', 'Learn to Fly' ]



// Crear un array nuevo con todas las alumnas que tengan menos de 25 años
// Guardar en una variable a la primera alumna cuyo nombre tenga mas de 4 letras
// Crear un booleano que diga si todas las alumnas tienen mas de 18 años
// Crear un booleano que diga si al menos una alumna tiene mas de 30 años


const alumnas = [
    {
      nombre: 'maca',
      edad: 22,
    },
    {
      nombre: 'marian',
      edad: 27,
    },
    {
      nombre: 'rosy',
      edad: 25,
    },
    {
      nombre: 'caro',
      edad: 28,
    },
    { nombre: 'angie', edad: 38 },
    {nombre: 'dani', edad: 24}
  ];

  
  let menores25 = alumnas.filter((alumna) => {
      return alumna.edad < 25
  })


  console.log(menores25)

  let primera = alumnas.find((alumna) => {
      return alumna.nombre.length === 4
  })

  console.log(primera)


  let todasMayores = alumnas.every((alumna) => {
      return alumna.edad > 18
  })

  console.log(todasMayores)


  let alMenosUna = alumnas.some((alumna) => {
      return alumna.edad >= 30
  }) 

  console.log(alMenosUna)
