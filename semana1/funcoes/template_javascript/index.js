//Exercicios de interpretação de código
//1.
//a) 10 50
//b) nada.
//2.
//a) Essa função muda o texto todo para minusculo e retorna 
//true ou false se tem a palavra cenoura no texto.
//b) i.eu gosto de cenoura true
//ii.cenoura é bom pra vista true
//iii. cenouras crescem na terra false

//Exercicios de escrita de código
//1.
//a)
// const imprimeMensagem = () => {
//     console.log("Eu sou Roberval, tenho 22 anos, moro em Primavera e sou estudante")
// }
// //b)
// const imprimeInformacoes = (nome, idade, cidade, profissao) => {
//     return(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
// }
// console.log(imprimeMensagem)
// console.log(imprimeInformacoes("roberval", 22, "primavera", "estudante"))

//2.
//a)
// const soma = (num1, num2) => {
//     const conta = num1 + num2
//     return conta
// }
// console.log(soma(43, 64))
// //b)
// const maiorIgual = (numero1, numero2) => {
//     const verif = numero1 >= numero2
//     return verif
// }
// console.log(maiorIgual(43, 64))
// //c)
// const parOuImpar = (numeroBoolean) => {
//     const par = numeroBoolean%2 === 0
//     return par 
// }
// console.log(parOuImpar(74))
// //d)
// const tamanhoMaiusculo = (texto) => {
//     const mensagemMaiusculo = texto.toUpperCase()
//     const tamanhoMensagem = texto.length
//     console.log(tamanhoMensagem, mensagemMaiusculo)
    
// }
// console.log(tamanhoMaiusculo("Eu sou a lenda"))

//3.
const soma = (num1, num2) => {
        const conta1 = num1 + num2
        return conta1
    }
const subtracao = (num3, num4) => {
    const conta2 = num3 - num4
    return conta2
}
const multiplicacao = (num5, num6) => {
    const conta3 = num5 * num6
    return conta3
}
const divisao = (num7, num8) => {
    const conta4 = num7 / num8
    return conta4
}
const numero1Usuario = Number(prompt("Digite um numero:"))
const numero2Usuario = Number(prompt("Digite outro numero:"))

console.log("Numeros inseridos:",numero1Usuario,numero2Usuario)
console.log("Soma:", soma(numero1Usuario,numero2Usuario))
console.log("Diferença:", subtracao(numero1Usuario,numero2Usuario))
console.log("Multiplicação:", multiplicacao(numero1Usuario,numero2Usuario))
console.log("Divisão:", divisao(numero1Usuario,numero2Usuario))



