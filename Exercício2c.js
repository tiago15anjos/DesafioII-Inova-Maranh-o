function rendimentoC() {
    let capitalAplicado = parseFloat(prompt("Por favor, informe o valor depositado na poupança:"));
    let tempoDeAplicacao = parseInt(prompt("Informe a quantidade de meses da aplicação:"));

    while (isNaN(capitalAplicado) || capitalAplicado <= 0 || isNaN(tempoDeAplicacao) || tempoDeAplicacao <= 0) {
        alert("Valor informado inválido! Por favor, informe o valor depositado na poupança!");
        capitalAplicado = parseFloat(prompt("Por favor, informe novamente o valor depositado na poupança:"));
        tempoDeAplicacao = parseInt(prompt("Informe novamente a quantidade de meses da aplicação:"));
    }

    let taxaDeJuros;

    if (capitalAplicado > 50000 && capitalAplicado <= 100000 && tempoDeAplicacao > 12 && tempoDeAplicacao <= 24) {
        taxaDeJuros = 5 / 100; 
    } else if (tempoDeAplicacao >= 12 && tempoDeAplicacao <= 24) {
        taxaDeJuros = 10 / 100; 
    } else {
        taxaDeJuros =  0.6022 / 100; 
    }

    let valorFinal = capitalAplicado * Math.pow(1 + taxaDeJuros, tempoDeAplicacao);
    let valorRendimento = valorFinal - capitalAplicado;

    alert(`A poupança de R$${capitalAplicado.toFixed(2)} aplicada em ${tempoDeAplicacao} meses, rendeu R$${valorRendimento.toFixed(2)}.`);
}

rendimentoC();
