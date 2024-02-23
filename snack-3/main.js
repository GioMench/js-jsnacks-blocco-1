/*Snack 4
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa*/

/* Tools
- const/let
- array
- log
*/

inviteList = ['marco' , 'giacomo' , 'alice', 'paola', 'andrea'];

const inviteName = prompt(' your name?')

let result = 'sorry'

for (let i = 0; i < inviteList.length; i++) {
    const name = inviteList[i]

    if(inviteName === inviteList[i]){
        result = 'welcome';
        break;
    }

    
}

console.log(result);