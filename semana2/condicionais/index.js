//Exercicios de interpretação de código
//1.a)
// o código testa se o numero é divisivel por 2 ou não
//b)
// o código imprime "passou no teste" se o numero é par 
//c)
//para os numeros impares
//2.a) para o programa retornar um preço com base na fruta que o 
//usuario escolhe.
//b) O preço da fruta Maça é R$ 2,25
//c) ele dá o valor da fruta com o preço do default, então
// o código vai no default para inserir o valor da variavel se 
// não tiver o break
// 3.a)
//transformando o valor do prompt em um number.
//b) para o num 10, imprime "Esse número passou no teste", e que mensagem 
//não está declarado. no -10 só imprime que mensagem não foi declarado
//c) o mensagem está declarado no escopo do if, e não pode ser acessado 
//diretamente no escopo global.

//Exercicios de escrita de código
//1.
const idade = Number(prompt('qual a sua idade?'))
if(idade>=18){
    console.log("Você pode dirigir")
}else {
        console.log("Você não pode dirigir.")
}
//2.
const turno = prompt("qual turno vc estuda? M (matutino) ou V (Vespertino) ou N (Noturno)")
if(turno === "M"){
    console.log("Bom Dia")
}else if(turno === "V"){
    console.log("Boa Tarde")
}else{
    console.log("Boa Noite")
}
//3.
switch(turno){
    case 'M':
        console.log("Bom Dia")
    break;
    case 'V':
        console.log("Boa Tarde")
    break;
    default:
        console.log("Boa Noite")
    break;
}
//4.
const genero = prompt("qual o genero do filme?")
const valorIngresso = Number(prompt("qual o valor do ingresso?"))
if(genero === 'fantasia' && valorIngresso < 15){
    console.log("Bom filme!")
}else{
    console.log("Escolha outro filme :(")
}


