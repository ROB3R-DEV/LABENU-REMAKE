// Exercicios de interpretação de codigo
//1.a)
//Matheus Nachtergaele 
//Virginia Cavendish
//Globo 14h
//2.a)
//nome: "Juca", idade: 3, raca: "SRD"
//nome: "Juba", idade: 3, raca: "SRD"
//nome: "Jubo", idade: 3, raca: "SRD"
//b)basicamente cola um objeto e um novo objeto.
//3.a)
//false
//undefined
//b)
//na letra a ele pede que retorne o valor da chave backender
//ja no segundo console ele pede o valor de uma chave que não existe nesse objeto

//Exercicios de escrita de codigo
//1.a)
const pessoa = {
    nome:"Roberval",
    apelidos:["Val","Valzinho","Roberlenda"]
}

const imprimindoPessoa = (pessoa) => {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: 
    ${pessoa.apelidos[0]},${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
}
imprimindoPessoa(pessoa)

//b)
const pessoaModificada = {
    ...pessoa,
    apelidos:["valzão", "rober","capacete"]
}
imprimindoPessoa(pessoaModificada)

//2.
const pessoa1 = {
    nome:"Mariana",
    idade:23,
    profissao:"Médica"
}
const pessoa2 = {
    nome:"Vitória",
    idade:21,
    profissao:"Dentista"
}

const pessoasArray = (objeto) => {
    let array = []
    array.push(objeto.nome,objeto.nome.length,objeto.idade,
        objeto.profissao,objeto.profissao.length)
    console.log(array)
}

pessoasArray(pessoa1)
pessoasArray(pessoa2)

//3.
let carrinho = []
const fruta1 = {
    nome:"Maça",
    disponibilidade: true
}
const fruta2 = {
    nome:"Banana",
    disponibilidade: true
}
const fruta3 = {
    nome:"Laranja",
    disponibilidade: false
}
//c)
function inserindoNoCarrinho (objeto) {
    carrinho.push(objeto)
    console.log(carrinho)
}
inserindoNoCarrinho(fruta1)
inserindoNoCarrinho(fruta2)
inserindoNoCarrinho(fruta3)

//d)
carrinho.push(fruta1, fruta2, fruta3)
console.log(carrinho)
