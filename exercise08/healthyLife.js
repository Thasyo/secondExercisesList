/*

    Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
    podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
    sistema funciona assim:

    - até 10 h de atividade no mês: ganha 2 pontos por hora
    - de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
    - acima de 20 h de atividade no mês: ganha 10 pontos por hora
    - A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
    
    Faça um programa que leia quantas horas de atividade uma pessoa teve por
    mês.
    Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu
    ganhar.

*/

const prompt = require('prompt-sync')();

const init = () => {

    let hoursPerMonth = parseInt(prompt('Quantas horas de atividade física você fez por mês: '));

    if(hoursPerMonth < 0 || isNaN(hoursPerMonth)){

        console.clear();
        console.log("O valor inserido é inválido, tente novamente!");
        init();
    
    }

    let points = getPointsReceived(hoursPerMonth);
    let money = getMoneyReceived(points);

    showResult(points, money);

}

const getPointsReceived = (hours) => {

    let points = 0;

    if(hours <= 10){

        points = 2 * hours;
    
    }else if(hours <= 20){
    
        points = 5 * hours;
    
    }else{
    
        points = 10 * hours;
    
    }

    return points;

}

const getMoneyReceived = (points) => {

    const VALUE_PER_POINTS = 0.05

    let moneyReceived = VALUE_PER_POINTS * points;

    return moneyReceived;

}

const showResult = (points, money) => {

    console.log("Pontos ganhos no mês: ", points);
    console.log("Dinheiro total recebido no mês: R$", money.toFixed(2));

}

init();