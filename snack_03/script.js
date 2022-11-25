//Calcola la somma dei primi 10 numeri di un array.

const numbers = [
    1,
    12,
    100,
    23,
    67,
    44,
    88,
    5,
    17,
    36
];

let maxValue = 0;
let somma = 0;
let media = 0;

for (let i = 0; i < 10; i++){
    somma = somma + numbers[i];

    if (numbers[i] > maxValue) {
        maxValue = numbers[i];
      }
    
}




//calcolo della media
media = somma / 10;

console.log(maxValue);
console.log(somma);
console.log(media);

