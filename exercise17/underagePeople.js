/*

    Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
    dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
    os dados das pessoas menores de idade.

*/

const prompt = require('prompt-sync')();

const names = [];
const ages = [];

const underagePeople = [];

const initializing = () => {

    let name = prompt("Nome: ");
    let age = parseInt(prompt("Idade: "));

    if(isNaN(age) || age < 0){
        console.clear();
        console.log("Idade Inválida! Tente novamente!");
        initializing();
    }

    names.push(name);
    ages.push(age);

    if(age > 0 && age < 18){

        underagePeople.push({name: name, age: age});

    }

}

for(let i = 0; i < 3; i++){

    console.clear();
    initializing();

}

console.clear();
console.log("==== Menores de Idade ====");
for(let i = 0; i < underagePeople.length; i++){

    console.log("Nome: ", underagePeople[i].name);
    console.log("Idade: ", underagePeople[i].age);
    console.log("====")

}