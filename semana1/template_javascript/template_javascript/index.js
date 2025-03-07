//exercicios de interpretação de código
//1)
//a. undefined
//b. null
//c. 11
//d. 3
//e. 3,19,5,6,7,8,9,10,11,12,13
//f. 9

//2)
//SUBI NUM ÔNIBUS EM MIRROCOS 27

//EXERICICIOS DE ESCRITA DE CODIGO
//1.
let nomeUsuario = prompt("qual o seu nome?")
let emailUsuario = prompt("qual o seu email?")

console.log(`O email ${emailUsuario} foi cadastrado com sucesso. Seja bem vindo(a), ${nomeUsuario}!`);

//2.
let favComidas = ["lasanha","frango", "pizza", "macarrão", "lanche"];
console.log(favComidas);
console.log("Essas são as minhas comidas preferidas: ")
console.log(favComidas[0])
console.log(favComidas[1])
console.log(favComidas[2])
console.log(favComidas[3])
console.log(favComidas[4]);
 
let comidaUsuario = prompt("sua comida: ")
favComidas[1] = comidaUsuario
console.log(favComidas);

//3.
let listaDeTarefas = []
let tarefa1 = prompt("digite uma tarefa: ")
let tarefa2 = prompt("digite uma tarefa: ")
let tarefa3 = prompt("digite uma tarefa: ")

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)

let tarefaIndice = prompt("digite 0, 1 ou 2 para a tarefa que já realizou: ")
listaDeTarefas.splice(tarefaIndice, 1)
console.log(listaDeTarefas)
