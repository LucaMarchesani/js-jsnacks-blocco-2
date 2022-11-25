/*
Crea un array vuoto.
Chiedi per 6 volte all'utente di inserire un numero,
se è dispari inseriscilo nell'array.
*/

const numeriDispari = [];

let numeroUtente;


for (let i = 0; i < 6; i++) {
    let numeroUtente = parseInt(prompt('Inserisci il tuo numero'));

    if (numeroUtente % 2 == 1) {
        numeriDispari.push(numeroUtente);
    }
}

console.log(numeriDispari);
