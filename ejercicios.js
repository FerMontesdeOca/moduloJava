// 💪 Ejercicio 1:
// Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
    const letrasDelNombre =()=>{
     let nombre = prompt("Ingresa tu nombre para saber cuantas letras tiene: ");
     let caracteres = nombre.split(" ")
     let suma = 0;
     caracteres.forEach(caracter => {
         suma = suma + caracter.length
     });
     alert(`El nombre ${nombre} tiene ${suma} letras`);
};

    letrasDelNombre();

// 💪   Ejercicio 2:
// Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
    const vocalesDelNombre=()=>{
        let nombre = prompt("Ingresa tu nombre para saber cuantas Vocales tiene: ");
        const vocales = /[aeiou]/gi;
        let todasLasVocales = 0;
        for(let i=0; i < nombre.length; i++){
            if(nombre[i].match(vocales)){
                todasLasVocales++;
            }
        }
        alert(`El nombre ${nombre} tiene ${todasLasVocales} vocales`)
    }   

    vocalesDelNombre();


// 💪   Ejercicio 3:
    // Del texto: 
    // - Contar cuántas veces se usa la palabra “estudiante” y reemplazar todas las coincidencias 
        // por la palabra “Koder”, 
    // - y mostrar el mensaje de nuevo al usuario
    const text = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado";
    
    const replace=()=> text.replaceAll("estudiante", "koder");

    alert(replace());

// 💪   Ejercicio 4:
    // Comparar 2 string, y determinar cual de los dos es el más largo

    // input: “string 1”, “Some large string”
    // Output: “el string {string 1} es el más largo”
    const stringMasLargo =()=>{
        let string1 = prompt("Ingresa el primer string para comparar cual es el mas largo:");
        let string2 = prompt("ingresa el segundo string: ");
        if(string1.length == string2.length){
            alert(`${string1} y ${string2} tienen la misma longitud`);
        }
         else if(string1.length > string2.length){
            alert(`${string1} es mas largo que ${string2}`)
        }
        else{
            alert(`${string2} es mas largo que ${string1}`)
        }
    }

    stringMasLargo();


// 💪   Ejercicio 5:
    // Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    // input: ‘Programación Javascript’
    // Output: ‘Programación’
    const palabraMasLarga =()=>{
        let frase = prompt("Ingresa una frase y te hare saber cual palabra es la mas larga: ");
        let fraseArray = frase.split(" ");
        let caracteres = "";
        fraseArray.forEach(palabra => {
            if(palabra.length > caracteres.length){
                caracteres = palabra;
            }
        });
        alert(`la palabra mas larga es ${caracteres}`);
    }

    palabraMasLarga();


// 💪   Ejercicio 6:
    // Crear un programa que permita a una cadena de texto mostrar el caracter '-' entre cada caracter de la cadena.
    const addCaracter =()=>{
        let frase = prompt("agrega una frase y se le agregarara el caracter - entre cada letra:");
        let nuevaFrase = frase.replaceAll("", "-");
        alert(nuevaFrase);
    }

    addCaracter()

// 💪   Ejercicio 7:
//     Realizar un programa que muestre una piramide del 1 al 10 de las siguiente formas:
// Forma 1:      Forma 2:
// 1               999999999
// 22               88888888
// 333               7777777            
// 4444               666666
// 55555               55555
// 666666               4444
// 7777777               333
// 88888888               22
// 999999999               1
 
    const piramide =(numero)=>{
      for(let i=1; i<numero; i++){
        let linea = "";

        for(let j=1; j<=i; j++){
            linea += i;
        }
        console.log(linea);
      }
      for(let i= numero -1; i>0; i--){
        let reversed = "";

        for(let j=1; j<=i; j++){
            reversed += i;
        }
        console.log(reversed);
      }
         
    };
    piramide(10);

