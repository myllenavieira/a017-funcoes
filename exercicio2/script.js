//A)
const soma = (num1, num2) => {
    let somatorio = num1 + num2
    console.log(somatorio);
}
soma(1,2);

//B)
const comparation = (num1, num2) => {
    if(num1 >= num2){
        return true;
    }else{
        return false;
    } 
}
console.log(comparation(1,2));

//C)
const resto = (numero) => {
    if (numero % 2 === 0) {
        return "O número é par";
    }else{
        return "O número é ímpar";
    }
}
console.log(resto(8));

//D)
const formation = (string) => {
    const tamanho = string.length;
    string = string.toUpperCase();
    return `A string ${string} tem tamanho de ${tamanho} caracteres`;
}
console.log(formation("Eu"));
