/*

    Escreva um programa para calcular a redução do tempo de vida de um fumante.
    Pergunte a quantidade de cigarros fumados por dia e quantos anos ele já fumou.
    Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
    vida um fumante perderá e exiba o total em dias.

*/

const prompt = require('prompt-sync')();  

const numberOfLostDays = (totalCigarettesPerDay, totalYearsInAddiction) => {

    const TOTAL_DAYS_PER_YEAR = 365;
    const TOTAL_LOST_MINUTES_PER_CIGARETTE = 10;
    const TOTAL_MINUTES_IN_A_DAY = 1440;

    let totalOfCigarettesSmokedDuringAddiction = totalCigarettesPerDay * totalYearsInAddiction * TOTAL_DAYS_PER_YEAR;

    let totalMinutesOfLifeLost = totalOfCigarettesSmokedDuringAddiction * TOTAL_LOST_MINUTES_PER_CIGARETTE;

    let converterMinutesToDays = totalMinutesOfLifeLost / TOTAL_MINUTES_IN_A_DAY;

    let totalLostDays = Math.floor(converterMinutesToDays);

    return totalLostDays;

}

let numberOfCigarettesPerDay = parseInt(prompt("Quantos cigarros você fuma por dia? "));
let numberOfYearsInAddiction = parseInt(prompt("Quantos anos você já fumou? "));

let totalDaysOfLifeLost = numberOfLostDays(numberOfCigarettesPerDay, numberOfYearsInAddiction);

console.log("Total de dias perdidos durante o vício (aproximadamente):", totalDaysOfLifeLost, "dias.");

