/*Exercicos de interpretação de código
1. 
10
10 5
2.
10 10 10
3.
cargaHoraria e valorDiaria*/
/*let nome = prompt("Qual o seu nome?")
let idade = prompt("Qual a dua idade?")
console.log(typeof nome, typeof idade)
console.log("Olá", nome, "você tem", idade, "anos.")*/

//exercicio1
let bichoDeEstimacao = ("você tem um bicho de estimação?")
let ehEstudante = ("Você é um estudante?")
let filmeSuperMario = ("Você já assistiu o filme do super mario?")

let sim = ("-Sim")
let nao = ("-Não")

console.log(bichoDeEstimacao,nao)
console.log(ehEstudante, sim)
console.log(filmeSuperMario, nao)

//exercicio 2
let a = 10
let b = 25
let c = 10

a=b
b=c

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b) 

//exercicio 3
let primeiroNumero = prompt("Digite um numero:")
let segundoNumero = prompt("Digite outro numero:")
let primeiroNumeroNumber = Number(primeiroNumero)
let segundoNumeronumber = Number(segundoNumero)

let soma = primeiroNumeroNumber + segundoNumeronumber
let multiplicacao = primeiroNumeroNumber * segundoNumeronumber

console.log(soma)
console.log(multiplicacao)