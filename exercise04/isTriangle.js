/*

    Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
    comprimentos e diga se é possível formar um triângulo com essas retas.
    Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
    lado deve ser menor que a soma dos outros dois.

*/

const prompt = require('prompt-sync')();

const isTriangle = (a, b, c) => {

    if(a < b + c && b < a + c && c < a + b ){
        return true;
    }else{
        return false;
    }

}

let firstSegment = parseFloat(prompt("1° Segmento: "));
let secondSegment = parseFloat(prompt("2° Segmento: "));
let thirdSegment = parseFloat(prompt("3° Segmento: "));

if(isTriangle(firstSegment, secondSegment, thirdSegment)){

    console.log("É possível formar um triângulo com essas medidas!");

}else{

    console.log("Não é possível formar um triângulo com essas medidas!");
    if(isNaN(firstSegment) || isNaN(secondSegment) || isNaN(thirdSegment)){
        console.log("Pois, os valores dispostos são inválidos!");
    }

}
