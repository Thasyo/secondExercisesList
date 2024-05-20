/*

    Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
    final, mostre quais são os números pares que foram digitados e em que posições eles
    estão armazenados.

*/

const prompt = require('prompt-sync')();

const numberArray = [];
const numberPairArray = [];
const numberPairArrayIndex = [];

for(let i = 0; i < 10; i++){

    let number = parseInt(prompt("Digite um número: "));
    numberArray.push(number);

    if(numberArray[i] % 2 === 0){
        numberPairArray.push(numberArray[i]);
        numberPairArrayIndex.push(i);
    }

}

console.clear();
console.log("NÚMEROS DIGITADOS FORAM: ", numberArray);
console.log("NÚMEROS PARES DIGITADOS RESPECTIVAMENTE: ", numberPairArray);
console.log("POSIÇÕES DOS NÚMEROS PARES DIGITADOS RESPECTIVAMENTE: ", numberPairArrayIndex);