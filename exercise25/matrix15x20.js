/*

    Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
    de cada coluna separadamente.

*/

// Criar uma matriz 15x20 com valores de exemplo
let matriz = [];

for (let i = 0; i < 15; i++) {

  let linha = [];

  for (let j = 0; j < 20; j++) {

    linha.push(Math.floor(Math.random() * 10));

  }

  matriz.push(linha);

}

// Inicializar uma lista para armazenar as somas das colunas. Ele cria um array de 20 elementos e adiciona 0, inicialmente, em cada posição.
let somaColunas = new Array(20).fill(0);

// Somar as colunas separadamente
for (let i = 0; i < matriz.length; i++) {

  for (let j = 0; j < matriz[i].length; j++) {

    somaColunas[j] += matriz[i][j];

  }

}

matriz.forEach(row => console.log(row.join(' ')));

console.log(somaColunas);



