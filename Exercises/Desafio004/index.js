/*## Cálculo de Dano

Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

- Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.*/
//Iniciarei declarando as variáveis que utilizaremos neste "game"
const attackChar = parseFloat(prompt("Insira a pontuação de ataque do personagem que irá atacar: "))
const defenseChar = parseFloat(prompt("Agora insira a pontuação do personagem que irá defender: "))
let defenseCharLife = parseFloat(prompt("Quantos pontos de vida o personagem defensor possui? "))
const shield = prompt("O defensor possui um escudo? (Sim/Não) ")
let damage = 0
defenseCharLifeDamaged = defenseCharLife

//Agora vou utilizar condições para, de acordo com as regras, cálcular o dano causado
if (attackChar > defenseChar && shield === "Não") {
    damage = attackChar - defenseChar
} else if (attackChar > defenseChar && shield  === "Sim") {
    damage = (attackChar - defenseChar) / 2
}

defenseCharLifeDamaged -= damage

//Por fim, apresentarei na tela as informações de cada variável coletada e os valores finais
alert(
    "Game sem nome =D\n" +
    "\nPontos do personagem atacante: " + attackChar +
    "\nPontos do personagem defensor: " + defenseChar +
    "\nPontos de vida do personagem defensor: " + defenseCharLife +
    "\nPossui escudo: " + shield +
    "\nDano causado: " + damage +
    "\nPontos de vida do personagem defensor após ataque: " + defenseCharLifeDamaged
    )


//Um problema deste programa é que a variável "shield" não recebe um valor boleano, mas uma string que precisa ser exatamente igual a Sim ou Não.
//Caso seja escrita apenas com letras maiúsculas ou minúsculas não passará corretamente pelas condições.
