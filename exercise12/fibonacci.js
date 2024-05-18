/*

    Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
    Ex.: 1, 1, 2, 3, 5, 8, 13, 21

*/

const fibonacci = (n) => {

    if(n < 0) return [];

    if(n === 1) return [0];

    const sequenceFibonacci = [0, 1];

    for (let i = 2; i < n; i++) {
        sequenceFibonacci.push(sequenceFibonacci[i - 1] + sequenceFibonacci[i - 2]);
    }

    return sequenceFibonacci;

}

console.log(fibonacci(10));

