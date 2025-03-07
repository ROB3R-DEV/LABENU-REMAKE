//exercicios de escrita de código
//1.
//a)
//10 e 50

//b)
//não apareceria nada.

//2.
//a)
//quer que o usuario insira um texto e converta o texto para letras minusculas, além de consferir se há 
//a string cenoura no texto do usuario.
//b)
//i. true. ii. true. iii) false.

//exercicios de escrita de código
//1.
//a) e b)
const presentation = (nome, idade, cidade, profissão) => {
    console.log(`Eu sou ${nome} tenho ${idade} anos, moro em ${cidade} e sou ${profissão}`)
}

presentation("roberval", "24", "rosana","trader e programador")

//2.
//a) 
const soma = (num1, num2) => {
    const somando = num1+num2
    return somando
}
console.log(soma(7,8))
//b)
const somaBoleano = (num1, num2) => {
    const verific = num1 >= num2
    return verific
}
console.log(somaBoleano(4,4))
//c)
const verifPar = (num) => {
    const verifying = num % 2 === 0
    return verifying
}
console.log(verifPar(5))
//d)
const strings = (string) => {
    console.log(string.length)
    console.log(string.toUpperCase())
}
strings("Roberlenda fazerá live amanhã")

//3.
const somaUsu = (num1, num2) => {
    return num1 + num2
}
const subtracao = (num1, num2) => {
    return num1 - num2 
}
const multip = (num1, num2) => {
    return num1 * num2
}
const divisao = (num1, num2) => {
    return num1 / num2
}

const numeroUsu = Number(prompt("Digite um numero"))
const outroNumUsu = Number(prompt("digite outro numero"))

console.log(somaUsu(numeroUsu,outroNumUsu))
console.log(subtracao(numeroUsu,outroNumUsu))
console.log(multip(numeroUsu,outroNumUsu))
console.log(divisao(numeroUsu,outroNumUsu))