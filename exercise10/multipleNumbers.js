/*

    Crie um programa usando a estrutura “faça enquanto” que leia vários números. 
    A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela: 

    a) O somatório entre todos os valores;
    b) Qual foi o menor valor digitado;
    c) A média entre todos os valores;
    d) Quantos valores são pares.

*/

const prompt = require('prompt-sync')();

let numbers;
let condition = true;
let sum = 0;
let average = 0.00;
let totalNumbers = 0;
let lowerValue = 0;
let totalEvenNumbers = 0;

do {
    
    console.clear();
    numbers = parseInt(prompt("Digite um número: "));
  
    while(isNaN(numbers)){
        console.clear();
        console.log("O valor digitado não é um número! Tente Novamente!");
        numbers = parseInt(prompt("Digite um número: "));
    }

    sum += numbers;

    totalNumbers++;

    if(lowerValue > numbers){
        lowerValue = numbers;
    }

    if(numbers % 2 === 0){
        totalEvenNumbers++;
    }


    console.log("Você quer digitar mais números? ");
    console.log("1 - Sim");
    console.log("2 - Não");
    let option = parseInt(prompt("Digite sua escolha: "));

    switch (option) {
        case 1:
            condition = true;
            break;
        
        case 2:
            condition = false;
            break;

        default:
            console.clear();
            console.log("Escolha Inválida! Tente Novamente!");
            break;
    }

} while (condition);

average = sum / totalNumbers;

console.log("\nO somatório entre todos os valores: ", sum);
console.log("O menor valor digitado: ", lowerValue);
console.log("A média entre todos os valores: ", average);
console.log("O total de valores pares: ", totalEvenNumbers);