const notas = [9.7, 5.6, 7, 8, 4.3, 3.3, 4.9, 6.7] // ARRAY COM NOTAS 

// FUNÇÕES SEM CALLBACK
let notas_abaixo_de_7 = [] 
for(let i in notas){
    if(notas[i] < 7){notas_abaixo_de_7.push(notas[i])}
}
console.log(notas_abaixo_de_7)

// FUNÇÃO CALLBACK
let nota_baixa1 = notas.filter(function (nota){
    return nota < 7
})
console.log(nota_baixa1)
// COM ARRAW FUNCTION 
let nota_baixa = notas.filter(nota => nota < 7) // FORMA MAIS REDUZIDA DA FUNÇÃO CALLBACK
console.log(nota_baixa)