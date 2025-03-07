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
let c = 25

b=a
a=c

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b) 

//exercicio 3

let primeiroNumeroResteste = Number(prompt("qual o primeiro numero: "))
let segundoNumeroReteste = Number(prompt("qual o segundo numero: "))

let somaReteste = primeiroNumeroResteste + segundoNumeroReteste
let multPli = primeiroNumeroResteste * segundoNumeroReteste

console.log("O primeiro número somado ao segundo número resulta em:", somaReteste)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", multPli)


const mySpace = {
    nome: "roberval",
    idade: 24,
    email: "roberval@gmail.com"
}

const acessar = mySpace.idade;