//Ejercicios para el fin de semana 
//- Crear una función que recibe un arreglo de números y devuelve el valor mas grande que se encuentra en el arreglo.
function valorMayor(array){
 let num = 0;
 for(let i = 0; i < array.length; i++){
    if(array[i] > num){
        num = array[i];
    }
 }
 return num;
}
console.log(valorMayor());
//- Crear una función que pueda contar cuantos elementos de un arreglo son mayores a X valor dado en los parámetros.
function mayorQue(array, num){
    let result = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > num){
           result = result + 1;
        }
    }
    return result;
}
console.log(mayorQue());
//- Crear una función que reciba un arreglo de números y regrese la lista de números pares que se encuentran en el arreglo
function numPares(array){
    let newArray = [];  
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(numPares());
//- Crear una función que pueda contar cuantas veces aparece un elemento dado en los parámetros en un arreglo también dado en sus parámetros
function contador(array, element){
    let accum = 0;
    for(let i = 0; i < array.length; i++){
        if(element === array[i]){
            accum = accum + 1;
        }
    }
    return accum;
}
console.log(contador());
//- Crear una función que recibe un arreglo de strings y un string, la función devuelve true si ese string se encuentra en el arreglo y false si no se encuentra
function verificador(array, param){
    let result = 0;
    for(let i = 0; i < array.length; i++){
        if(param === array[i]){
            result = result + 1;
        }
    }
    if(result > 0){
        return true;
    }
    return false;
}

console.log(verificador());