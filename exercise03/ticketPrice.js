/*

    Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
    Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
    R$ 0.45 para viagens mais longas.

*/

const prompt = require('prompt-sync')();

const showTicketPrice = (distance) => {
       
    if(isNaN(distance) || distance <= 0.00){
        console.log("Valor inválido!");
        distance = parseFloat(prompt("Qual a distância que você deseja percorrer (KM):  "));
        showTicketPrice(distance);
    }else if(distance <= 200){
        let ticketPrice = distance * 0.50;
        console.log("Valor da passagem: R$", ticketPrice.toFixed(2));
    }else{
        let ticketPrice = distance * 0.45;
        console.log("Valor da passagem: R$", ticketPrice.toFixed(2));
    }

}

let distance = parseFloat(prompt("Qual a distância que você deseja percorrer (KM):  "));

showTicketPrice(distance);