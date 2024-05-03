function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numeroSecreto = numeroAleatorio(20, 30);
let tentativas = 3;

while (tentativas > 0) {
  let numeroEscolhido = parseInt(prompt("Informe um número entre 20 e 30:"));
  if (numeroEscolhido < 20 || numeroEscolhido > 30) {
    alert("O número escolhido não faz parte do intervalo determinado. Por favor, escolha um número entre 20 e 30.");
    continue;
  }

  if (numeroEscolhido === numeroSecreto) {
    alert(`Parabéns! O número escolhido ${numeroEscolhido} é igual ao número sorteado ${numeroSecreto}.`);
    break;
  } else {
    tentativas--;
    alert(`O número escolhido ${numeroEscolhido} é diferente do número sorteado. Você tem ${tentativas} tentativas restantes.`);
  }
}

if (tentativas === 0) {
  alert("Você não tem mais tentativas. Jogo encerrado.");
}

