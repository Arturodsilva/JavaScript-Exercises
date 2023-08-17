/*Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:

- o primeiro nome
- o sobrenome
- o campo de estudo
- o ano de nascimento

Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento).*/

//Primeiro criei um html para apresentar e solicitar as informações no navegador.
//Após isso, crei um arquivo Js onde vamos começar declarando as variáveis necessárias par armazenar as informações que exibiremos mais tarde
const primeiroNome = prompt("Inform o primeiro nome do recruta: ")
const sobrenome = prompt("Informe o segundo nome do recruta: ")
const campoDeEstudo = prompt("Qual é o campo de estudo do recruta? ")
const anoDeNascimento = prompt("Qual é o ano de nascimento do recruta? ")

//Com estas informações armazenadas já seria possível verificá-las no terminal através da função "console.log(variável)"
//O próximo passo é exibir na tela as informações armazenadas nas variáveis através da função alert()
alert(
    "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " + primeiroNome + " " + sobrenome +
    "\nCampo de estudo: " + campoDeEstudo +
    "\nIdade: " + (2023 - anoDeNascimento)
    )

//Na função alert() utilizei àspas para exibir a mensagem desejada concatenando com as variáveis para complementar o texto.
