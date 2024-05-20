/*

    Crie uma lógica que preencha um vetor de 20 posições com números aleatórios (entre
    0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
    depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.

*/

const array = [];

const getRandomInteger = (min, max) => {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

for(let i = 0; i < 20; i++){

    array[i] = getRandomInteger(0, 99);

}

console.log("Valores do Array Original: ", array);

const orderArray = array.sort((smaller, bigger) => smaller - bigger);

console.log("Valores do Array Original Ordenado de Forma Crescente: ", orderArray);