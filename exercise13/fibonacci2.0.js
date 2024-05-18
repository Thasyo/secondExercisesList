/*

    Crie um programa que preencha automaticamente (usando lógica, não apenas
    atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
    da sequência de Fibonacci

*/

const fibonacci = () => {

    const sequenceFibonacci = [0, 1];

    for (let i = 2; i < 15; i++) {
        sequenceFibonacci.push(sequenceFibonacci[i - 1] + sequenceFibonacci[i - 2]);
    }

    return sequenceFibonacci;

}

console.log(fibonacci());