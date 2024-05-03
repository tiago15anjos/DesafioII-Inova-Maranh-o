1. **Desenvolva uma função `Operacao`**:
   - A função deve receber 2 parâmetros.
   - Após as operações, imprime:
     - A soma da exponenciação.
     - O resto da divisão do primeiro pelo segundo.
     - A subtração do segundo pelo primeiro.

2. **Implementação de operação bancária**:
   a) **Algoritmo de cálculo de rendimento**:
      - Solicite ao usuário o valor aplicado e a quantidade de meses em aplicação, considerando uma taxa de juros mensal de 0,6022%.
      - Imprima o valor inicialmente aplicado, a quantidade de meses e o valor final com acréscimo de juros em Template String: 
        **"A quantia de R\$[CapitalAplicado] aplicada em [TempoDeAplicacao] meses, rendeu R\$[ValorRendimento] a juros de [TaxaDeJuros]."**
      - Se o valor informado for inválido, exiba: 
        **"Valor informado inválido! Por favor, informe o valor depositado na poupança."**
      - Solicite novamente até que um valor válido seja informado.

   b) **Algoritmo para capital específico**:
      - Se o capital aplicado for entre R\$999,99 e R\$10.000,00, e o tempo de aplicação for entre 5 e 12 meses, aplique uma taxa de rendimento de 2%.
      - Exiba em Template String: 
        **"A quantia de R\$[CapitalAplicado] aplicada em [TempoDeAplicacao] meses, rendeu R\$[ValorRendimento]."**
      - Se o valor informado for inválido, alerte o usuário e solicite novamente os dados.

   c) **Algoritmo para poupança de alto valor**:
      - Se o valor da poupança for entre R\$50.000,00 e R\$100.000,00 e o tempo de aplicação for entre 12 e 24 meses, aplique uma taxa de 5% ou 10% conforme especificado.
      - Imprima: 
        **"A poupança de R\$[CapitalAplicado] aplicada em [TempoDeAplicacao] meses, rendeu R\$[ValorRendimento]"**
      - Se o valor informado for menor que 0 ou inválido, exiba um alerta e solicite novamente os dados.

3. **Desenvolvimento de um jogo de acerto**:
   - O jogo deve criar um número secreto e solicitar ao usuário que chute um número entre 20 e 30.
   - Se o chute for correto, exiba uma mensagem de acerto.
   - Se for incorreto, exiba uma mensagem de erro e solicite outro número dentro do intervalo.
   - O jogo oferece 3 tentativas, após as quais deve exibir uma mensagem de tentativas esgotadas e finalizar.
