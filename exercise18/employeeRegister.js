/*

    Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para um
    funcionário e ao final escreva o conteúdo do registro.

*/

const prompt = require('prompt-sync')();

const registerEmployee = (name, office, salary) => {

    return {

        name: name,
        office: office,
        salary: salary,
        info: () => {
            console.log(`Nome do Funcionário: ${name}.`);
            console.log(`Cargo na Empresa: ${office}.`);
            console.log(`Salário do Funcionário: R$ ${salary}.`);
        }
    }

}

console.log("--- REGISTRANDO FUNCIONÁRIO ---");
let name = prompt("Nome: ");
let office = prompt("Cargo: ");
let salary = parseInt(prompt("Salário: R$"));

let employee = registerEmployee(name, office, salary);

console.clear();
console.log("--- INFORMAÇÕES DO FUNCIONÁRIO DIGITADO ---")
employee.info();