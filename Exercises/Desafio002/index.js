/*Escreve um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).

Após calcular os resultados o programa deve exibi-los na tela.*/
//Iniciaremos declarando duas variáveis que serão armazenados os números de entrada do usuário para realizar as operações
alert("Bem-vindos(as) ao programa de Cálculo das 4 Operações!")
const input1 = prompt("Digite o primeiro valor: ") //Os valores de entrada sempre serão recebidos como string
const input2 = prompt("Digite o segundo valor: ")

//Então utilizaremos a função "parseFloat()" para converter os valores de entrada para número de ponto flutuante
const x = parseFloat(input1)
const y = parseFloat(input2)

//Com os números em mãos vamos calcular as 4 operações e apresentá-los na tela através do "alert()"
const sum = x + y
const subtraction = x - y
const multiplication = x * y
const division = x / y

alert(
    "Resultados:\n" + 
    "\nSoma: " + sum +
    "\nSubtração: " + subtraction +
    "\nMultiplicação: " + multiplication +
    "\nDivisão: " + division 
    )