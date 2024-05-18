/*

    Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
    mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
    que eles foram informados.

*/

const prompt = require('prompt-sync')();

const names = [];
const namesReverseOrder = [];

for(let i = 0; i < 7; i++){

    console.log((i+1), "° Nome: ")
    let name = prompt("");
    names.push(name);

}

for(let i = (names.length - 1); i >= 0; i--){

    namesReverseOrder.push(names[i]);

}

console.clear();
console.log(names);
console.log(namesReverseOrder);