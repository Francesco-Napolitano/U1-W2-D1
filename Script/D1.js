/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// 'I principali datatype in JavaScript, che abbiamo studiato fino ad ora, sono 5 e sono di tipo:
// string, number, boolean, null ed undefined. Questi sono anche chiamati tipi primitivi,
// perché contengono dei valori semplici senza complessità. Il dato stringa può contenere
// il singolo carattere, una parola o una frase. Il dato numerico permette di inserire dei numeri
// all'interno, sia interi che decimali. Il tipo boolean può dare una risposta affermativa o
// negativa (true o false). Il tipo undefined è una variabile dichiarata ma senza alcuna
// assegnazione. Infine Null è una keyword che permette di inserire un valore
// nullo dentro una variabile '

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myName = 'Francesco'
console.log(myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let sum = 12 + 20
console.log(sum)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myName = 'Napolitano'
console.log(myName)
// const myAge = 19
// myAge = 20
// L'errore dato dalla console è:  Uncaught TypeError: Assignment to constant variable
// perché il valore di const non può essere alterato come una variabile let

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let diff = 4 - x
console.log(diff)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = 'john'
let name2 = 'John'

const nameTrue = name1 !== name2
console.log(nameTrue)

const nameLowerCase = name1.toLowerCase === name2.toLowerCase
console.log(nameLowerCase)
