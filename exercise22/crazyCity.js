/*

    A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
    dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
    número não determinado de pessoas e retorne a média de salário da população, a
    média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
    350,00.

*/
const prompt = require('prompt-sync')();

let sumSalary = 0;
let salaryQuantity = 0;
let sumChildren = 0;
let childrenQuantity = 0;
let higherSalary = 0;
let totalPersonSalaryUpTo350 = 0;
let totalPerson = 0;
let averageSalary = 0;
let averageChildren = 0;
let percentualPersonUpTo350 = 0;

const readData = () => {

    let salary = parseFloat(prompt('Digite o seu salário: R$'));
    validateData(salary);
    let numberOfChildren = parseInt(prompt('Quantos filhos você tem? '));
    validateData(numberOfChildren);

    salaryQuantity++;
    childrenQuantity++;
    totalPerson++;

    if(higherSalary < salary){
        higherSalary = salary;
    }

    if(salary < 350){
        totalPersonSalaryUpTo350++;
    }

    sumSalary += salary;
    sumChildren += numberOfChildren;

    averageSalary = sumSalary / salaryQuantity;
    averageChildren = sumChildren / childrenQuantity;
    percentualPersonUpTo350 = (totalPersonSalaryUpTo350 / totalPerson) * 100;

    init();

    return {averageSalary, averageChildren, higherSalary, percentualPersonUpTo350};

}

const init = () => {

    console.log("---- Deseja ler mais dados? ----");
    console.log("1- Sim");
    console.log("2- Não");
    let option = parseInt(prompt("Digite sua escolha: "));

    switch(option){

        case 1:
            console.clear();
            readData();
            break;
        
        case 2:
            console.clear();
            console.log("Obrigado por utilizar os nossos serviços!");
            break;
        
        default:
            console.clear();
            console.log("Opção inválida, tente novamente!");
            init();
            break;

    }

}

const validateData = (data) => {

    if(isNaN(data) || data === "" || data < 0){

        console.clear();
        console.log("Os dados inseridos estão inválidos! Tente novamente!");
        readData();

    }

}
    
readData();

console.log(`Média salarial da população: R$${averageSalary.toFixed(2)}.`);
console.log(`Média de crianças da população: ${averageChildren.toFixed(1)}.`);
console.log(`Maior salário: R$${higherSalary.toFixed(2)}.`);
console.log(`Percentual de pessoas com salário até R$ 350,00: ${percentualPersonUpTo350.toFixed(1)}%.`);

