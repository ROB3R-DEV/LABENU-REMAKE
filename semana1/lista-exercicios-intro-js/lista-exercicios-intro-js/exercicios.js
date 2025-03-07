// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let alturaUsu = Number(prompt("digite a altura"))
  let larguraUsu = Number(prompt("digite a largura"))
  let calcArea = alturaUsu * larguraUsu
  console.log(calcArea)
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt("qual o ano atual?"))
  let anoNascimento = Number(prompt("qual seu ano de nascimento?"))
  let idadeUsu = anoAtual - anoNascimento
  console.log(idadeUsu)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let calcImc = peso/(altura*altura)
  return calcImc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nomeUsu = prompt("qual o seu nome?")
  let idadeUsu = prompt("qual a sua idade?")
  let emailUsu = prompt("qual o seu email?")
  console.log(`Meu nome é ${nomeUsu}, tenho ${idadeUsu} anos, e o meu email é ${emailUsu}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let corUm = prompt("digite sua cor favorita")
  let corDois = prompt("digite outra cor favorita")
  let corTRes = prompt("digite outra cor favorita")
  let arrayCores = []
  arrayCores.push(corUm, corDois, corTRes)
  console.log(arrayCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  let stringMaiuscula = string.toUpperCase()
  return stringMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let calcIngressos = custo/valorIngresso
  return calcIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let stringsIguais = string1.length === string2.length
  return stringsIguais
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  let primeiroElemento = array[0]
  return primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  let ultimoElemento = array[array.length-1]
  return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let novoArray = array.slice(0, array.length-1)

  array[0] = array[array.length-1]
  array[array.length-1] = novoArray[0]
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let stringIgual = string1.toUpperCase() === string2.toUpperCase()
  return stringIgual
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}