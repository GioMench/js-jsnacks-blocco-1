/*Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

/* Tools
- const/let
- prompt
- if/else 
- lenght
*/

const firstWord = prompt('write a word');
const secondWord = prompt('write another word');
//get words by user


if (firstWord.length < secondWord.length){
    console.log(`${firstWord}`, `${secondWord}`);
}else{
    console.log(`${secondWord}`, `${firstWord}`);
}
//condition

