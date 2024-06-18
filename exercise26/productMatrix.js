/*

    Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
    P[1..3,1..5].

*/

const randomNumber = (min, max) => {

    const number = Math.floor(Math.random() * (max - min + 1)) + min;

    return number;

}

let A = [];
let B = [];
let P = [];

//add values for matrix A and matrix B.
for(let i = 0; i < 3; i++){

    let rowForA = [];
    let rowForB = [];

    for(let j = 0; j < 5; j++){

        let numberForA = randomNumber(0, 9);
        let numberForB = randomNumber(0, 9);

        rowForA.push(numberForA);
        rowForB.push(numberForB);

    }

    A.push(rowForA);
    B.push(rowForB);

}

console.log("Matriz A: [")
A.forEach(row => console.log(row.join(' ')));
console.log("]");

console.log("\nMatriz B: [")
B.forEach(row => console.log(row.join(' ')));
console.log("]");

console.log("\nO produto entre essas duas matrizes não existem! Pois o número de colunas da 1° Matriz é diferente do número de linhas da 2° Matriz.");