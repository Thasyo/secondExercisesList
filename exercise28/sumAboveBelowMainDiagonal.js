/*

    Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item:

        a) a soma dos elementos acima da diagonal principal;
        b) a soma dos elementos abaixo da diagonal principal;

*/

// Criar uma matriz 15x20 com valores de exemplo
let matrix = [];

for (let i = 0; i < 10; i++) {

  let row = [];

  for (let j = 0; j < 10; j++) {

    row.push(Math.floor(Math.random() * 10));

  }

  matrix.push(row);

}

matrix.forEach(row => console.log(row.join(" ")));

// Somando os elementos da parte superior da diagonal principal.
let sumAboveMainDiagonal = 0;

for (let i = 0; i < 10; i++) {

    for (let j = i + 1; j < 10; j++) {

        sumAboveMainDiagonal += matrix[i][j];

    }

}

console.log(`Soma da parte superior da diagonal principal: ${sumAboveMainDiagonal}.`);

// Somando os elementos da parte inferior da diagonal principal.
let sumBelowMainDiagonal = 0;

for (let i = 1; i < 10; i++) {

    for (let j = 0; j < 10; j++) {

        sumBelowMainDiagonal += matrix[i][j];

    }

}

console.log(`Soma da parte inferior da diagonal principal: ${sumBelowMainDiagonal}.`);