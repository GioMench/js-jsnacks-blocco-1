/*L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.  */

/*Tools
- const/let
- prompt
- array
- for
- if/else
- console.log
*/



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
   //condition for determine if fistNumber is largest than secondNumber
  
    
}
//loop for determine the largest number to stamp
 console.log(largest);
   //stamp in console the result 