/*

    Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
    h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
    multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

*/

const prompt = require('prompt-sync')();

const showResult = (carSpeed) => {

    const FINE_PRICE_PER_KM = 5.00;
    const SPEED_LIMIT = 80.00;

    if(carSpeed < 0.00 || isNaN(carSpeed)){

        console.log("Conteúdo Inválido!");
        carSpeed = parseFloat(prompt('Velocidade do carro (KM): '));
        showResult(carSpeed);

    }
    
    if(carSpeed > SPEED_LIMIT){

        let trafficTicket = (carSpeed - SPEED_LIMIT) * FINE_PRICE_PER_KM;
    
        console.log("VOCÊ ULTRAPASSOU O LIMITE DE VELOCIDADE!");
        console.log("GERANDO MULTA...");
        console.log("Valor da multa: R$", trafficTicket.toFixed(2));
    
    }

}

let carSpeed = parseFloat(prompt("Velocidade do carro (KM): "));

showResult(carSpeed);

