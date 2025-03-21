const word = `FizzBuzz`; // Definisco la variabile word e la inizializzo con il valore `FizzBuzz`

for (let i = 1; i <= 100; i++) { // Creo un ciclo for che parte da 1 e termina a 100
    if (i % 3 === 0 && i % 5 === 0) { // Se il numero è divisibile sia per 3 sia per 5
        console.log(word); // Stampo la variabile word per intero
    } else if (i % 3 === 0) { // Se il numero è divisibile per 3
        console.log(word.substring(0, 4)); // Stampo `Fizz`
    } else if (i % 5 === 0) { // Se il numero è divisibile per 5
        console.log(word.substring(4, 8)); // Stampo `Buzz`
    } else { // Se il numero non è divisibile per 3 e per 5
        console.log(i); // Stampo il numero
    } // Chiudo il blocco if
} // Chiudo il ciclo for