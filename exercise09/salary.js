/*

    Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
    mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
    perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
    funcionário.

*/

const prompt = require('prompt-sync')();

const employees = [];

const addEmployee = () => {

    console.log("=== Informe o sexo do(a) funcionário(a) ===")
    console.log("1 - Masculino");
    console.log("2 - Feminino");
    let gender = parseInt(prompt("Sexo: "));

    switch(gender){

        case 1:
            gender = "Masculino";
            break;
        
        case 2:
            gender = "Feminino";
            break;

        default:
            console.clear();
            console.log("Valor Inválido! Tente novamente!");
            addEmployee();
            break;


    }

    console.clear();
    console.log("=== Informe o salário do(a) funcionário(a) ===");
    let salary = parseFloat(prompt("Salário: R$ "));

    if(isNaN(salary) || salary < 0){
        console.clear();
        console.log("Valor Inválido! Tente novamente!");
        addEmployee();
    }

    employees.push({salary: salary.toFixed(2), gender: gender});

}

let index = 0;
let condition = true;
let totalSalaryMen = 0.00;
let totalSalaryWomen = 0.00;

while(condition){

    console.log("=== Dados do(a) ", (index+1), "° Funcionário(a) ===");
    addEmployee();

    if(employees[index].gender === "Masculino"){
        totalSalaryMen += parseFloat(employees[index].salary);
    }

    if(employees[index].gender === "Feminino"){
        totalSalaryWomen += parseFloat(employees[index].salary);
    }

    console.clear();
    console.log("=== Você deseja adicionar mais funcionários(as)? ===");
    console.log("1 - Sim");
    console.log("2 - Não");
    let option = parseInt(prompt("Digite sua escolha: "));
    
    if(option === 1){
        console.clear();
        index++;
    }else if(option === 2){
        condition = false;
    }else{
        console.clear();
        console.log("Valor Inválido! Digite somente 1 ou 2");
    }

}

for (let i = 0; i < employees.length; i++) {
    console.log("\n", (i+1), "° Funcionário: \nSalário: R$", employees[i].salary, "\nSexo: ", employees[i].gender);
}
console.log("\nTotal de salário dos funcionários do sexo masculino: R$", totalSalaryMen.toFixed(2));
console.log("Total de salário dos funcionários do sexo feminino: R$", totalSalaryWomen.toFixed(2));