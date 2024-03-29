/*
Ejercicio:
Dado el la siguiente estructura de datos obtener
- La cancion con más reproducciones
- La cancion con más likes
*/
const songsData = [
    {
        name: "¿Dónde jugarán los niños?",
        band: "Maná",
        releaseYear: "1992",
        statistics: {
            likes: 20000,
            reproductions: 8000
        },
    },
    {
        name: "La muralla verde",
        band: "Enanitos Verdes",
        releaseYear: "1986",
        statistics: {
            likes: 21000,
            reproductions: 19000
        },
    },
    {
        name: "Te Ví En Un Tren",
        band: "Enanitos Verdes",
        releaseYear: "1987",
        statistics: {
            likes: 20000,
            reproductions: 23490
        },
    },
    {
        name: "Mariposa Traicionera",
        band: "Maná",
        releaseYear: "2002",
        statistics: {
            likes: 12000,
            reproductions: 25690
        },
    },
    {
        name: "Rayando el Sol",
        band: "Maná",
        releaseYear: "1990",
        statistics: {
            likes: 12000,
            reproductions: 18000
        },
    },
    {
        name: "La celula que explota",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12000,
            reproductions: 23421
        },
    },
    {
        name: "No dejes que...",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12345,
            reproductions: 10000
        },
    }
  ];

//   La cancion con más reproducciones
  const moreReproductions = (array) => {
    let cancion = array[0];
    for(let i=0; i < array.length; i++){
        if(array[i].statistics.reproductions > cancion.statistics.reproductions){
            cancion = array[i]
        }
    }

    console.log(`La cancion con mas reproducciones es: ${cancion.name} con ${cancion.statistics.reproductions} reproducciones`);
  }
  
  moreReproductions(songsData);

//   - La cancion con más likes
  const moreLikes = (array) => {
    let cancion = array[0];
    for(let i=0; i < array.length; i++){
        if(array[i].statistics.likes > cancion.statistics.likes){
            cancion = array[i]
        }
    }

    console.log(`La cancion con mas likes es: ${cancion.name} con ${cancion.statistics.likes} likes`);
  }
  
  moreLikes(songsData);
  /*
  Ejercicio 2:
  Pedir al usuario un numero entre 10 y 100
  Imprimir todos los numeros pares que existen entre 1 y ese numero
  */
 const numPares = (num) =>{
 num = prompt("Ingresa un numero entre 10 y 100:");
    for(let i=1; i <= num; i++){
        if(i % 2 == 0){
            console.log(`el numero ${i} es par`)
        }
    }
 }
    numPares();
  
  /*
  Ejercicio 3:
  Imprimir en consola la suma total de todos los digitos de una cantidad p.ej. "1234" -> 10
  */
  const suma = () =>{
    let numeros = prompt("ingresa un numero para obtener la suma de sus digitos: ")
     numeros = numeros.split("");
     let suma = 0;
     for (let numero of numeros) {
         suma = suma + parseInt(numero);
     }
    console.log(`la suma total de los digitos es de: ${suma}`);
 }
  
 suma()
  /*Ejercicio 4:
  Realizar una funcion que genere un numero aleatorio entre 1 y 10,El usuario debe adivinarlo con las pistas de "es mayor" o es menor en un numero determinado de intentos
  */
 
  const adivinaNumero = () =>{
    const numero = Math.floor(Math.random() * 10) + 1;
    console.log("Adivina un numero del 1 al 10")
    let numIntentos = 5;
    do {
      const numIngresado = parseInt(prompt("Ingresa un numero: "))
      if(numIngresado == numero){
        console.log(`Felicidades acertaste el numero era ${numero}`)
        break;
      }
      else if (numIngresado < numero){
        console.log("Es mayor");
      }else{
        console.log("Es menor");
      }
      numIntentos--;
    } while (numIntentos > 0);
  }

  adivinaNumero();
