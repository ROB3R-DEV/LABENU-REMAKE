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
  const altura = Number(prompt("Qual a altura do retangulo?"))
  const largura = Number(prompt("Qual a largura do retangulo?"))
  const area = altura*largura
  console.log(area)  
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Qual o ano atual?"))
  const anoNascimento = Number(prompt("Qual o ano de seu nascimento?"))
  const idade = anoAtual-anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso/(altura*altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual o seu nome?")
  const idade = Number(prompt("Quala sua idade?"))
  const email = prompt("Qual o seu email?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Qual sua primeira cor favorita?")
  const cor2 = prompt("Qual sua segunda cor favorita?")
  const cor3 = prompt("Qual sua terceira cor favorita?")
  const coresFavoritas = []
  coresFavoritas.push(cor1, cor2, cor3)
  console.log(coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo/valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroArray = array[0]
  array[0] = array[array.length-1]
  array[array.length-1] = primeiroArray 
  
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  
  let minuscula1 = string1.toLowerCase()
  let minuscula2 = string2.toLowerCase()
  return minuscula1 === minuscula2

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