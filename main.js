/* 
SUMA DE RESISTENCIAS
Calcula la suma de todas las resistencias conectadas en serie.
Ejemplos:

sumResistance([-1,5,6,3]) debería devolver "15 ohms". (|−1| + 5 + 6 + 3 = 15)
sumResistance([14,3.5,6]) debería devolver "23.5 ohms". (14 + 3.5 + 6 = 23.5)
sumResistance([8,15,100]) debería devolver "123 ohms". (8 + 15 + 100 = 123)
Nota: Este método utiliza el valor absoluto de cada resistencia para asegurar que todos los valores sean positivos.
*/

const resistance= [8,1.4,3,-6,5,-9];
let sumResistance = 0;
let i = 0;
while (i < resistance.length) {
    //console.log(resistance[i]);
    //Math.abs(resistance[i]);
    sumResistance = (Math.abs(resistance[i]) + sumResistance); //se convierte la resistencia en numeros absolutos, que será positivo, para luego poder sumarlo. 
    i = i + 1; //así se podrá mover uno más en cada iteración 
}
console.log(sumResistance + ` ohms`);

/*
NUMERO DIVIDIDO EN MITADES
Dado un número, devuelve el número dividido en sus mitades en un arreglo.
Ejemplos:
numDiv(4) debería devolver [2, 2].
numDiv(10) debería devolver [5, 5].
*/
/*
function numDiv(a) {
    let half = a / 2;
    let result = (half, half);
    return result;
}
console.log(numDiv(79));
*/
function numDiv(a) {
    let half = a / 2;
    let result = []; //mi array vacío para guardar los resultados 
    let i = 0; //se comienza en el índice 0
    while (i < 2) { //Cuando se hagan las dos iteraciones donde primero i = 0 y se incrementa 1, y despues i = 1 y se incrementa 1, entonces i será 2, y como ya no cumple la condición i < 2, el bucle while se detiene.
      result.push(half);
      i++; // i = i + 1 entonces se incrememta el varlo de i más 1
    }
    return result;
  }
  console.log(numDiv(534));

/*
SECRET SOCIETY
Find the name of a secret society based on the first letter of each member's name.
Examples:
- `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
- `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
- `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.
*/

const names1 = ["Andalucía", "Moncaco", "Omán", "Rusia"];
let secretName1 = "" //esta sera mi cadena vacía
let item = 0 //mi índice de donde comenzaré mi iteración, que será en la posición 0 
while (item < names1.length) { //con esto aseguramos que solo se acceden a indices validos en el array, entonces el bucle se cierra hasta que i sea menor que names.leght, entonces i recorrió todos los índices válidos del array y se detiene. 
    secretName1 += names1[item][0]; // Se recolecta la primera letra de cada nombre del array names para ponerla en el orden de secretName, en la cadena vacía del let
    item++; // Incrementamos el índice en 1 por lo que se puede pasar al siguiente nombre
}
console.log(secretName1);


const names2 = ["Andalucía", "Monaco", "Omán", "Rusia"];
let secretName2 = []; // este es un array vacío 
for (let i = 0; i < names2.length; i++) {
    secretName2.push(names2[i][0]); // Agrega la primera letra de cada nombre
}
// Invertir el array de letras y unirlas en una cadena
let secretNameReverse = secretName2.reverse().join(''); //Entonces establezco mi variable que será lo que guardé en mi array vacío (primeras letras de cada nombre), lo invertiré y lo juntaré
console.log(secretNameReverse); // Esto imprimirá 'ROMA'

const names3 = ["Rusia", "Omán", "Andalucía", "Mónaco"];
let secretName3 = [];
for (let i = 0; i < names3.length; i++) {
    secretName3.push(names3[i][0]); // Agrega la primera letra de cada nombre
}
let secretNameSort = secretName3.sort().join(''); //se pide de manera alfabetica
console.log(secretNameSort);

/*
ONLINE STATUS
Display online status for a list of users.
Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
*/

 console.log("Status on Line"); // Mensaje que se imprime antes de la ejecución de la función

function onlineStatus(users) { // la función onlineStatus recibe un array de usuarios, que es users
    const count = users.length; // se cuenta el número de usuarios, pues es length es el numero de elementos que contiene el array users. 
    if (count === 0) { // === operador de comparación que verifica si ambos lados son iguales, o sea, en valor y tipo
        return 'No users online'; // Si no hay usuarios, se devuelve este mensaje
    }

    if (count === 1) { 
        return `${users[0]} online`; // Aquí se accede al primer elemento del array con su mensaje "en línea", el usuario en el índice 0, mientras que `${}` permite insertar expresiones dentro de cadenas de texto
    }

    if (count === 2) {
        return `${users[0]} and ${users[1]} en línea`; // se agrega un "y" entre el usuario en el índice 0 y 1
    }

    const onlineUsers = users.slice(0, 2); // Se toma desde el índice 0 al 2, pero sin tomar el 2, esto crea un nuevo array, entonces sería un subconjunto del array original
    const remaining = count - 2; // Calcula el número de usuarios restantes, "remaining" es mi constante que almacena el resultado de count - 2, es decir, la cantidad de usuarios que no están incluidos en onlineUsers
    return `${onlineUsers.join(', ')} and ${remaining} more online`; // Mensaje final para más de dos usuarios
}
const users = ["Dobby", "Sauron", "Rumpenstrinski", "Ziggy", "Menphistófeles", "Richard Parker"]; // Array de usuarios
console.log(onlineStatus(users))

