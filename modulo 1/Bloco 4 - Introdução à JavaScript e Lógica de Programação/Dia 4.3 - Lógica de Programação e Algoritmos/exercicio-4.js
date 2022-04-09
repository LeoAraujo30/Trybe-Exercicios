let numero = [];
let primoMaior = 0;


for(let i = 0; i <= 50; i += 1) {
    numero.push(i)
}

for (let f = 0; f < numero.length; f += 1) {

    if (numero[f] % 1 && numero[f] % numero[f]) {
        primoMaior = numero[f]
    }

}

console.log(primoMaior)


// let biggestPrimeNumber = 0;

// for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
//   let isPrime = true;
//   for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//     if (currentNumber % currentDivisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     biggestPrimeNumber = currentNumber;
//   }
// }

// console.log(biggestPrimeNumber);
