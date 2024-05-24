/*

    Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
    repetição. Escrever cada um deles no formato HH.MM.SS

*/

const prompt = require('prompt-sync')();

const errorMessage = "Horário inválido! Tente novamente!";

const hours = [];

const getTime = () => {

    let hour = parseInt(prompt('Hora: '));
    validateHours(hour);
    let minutes = parseInt(prompt('Minutes: '));
    validateMinutes(minutes);
    let seconds = parseInt(prompt('Seconds: '));
    validateSeconds(seconds);

    hours.push({h: hour, m: minutes, s: seconds});

}

const validateHours = (hour) => {

    if(hour <= 0 || hour > 24){

        console.clear();
        console.log(errorMessage);
        getTime();

    }

}

const validateMinutes = (minutes) => {
    
    if(minutes <= 0 || minutes > 60){

        console.clear();
        console.log(errorMessage);
        getTime();

    }

}

const validateSeconds = (seconds) => {
    
    if(seconds < 0 || seconds > 60){

        console.clear();
        console.log(errorMessage);
        getTime();

    }

}

for(let i = 0; i < 5; i++){

    getTime();

}

console.log(hours)



