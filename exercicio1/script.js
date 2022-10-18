// function olaPessoa(nome) { //escolha de um nome arbitrário
//     console.log(`Olá ${nome}!`);
// }
// olaPessoa('Myllena');

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function tabuada(numero) {
//     for (const i in array) {
//         console.log(`${numero} * ${Number(i)+1} = ${numero*(Number(i)+1)}`);      
//     }
// }
// tabuada(6);

const greeting = (nome) => { //escolha de um nome arbitrário
    return `Olá ${nome}!`;
}
console.log(greeting('Myllena'));

const tabuada = (numero) => {
    for (let i=1; i <11; i++){
        console.log(`${numero} * ${i} = ${numero*i}`);
    }
}
tabuada(6);
