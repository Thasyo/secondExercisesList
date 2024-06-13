/*

    Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
    quantidade de elementos negativos da linha correspondente de M.

*/
const randomNumber = (min, max) => {

    const number = Math.floor(Math.random() * (max - min + 1)) + min;

    return number;

}

let M = [];
let C = [];
let quantityNegativeNumbers = 0;

for(let i = 0; i < 6; i++){

    let row = [];
    
    for(let j = 0; j < 8; j++){

        let number = randomNumber(-10, 10);

        row.push(number);

        if(number < 0){

            quantityNegativeNumbers++;

        }

    }
    M.push(row);
    C.push(quantityNegativeNumbers);
    quantityNegativeNumbers = 0;

}

let index = 1;

M.forEach(row => console.log(row.join(' ')));

C.map(i => {

    console.log(`${index++}° Linha da matriz M tem ${i} números negativos.`);

})
