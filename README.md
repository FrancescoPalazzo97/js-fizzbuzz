Ciao ragazzi, Esercizio di oggi: FizzBuzz
nome repo: js-fizzbuzz
Consegna: Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per? Abbiamo visto qualcosa di particolare che possiamo usare?

Numero push minimo: 4

Consigli del giorno:
1- scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2- proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon lavoro e buon divertimento!

SVOLGIMENTO
1- Definisco una variabile word e la inizializzo con il valore `FizzBuzz`
2- creo il ciclo for
3- Apro il primo blocco if in cui stampo la variabile `FizzBuzz` per intero solo nel caso il valore di i sia divisibile sia per 3 sia per 5 con resto 0
4- Apro il secondo blocco if in cui stampo la prima parte della variabile `FizzBuzz`, ovvero `Fizz`, solo nel caso il valore di i sia divisibile per 3 con resto 0
5- Apro il terzo blocco if in cui stampo la seconda parte della variabile `FizzBuzz`, ovvero `Buzz`, solo nel caso il valore di i sia divisibile per 5 con resto 0
6- Apro il quarto blocco if in cui stampo il valore di i nel caso il suo valore non è divisibile ne per 3 ne per 5
