/*

    Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
    Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
    valores da sequência.

*/

let a1 = 7; //primeiro termo da PA;
let r = 2; //raio da PA;
let n = 25; //total de elementos da PA;
let sum;

const PA = [];

for (let i = 0; i < n; i++) {

    PA.push(a1 + i * r);

}

console.log("Os 10 Primeiros termos da PA: ");
for (let i = 0; i < 10; i++){

    console.log((i+1), "° Termo: ", PA[i]);

}

let an = PA[PA.length-1]; //último termo da PA;

sum = (n/2) * (a1 + an);

console.log("A soma de todos os elementos da PA: ", sum);