/*
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/

let somma = 0; 

let userNumber = prompt (' numero 4 cifre');

for (let i = 0; i < userNumber.length; i++) {

    let element = userNumber[i];

    element = Number(element);
    
    somma += element;
    
}

console.log(somma);



