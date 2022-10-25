// *Snack1*
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo ( del numero inserito dall'utente: esempio se il numero dell'utente è 2, il numero successivo è 3  ).


let numero = parseInt(prompt("dammi un numero"));

if (numero % 2 == 0 ) {
    console.log(numero);
} else if ( numero % 2 != 0) {
    console.log(numero+1);
}


//FUNZIONA 

// *Snack2*
// Generatore di “nomi cognomi” casuali del grande gatsby:
// Abbiamo una lista di nomi e una lista di cognomi, e da queste vogliamo generare una "falsa" lista di invitati, dove ogni invitato nella lista, è l'unione di un "nome" e un "cognome" delle liste precedentemente dette, scelti in modo casuale. 

let listaNomi = [ilario,marco,giovanni,francesco,luca];
let listaCognomi = [rossi,verdi,gialli,rossi,violi];