/*L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.  */


const firstNumber = prompt('inserisci un numero');

const secondNumber = prompt('inserisci un numero diverso dal primo');
//get number by user

numberList = []
//create array 

numberList.push(firstNumber);
numberList.push(secondNumber);
//add number by user in array 

for (let i = 0; i < numberList.length; i++) {

   const largest = (firstNumber > secondNumber) ? firstNumber : secondNumber;
   console.log(largest);

    
}
