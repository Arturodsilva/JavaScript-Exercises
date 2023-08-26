/*## Conversor de Medidas

Escreva um programa em javascript que funcione como um conversos de medidas. O programa 
deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de
medida esse valor deve ser convertido. As opções são:

- milímetro (mm)
- centímetro (cm)
- decímetro (dm)
- decâmetro (dam)
- hectômetro (hm)
- quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o 
resultado.
O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira 
uma opção diferente das disponíveis (use o break e o default para isso)*/

/*Primeiro definirei as variáveis de entrada do valor em metros e a segunda para o usuário
selecionar qual unidade de medida deseja converter*/
const measure = parseFloat(prompt("Digite uma medida em metros: "))
const unit = prompt(
    "Para qual unidade de medida deseja converter?" +
    "\n1 - Milímetros (mm)" +
    "\n2 - Centímetros (cm)" +
    "\n3 - Decímetros (dm)" +
    "\n4 - Decâmetros (dam)" +
    "\n5 - Hectômetro (hm)" +
    "\n6 - Quilômetro (km)"
    )    

/*Agora vou utilizar a estrutura de controle "Switch" para que o usuário possa selecionar
a unidade que deseja converter*/
switch (unit) {
    case "1":
        alert("Resultado: " + measure + "m = " + measure * 1000 + "mm");
        break
    case "2":
        alert("Resultado: " + measure + "m = " + measure * 100 + "cm")  
        break
    case "3":
        alert("Resultado: " + measure + "m = " + measure * 10 + "dm")
        break
    case "4":
        alert("Resultado: " + measure + "m = " + measure / 10 + "dam")
        break
    case "5":
        alert("Resultado: " + measure + "m = " + measure / 100 + "hm")
        break
    case "6":
        alert("Resultado: " + measure + "m = " + measure / 1000 + "km")
        break
    default:
        alert("Opção inválida! Tente novamente.")
        break
}

/*Este código poderia ficar dentro de um laço de repetição, onde eu poderia adicionar mais
uma opção para sair e que, caso não fosse selecionada, poderia ficar repetindo até que o usuário
não quisesse mais.*/