//Exercicios de interpretação de código
//1.
//false
//false
//true
//boolean
//2 e 3.
//as variaveis tem que ser transformadas para number, senão será impressoo primeiro 
//numero e do lado o segundo sem soma-los.

//Exercicios de escrita de código
//1.
const nome = prompt("Qual o seu nome?")
const idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo(a)"))
const minhaIdade = 22
console.log("Sua idade é maior do que a do seu melhor amigo?", minhaIdade>idadeMelhorAmigo )
console.log(minhaIdade-idadeMelhorAmigo)

//2.
const numeroPar = Number(prompt("Digite um numero par: "))
let resto = numeroPar%2
console.log(resto) //o resto é sempre 0
//se colocar impar o resto é sempre 1

//3.
const idade = Number(prompt("qual a sua idade em anos?"))
const idadeMeses = idade*12
const idadeDias = idade*365
const idadeHoras = idade*8760

console.log(idadeMeses)
console.log(idadeDias)
console.log(idadeHoras)

//4.
const numeroUm = Number(prompt("Digite um numero:"))
const numeroDois = Number(prompt("Digite outro numero:"))

console.log("O primeiro numero é maior que segundo?", numeroUm>numeroDois)
console.log("O primeiro numero é igual ao segundo?", numeroUm===numeroDois)
console.log("O primeiro numero é divisível pelo segundo?", numeroUm%numeroDois===0)
console.log("O segundo numero é divisível pelo primeiro?", numeroDois%numeroUm===0)
