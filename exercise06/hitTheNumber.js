/*

    Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
    tentar descobrir qual foi o valor sorteado.

*/

const prompt = require('prompt-sync')();

const gameInit = () => {

    let playerMove = parseInt(prompt("Adivinhe o número entre 1 e 5: "));

    if(playerMove < 1 || playerMove > 5 || isNaN(playerMove)){

        console.clear();
        console.log("Valor Inválido! Tente Novamente!");
        gameInit();

    }else{
    
        startGame(playerMove);
        
    }

}

const startGame = (playerMove) => {

    if(isCorrectNumber(playerMove)){

        console.log("Você acertou o número em cheio!");

    } else {

        console.clear();
        console.log("Você não acertou o número! Tente novamente!");
        gameInit();

    }

}

const isCorrectNumber = (playerMove) => {

    if(playerMove === randomNumber()){

        return true;

    } else {

        return false;

    }

}

const randomNumber = () => {

    let numbers = [1, 2, 3, 4, 5];

    let drawnNumberPosition = Math.floor(Math.random() * numbers.length);

    let drawnNumber = numbers[drawnNumberPosition];

    return drawnNumber;

}

gameInit();




