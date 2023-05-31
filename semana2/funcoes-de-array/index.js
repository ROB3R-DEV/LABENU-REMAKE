//Exercicios de escrita de código
//1.
// será impresso cada objeto do array, o indice de cada objeto do array
// e uma copia do array original.
//2.
// vai ser impresso um novo array com o conteudo da chave nome do 
// array original
//3.
// será impresso um novo array somente com os valores da chave 
// apelido do array original que não seja o valor "chijo"

//Exercicios de escrita de código
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]
//1.a)
const nomeBichinhos = pets.map((item) =>{
    return item.nome
})
console.log(nomeBichinhos)
// //b)
// const dogSalsicha = pets.filter((item) => {
//     return item.raca === "Salsicha"
// })
// console.log(dogSalsicha)
//c)
// const dogsPoodles = pets.filter((item) => {
//     return item.raca === "Poodle"
// }) 
// const cupomDesconto = dogsPoodles.map((item) =>{
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
// })
// console.log(cupomDesconto)

//2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
// a)
const nomesProdutos = produtos.map((item) =>{
    return item.nome
})
console.log(nomesProdutos)
// b)
const nomesProdutosComDescontos = produtos.map((item) =>{
    return {nome: item.nome, preco: item.preco*0.95}
})
console.log(nomesProdutosComDescontos)
//c)
const ProdutosBebidas = produtos.filter((item) =>{
    return item.categoria === "Bebidas"
})
console.log(ProdutosBebidas)
//d)
const ProdutosYpê = produtos.filter((item) =>{
    return item.nome.includes("Ypê")
})
console.log(ProdutosYpê)
//e)
const retornaFrase = ProdutosYpê.map((item) =>{
    return `Compre ${item.nome} por ${item.preco}`
})
console.log(retornaFrase)