// 💪   Ejercicio 8:
// Dado una array de numeros.
// -obtener el elemento Mayor, Menor, el Promedio y la Suma de los elementos.
const infoArray =()=>{
    const array = [1,6,76,2,8,3,9,34,6];
    let suma = 0;
    for (const i of array) {
        suma+= i
    }
    let promedio = suma / array.length;

 console.log(`El numero mayor del array es ${Math.max(...array)}
El numero menor es ${Math.min(...array)}
El promedio del array es ${Math.round(promedio)}
La suma total de los elementos es ${suma}`);
}

infoArray();

// 💪   Ejercicio 9:
// Crear un programa que dado un array de strings, un número, y debe de imprimir cada uno de los items del array con los caracteres limitados al número ingresado.
// input :
// number: 4
// output: [
//     'Baco',
//     'Buff',
//     'Lebe'
// ]
const arrayModificado =()=>{
  const example = [
   'Bacon ipsum dolor amet corned',
   'Buffalo pork ball tip',
   'Leberkas short loin pork loin'];
   let newArray =[];
   const numero = prompt("Ingresa un numero para mostrar solo esa cantidad de caracteres del array: ");
   example.forEach(letras => {
    newArray.push(letras.slice(0,numero));
   });
   console.log(newArray);
}

arrayModificado();

// 💪   Ejercicio 10:
// Crear un programa que dados los datos de 3 lados de un triangulo, determinar el área del triangulo y mostrarla en un mensaje en otro mensaje, indicar si el triangulo es isoseles, equilátero o escaleno.
// input: 3,3,3
// output: Es un triangulo equilatero que tiene como area 4.5
const areaDeUnTriangulo =()=>{
 alert("ingresa los valores de cada lado del triangulo para obtener el tipo de triangulo y su area")
 let lado1 = prompt("ingresa el valor del lado 1: ");
 let lado2 = prompt("ingresa el valor del lado 2: ");
 let lado3 = prompt("ingresa el valor del lado 3: ");
 let altura = prompt("ingresa el valor de la altura: ");
 let area = (lado1 * altura) / 2
 if(lado1 == lado2 && lado1 == lado3){
    console.log(`El triangulo es equilatero y su area es : ${area} cm2`)
 }
 else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
    console.log(`El triangulo es isoseles y su area es : ${area} cm2`)
 }else{
    console.log(`El triangulo es escaleno y su area es : ${area} cm2`)
 }
}

areaDeUnTriangulo();

// 💪   Ejercicio 11:
// tomando en cuenta esta estructura de datos vamos a obtener lo sigueinte:
// -Promedio por materias
 const mentorsArray = [
  {
    name: "Ivan Diaz",
    scores: [
      {
        signature: "HTML",
        score: 8,
      },
      {
        signature: "CSS",
        score: 10
      },
      {
        signature: "JS",
        score: 8
      },
      {
        signature: "ReactJS",
        score: 8
      }
    ]
  },
  {
    name: "Alan Medina",
    scores: [
      {
        signature: "HTML",
        score: 8
      },
      {
        signature: "CSS",
        score: 7
      },
      {
        signature: "JS",
        score: 10
      },
      {
        signature: "ReactJS",
        score: 10
      }
    ]
  },
  {
    name: "Elvira Camarillo",
    scores: [
      {
        signature: "HTML",
        score: 9
      },
      {
        signature: "CSS",
        score: 9
      },
     
      {
        signature: "ReactJS",
        score: 9
      }
    ]
  },
  {
    name: "Alejandra Paez",
    scores: [
      {
        signature: "HTML",
        score: 8
      },
      {
        signature: "CSS",
        score: 10
      },
     
      {
        signature: "ReactJS",
        score: 10
      }
    ]
  },
];

  const averageBySubject =(array, subject ) =>{
    let suma = 0;
     const subjectArray = array.map((item) =>{
        let average = 0;
        item.scores.forEach((resultado) =>{
            if(subject == resultado.signature){
                average = average + resultado.score
            }   
        });
        return average
    })
    for (const i of subjectArray) {
        suma+= i
    }
    let average = suma / subjectArray.length
    return `El promedio de la materia ${subject} es de ${average}`
  };

  console.log(averageBySubject(mentorsArray,'ReactJS'));