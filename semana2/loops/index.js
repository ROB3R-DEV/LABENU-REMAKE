//Exercicios de interpretação de código
//1.
// o código está fazendo com que a variável valor seja a soma de todos
// os numeros inteiros até i for menor que 5
// 2.a)
// 19 21 23 25 27 30
// b) Não.
// 3.
// *
// **
// ***
// ****

// Exercicios de escrita de código
// 1.
const quantidadeBichinhos = Number(prompt("quantos bichinhos de estimação vc tem?"))
arrayBichinhos = []
if(quantidadeBichinhos === 0){
    console.log("Que pena! Você pode adotar um pet!")
}else {
    for(i=0;i<quantidadeBichinhos;i++){
        const seuBichinho = prompt("Qual bichinho vc tem?")
        arrayBichinhos.push(seuBichinho)
}
}
const arrayDosBichinhos = arrayBichinhos
console.log(arrayBichinhos)

// 2.
// a)
const array1 = [9, 34, 40, 60, 180, 70, 120, 90, 103, 110, 55]
let arrayPares = []
let arrayStrings = []
let maior = 0
let menor = 10000
for(i=0; i<array.length; i++){
    console.log(array[i])
}
//b)
for(i=0; i<array.length; i++){
    console.log(array[i]/10)
}

//c)
for(i=0; i<array.length; i++){
    
    if(array[i] % 2 === 0){
        arrayPares.push(array[i])
    }
}
console.log(arrayPares)

//d)
for(i=0; i<array.length; i++){
    
        arrayStrings.push(`O elemento do index ${i} é: ${array[i]}`)

}
console.log(arrayStrings)

//e)
for(i=0; i<array.length; i++){
    if(array[i] < menor){
        menor = array[i]
    } else if(array[i] > maior){
        maior = array[i]
    }
} 
console.log(maior)
console.log(menor)
