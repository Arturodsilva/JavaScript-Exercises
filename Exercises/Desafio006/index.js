/* Visitando Novas Cidades

Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele 
já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene 
em uma variável, e então continue perguntando se o turista visitou alguma outra cidade 
até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas 
e quais cidades ele visitou.*/

//Iniciarei declarando as variáveis necessárias para fazer o desafio
const turist = prompt("E ai, turista! Qual é o seu nome? ")
let cities = ""
let count = 0
let continuar = prompt("Você já visitou alguma cidade? (Sim/Não)")

/*Agora usarei a estrutura de repetição "while" para criar um loop, perguntando quais cidades
o usuário visitou até que ele responda "Não" e assim finalizar a estrutura.*/
while (continuar === "Sim") {
    let city = prompt("Qual é o nome da cidade visitada?")
    cities += " - " + city + "\n"
    count++
    continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}

/*No final, quando o usuário finalizar a estrutura de repetição, apresentarei o as informações
armazenadas referente a cidades visitadas e quantidade de cidades.*/
alert(
    "Turista: " + turist +
    "\nQuantidade de cidades visitadas: " + count +
    "\nCidades visitadas:\n " + cities
    )