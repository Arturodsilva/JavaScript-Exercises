/*Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)*/
//Iniciarei declarando as variáveis onde serão armazenadas os modelos e as velocidades dos veículos
const model1 = prompt("Informe o modelo do primeiro veículo: ")
const speed1 = parseFloat(prompt("Qual a velocidade do(a) " + model1))
const model2 = prompt("Informe o modelo do segundo veículo: ")
const speed2 = parseFloat(prompt("Qual a velocidade do(a) " + model2))

//Com os dados coletados, utilizarei de condições para verificar qual foi o mais rápido e apresentar a informação na tela
if (speed1 > speed2) {
    alert(model1 + " foi mais rápido!")
} else if (speed2 > speed1) {
    alert(model2 + " foi mais rápido!")
} else {
    alert(model1 + " e " + model2 + " empataram!")
}

