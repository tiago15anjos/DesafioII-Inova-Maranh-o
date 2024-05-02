function Operacao(a, b) {
  let exponenciacao = Math.pow(a, b);
  let restoDivisao = a % b;
  let subtracao = b - a;
  
  let mensagemExponenciacao = "Soma da exponenciação: " + exponenciacao;
  let mensagemResto = "Resto da divisão do primeiro pelo segundo: " + restoDivisao;
  let mensagemSubtracao = "Subtração do segundo pelo primeiro: " + subtracao;
  
  console.log(mensagemExponenciacao);
  console.log(mensagemResto);
  console.log(mensagemSubtracao);

  alert(mensagemExponenciacao);
  alert(mensagemResto);
  alert(mensagemSubtracao);
}
