const word = `FizzBuzz`; // Definisco la variabile word e la inizializzo con il valore `FizzBuzz`

for (let i = 1; i <= 100; i++) { // Creo un ciclo for che parte da 1 e termina a 100
    if (i % 3 === 0 && i % 5 === 0) { // Se il numero è divisibile sia per 3 sia per 5
        console.log(word); // Stampo la variabile word per intero
    } // Chiudo il blocco if
} // Chiudo il ciclo for