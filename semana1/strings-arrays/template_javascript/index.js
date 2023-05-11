//Exercicios de interpretação de codigo
//1.
//undefined, null, 11, 3, [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13], 9
//2.
//SUBI NUM ÔNIBUS EM MIRROCOS 27

//Exercicios de escrita de codigo
//1.
const nomeUsuario = prompt("Qual o seu nome?")
const emailUsuario = prompt("Qual o seu email?")
const mensagem = `O email ${emailUsuario} foi cadastrado com sucesso.
Seja bem vindo(a), ${nomeUsuario}!`

console.log(mensagem)

//2.
let comidas = ["pizza", "lanche", "lasanha", "frango", "macarrão"]
console.log(comidas)
console.log("Essas são minhas comidas favoritas:")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])
let comidaUsuario = prompt("Qual sua comida favorita?")
comidas[1] = comidaUsuario
console.log(comidas)

//3.
let listaDeTarefas = []
const tarefa1 = prompt("Digite uma tarefa que vc faz no dia: ")
listaDeTarefas.push(tarefa1)
const tarefa2 = prompt("Digite uma tarefa que vc faz no dia: ")
listaDeTarefas.push(tarefa2)
const tarefa3 = prompt("Digite uma tarefa que vc faz no dia: ")
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

let tarefaFeita = Number(prompt("qual tarefa vc ja fez? "))
listaDeTarefas.splice(tarefaFeita,1)

console.log(listaDeTarefas)