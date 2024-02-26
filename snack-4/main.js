/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

myArray = [];

/*for (let i = 0; i < 6; ) {
    
    let userNumb = prompt('inserisci un numero');
    let theNumb = Number(userNumb);

    if (theNumb%2 == 1) {

        myArray.push(theNumb)
        console.log(myArray);
        
    }
    
}*/

let i = 0
while(i < 6){
   let userNumb = prompt('inserisci un numero');
    let theNumb = Number(userNumb);

    if (theNumb%2 == 1) {

        myArray.push(theNumb)
        console.log(myArray);
        
    }
    
    i++

}