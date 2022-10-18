const soma = (num1, num2) => {
    return num1 + num2;
}
const subtracao = (num1, num2) => {
    return num1 - num2;
}
const multiplicacao = (num1, num2) => {
    return num1 * num2;
}
const divisao = (num1, num2) => {
    return num1 / num2;
}

let num1 = +prompt("Digite seu primeiro número.");
let num2 = +prompt("Digite seu segundo número.");
console.log(`Soma: ${soma(num1, num2)}
Subtração: ${subtracao(num1, num2)}
Multiplicação: ${multiplicacao(num1, num2)}
Divisão: ${divisao(num1, num2)}`);
