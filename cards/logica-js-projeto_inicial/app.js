alert('Bem vindo ao jogo de adivinhação!');
let numeroSecreto = 5;
console.log('Número secreto é:', numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute for diferente do número secreto
while (chute != numeroSecreto) {
    chute = prompt('escolha um número entre 1 e 30');
    //se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`isso aí, você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
    } else {
        if (chute > numeroSecreto) {
            alert(`você errou! o número secreto é menor que ${chute}`);
        } else {
            alert(`você errou! o número secreto é maior que ${chute}`);
        }
        tentativas++;
    }

}