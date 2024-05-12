/*

    Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
    carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
    cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
    (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
    mostre o preço a ser pago de acordo com os dados a seguir:

        -> Carros populares

            - Até 100 Km percorridos: R$ 0,20 por Km
            - Acima de 100 Km percorridos: R$ 0,10 por Km

        -> Carros de luxo
            - Até 200 Km percorridos: R$ 0,30 por Km
            - Acima de 200 Km percorridos: R$ 0,25 por Km

*/

const prompt = require('prompt-sync')();

const init = () => {

    console.log("===== ALUGUEL DE CARROS =====");
    console.log("Qual tipo de carro você deseja alugar?");
    console.log("1 - Carro de Luxo");
    console.log("2 - Carro Popular");
    console.log("=============================");

    let carOption = parseInt(prompt("Digite a sua opção: "));
    let rentalValue = 0;

    switch(carOption){

        case 1:

            rentalValue = luxuryCarRentalPrice();
            console.log("Valor do aluguel: R$", rentalValue.toFixed(2));
            break;

        case 2:

            rentalValue = popularCarRentalPrice();
            console.log("Valor do aluguel: R$", rentalValue.toFixed(2));
            break;

        default:

            console.clear();
            console.log("Opção Inválida! Tente Novamente!");
            init();
            break;

    }

}

const popularCarRentalPrice = () => {
    
    let rentalDaysQuantity = parseInt(prompt("Quantos dias de aluguel? ")); 
    let kmTraveledQuantity = parseInt(prompt("Quantos KM's percorridos? "));

    const totalValuePerDay = 90 * rentalDaysQuantity;
    let totalValueKmTraveled = 0;
    let totalRentalValue = 0;

    if(rentalDaysQuantity < 0 || kmTraveledQuantity < 0 || isNaN(rentalDaysQuantity) || isNaN(kmTraveledQuantity)){

        console.clear();
        console.log("Valores Inválidos! Tente Novamente!");
        init();

    }

    if(kmTraveledQuantity <= 100){

        totalValueKmTraveled = 0.20 * kmTraveledQuantity;

        totalRentalValue = totalValuePerDay + totalValueKmTraveled;

        return totalRentalValue;

    }else{

        totalValueKmTraveled = 0.10 * kmTraveledQuantity;

        totalRentalValue = totalValuePerDay + totalValueKmTraveled;

        return totalRentalValue;

    }

}

const luxuryCarRentalPrice = () => {

    let rentalDaysQuantity = parseInt(prompt("Quantos dias de aluguel? ")); 
    let kmTraveledQuantity = parseInt(prompt("Quantos KM's percorridos? "));

    const totalValuePerDay = 150 * rentalDaysQuantity;
    let totalValueKmTraveled = 0;
    let totalRentalValue = 0;

    if(rentalDaysQuantity < 0 || kmTraveledQuantity < 0 || isNaN(rentalDaysQuantity) || isNaN(kmTraveledQuantity)){

        console.clear();
        console.log("Valores Inválidos! Tente Novamente!");
        init();

    }

    if(kmTraveledQuantity <= 200){

        totalValueKmTraveled = 0.30 * kmTraveledQuantity;

        totalRentalValue = totalValuePerDay + totalValueKmTraveled;

        return totalRentalValue;

    }else{

        totalValueKmTraveled = 0.25 * kmTraveledQuantity;

        totalRentalValue = totalValuePerDay + totalValueKmTraveled;

        return totalRentalValue;

    }

}

init();