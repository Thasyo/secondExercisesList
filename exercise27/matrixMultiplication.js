/*

    Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
    multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
    um vetor V(36). Escrever o vetor V no final.

*/

const prompt = require('prompt-sync')();

const init = () => {

    let value = parseInt(prompt("Digite um número: "));
    validate(value);

    if(validate(value)){

        console.clear();
        let { matrix } = createMatrix(6, 6);

        console.log("Matriz: [");
        matrix.forEach(row => console.log(row.join(" ")));
        console.log("]");

        let { V } = multiplyMatrix(value, matrix);
        console.log(`\nOs valores da multiplicação da matriz acima por ${value} são: `);
        console.log(`[ ${V} ].`);

    }else{

        console.clear();
        console.log("Valor inválido! Digite novamente!");
        init();

    }
}

const createMatrix = (row, column) => {

    let matrix = [];
    for(let i = 0; i < row; i++){

        let line = [];
        for(let j = 0; j < column; j++){

            let number = randomNumber(-9, 9);
            line.push(number);

        }
        matrix.push(line);

    }

    return {matrix};

}

const multiplyMatrix = (value, matrix) => {

    let V = [];
    for(let i = 0; i < 6; i++){

        for(let j = 0; j < 6; j++){

            let number = value * matrix[i][j];
            V.push(number);

        }

    }

    return {V};
    
}

const randomNumber = (min, max) => {

    const number = Math.floor(Math.random() * (max - min + 1)) + min;

    return number;

}

const validate = (number) => {

    if(isNaN(number) || number === 0){

        return false;

    }else{
        return true;
    }

}

init();