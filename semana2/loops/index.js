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
const array2 = [9, 34, 40, 60, 180, 70, 120, 90, 103, 110, 55]
let arrayPares = []
let arrayStrings = []
let maior = 0
let menor = 10000
for(i=0; i<array1.length; i++){
    console.log(array1[i])
}
//b)
for(i=0; i<array1.length; i++){
    console.log(array1[i]/10)
}

//c)
for(i=0; i<array1.length; i++){
    
    if(array1[i] % 2 === 0){
        arrayPares.push(array1[i])
    }
}
console.log(arrayPares)

//d)
for(i=0; i<array1.length; i++){
    
        arrayStrings.push(`O elemento do index ${i} é: ${array1[i]}`)

}
console.log(arrayStrings)

//e)
for(i=0; i<array1.length; i++){
    if(array1[i] > maior){
        maior = array1[i]
    } else if(array2[i] < menor){
        menor = array2[i]
    }
} 
console.log(maior)
console.log(menor)