/* MATRIZ DE MULTIPLOS
Crea una función que toma dos parámetros (número, longitud) y devuelve una matriz de longitud que contiene múltiplos del número.
Ejemplos:
- `arrayMultiplos(2, 10)` debería devolver `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]` .
- `arrayMultiplos(17, 6)` debería devolver `[17, 34, 51, 68, 85, 102]` . */

function arrayMultiplos(numero, longitud) { // en la función se toma en cuenta el número y la longitud del array de múltiplos
    let multiplos = []; // array vacío donde se almacenarán los múltiplos generados
    for (let i = 1; i <= longitud; i++) { // bucle for que va desde 1 hasta el valor de longitud, puesto que un multiple de 0 siempre sería 0
        multiplos.push(numero * i); // se calcula el múltiplo actual y se agrega al array multiplos
    }
    return multiplos; // 
}
console.log(arrayMultiplos(2, 10));
console.log(arrayMultiplos(8, 19));

/*DOMINANCIA POSITIVA Array
Escriba una función para determinar si una matriz es positivamente dominante.
Una matriz es positivamente dominante cuando la mayoría de sus elementos son positivos.
Ejemplo:
- `positiveDom([-1, -3, -5, 4, 6767])` debería devolver `false` .*/ 

console.log("DOMINANCIA POSITIVA EN ARRAY");
function positiveDom(numbers4) {
    let contadorPositivos = 0; // esta variable va a contar los numeros positivos
    for (let i = 0; i < numbers4.length; i++) { //se inicia el índice en 0, el bucle se segurá repitiendo mientras i sea menor que el numero de elementos en la lista, y entonces se incrementa en uno para asegurar que en cada bucle se mueva al siguiente indice pra continuar con el bucle
    }
        if (numbers4[i] > 0) { // Verifica si el número actual es positivo, osea mayor que 0
            contadorPositivos++; // se almacena aqui si son positvos, es el contador
        }
    }
    return contadorPositivos > numbers4.length / 2; //verifica si los números positivos son más de la mitad de los elementos del array. Si es así, el array es considerado positivamente dominante, y la función devuelve true, de lo contario devuelve false.

console.log(positiveDom([-14, -7, -24, -974, 6767, 10])); 
console.log(positiveDom([1, -4, 0, 45, -18, -42])); 

/* PROMEDIO ANTIPODA
Dada una matriz, devuelva una matriz más corta siguiendo estos pasos:
- Dividir la matriz en dos partes iguales*. Si no son iguales, eliminar el elemento del medio para obtener dos matrices iguales.
- Sumar cada número de la primera parte con los números inversos de la segunda parte.
- Dividir cada número de la matriz resultante por 2.
Ejemplo:
- Para la matriz `[1,2,3,5,22,6]` , el resultado debe ser `[3.5, 12, 4]` . */

function promedio(array) {
    const values = array.length; // con esto se tiene en cuenta la cantidad de elementos en el array
    const minimum = Math.floor(values / 2); //se calcula el indice de la mitad del array
    if (values % 2 !== 0) { /*"si" el numero de elementos es impar se elimina el de en medio, != (no igual) y !== (no estrictamente igual), entonces !== 0 si el valor a la izquierda no es estrictamente igual a 0:
    Si valores % 2 (el resto de dividir valores entre 2) no es 0, entonces valores es impar. Si el resultado es 0, entonces el número es par */
        array.splice(minimum, 1); // Eliminar el elemento del medio
    }
    const result = []; //este array vacio sirve para almacenar los resultados
    const newValues = array.length; //de esta forma de consideran los items despues de la eliminacion si fue impar
    for (let i = 0; i < newValues / 2; i++) { //bucle para la sima de elementos de laprimera mitad con los de la segunda mitad pero invertidos accede a los items de modo inverso
        const suma = array[i] + array[newValues - 1 - i]; // Calcula el promedio dividiendo la suma entre 2 y almacenarlo en el array de resultados, y el ultimo entonces 
        result.push(suma / 2);
    }
    return result;
}

console.log(promedio([5, 3, 9, 8, 4])); 

//Selene Terrazas