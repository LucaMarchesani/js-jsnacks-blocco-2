/*
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
*/

let numeroUtente = parseInt(prompt('Inserisci il tuo numero'));

if (numeroUtente % 2 == 0) {
    console.log(numeroUtente);
}

else {
    console.log(numeroUtente + 1);
}


