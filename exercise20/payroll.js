/*

    Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
    no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
    salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
    tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:

        Matrícula:
        Nome:
        Salário bruto:
        Dedução INSS:
        Salário líquido:

    (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do INSS).

*/

const generateRandomNumber = (min, max) => {

    const number = Math.random() * (max - min + 1) + min;

    return number.toFixed(2);
}

const generatePosition = (min, max) => {

    const position = Math.floor(Math.random() * (max - min + 1) + min);

    return position;

}

const generateRandomName = () => {

    const names = [
        "Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gabriel", "Helena",
        "Igor", "Julia", "Kaique", "Larissa", "Marcelo", "Nina", "Otávio", "Paula",
        "Quintino", "Rafaela", "Sandro", "Tatiana", "Ubirajara", "Valéria", "Wagner",
        "Ximena", "Yara", "Zeca", "Alice", "Bernardo", "Camila", "Diego", "Elisa",
        "Fábio", "Giovana", "Henrique", "Isabela", "João", "Karen", "Leonardo", "Mariana",
        "Nicolas", "Olívia", "Pedro", "Quirino", "Renata", "Silvio", "Tiago", "Ursula",
        "Vanessa", "William", "Xavier", "Yasmin", "Zuleica", "Adriana", "Brenda",
        "Caio", "Diana", "Emerson", "Fabiana", "Gustavo", "Helder", "Irene", "José",
        "Kelly", "Lucas", "Marta", "Natan", "Otília", "Paulo", "Quitéria", "Roberta",
        "Samuel", "Talita", "Ulisses", "Vitória", "Wallace", "Xaviera", "Yuri", "Zenaide", "Thasyo", "Luana"
    ]
    
    const lastNames = [
        "Almeida", "Barbosa", "Cunha", "Dias", "Esteves", "Ferreira", "Gomes", "Hernandez",
        "Ibrahim", "Jorge", "Klein", "Lima", "Martins", "Nascimento", "Oliveira", "Pereira",
        "Queiroz", "Rocha", "Santos", "Teixeira", "Uchoa", "Vasconcelos", "Wagner",
        "Xavier", "Yamamoto", "Zambrano", "Andrade", "Borges", "Campos", "Dantas", "Elias",
        "Farias", "Garcia", "Hidalgo", "Ibanez", "Jesus", "Kramer", "Lopes", "Marques",
        "Nogueira", "Pacheco", "Quintana", "Ramos", "Silva", "Tavares", "Uchoa", "Vargas",
        "Ximenes", "Yamada", "Zacarias", "Albuquerque", "Barros", "Carvalho", "Diniz",
        "Esteves", "Figueiredo", "Gonçalves", "Horta", "Ibrahim", "Jansen", "Klein",
        "Lacerda", "Machado", "Nascimento", "Oliveira", "Pereira", "Queiroz", "Ribeiro",
        "Santos", "Teixeira", "Uchoa", "Valente", "Xavier", "Yamamoto", "Zimmermann", "Peres", "Liberato", "Gutensberg", "Portella"
    ]
    
    
    const name = names[generatePosition(0, 79)];
    const lastName = lastNames[generatePosition(0, 79)];
    
    return `${name} ${lastName}`;

}

const generateEmployee = (id) => {

    return {

        registration: id,
        name: generateRandomName(),
        grossSalary: generateRandomNumber(1200, 10000),

    };

}

const printCheck = (employee) => {

    const INSS = 12/100 * employee.grossSalary;
    const netSalary = employee.grossSalary - INSS;

    console.log("Matrícula: ", employee.registration);
    console.log("Nome: ", employee.name);
    console.log("Salário Bruto: R$ ", employee.grossSalary);
    console.log("Dedução INSS: R$ ", INSS.toFixed(2));
    console.log("Salário Líquido: R$ ", netSalary.toFixed(2));

}

const employees = [];

for (let index = 1; index <= 5; index++) {
    employees.push(generateEmployee(index));
}

console.log("---- CONTRA- CHEQUE DOS FUNCIONÁRIOS ----");
employees.map((employee) => {

    printCheck(employee);
    console.log("----------");

})

