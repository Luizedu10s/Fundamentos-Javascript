function boasvindas(nome){
    console.log(`Seja bem vindo ${nome}!`)
}
function somar(a, b){
    let soma = a + b
    console.log(`
        A soma entre ${a} e ${b} é igual a ${soma}!
    `)
}
function multiplicar(a, b){
    let multi = a * b
    console.log(`
        O resultado da múltiplicação de ${a} e ${b} é igual a ${multi}!
    `)
}
function exponenciacao(a, b){
    let expo = a ** b 
    console.log(`
        ${a} elevado a ${b} é igual a ${expo}!
    `)
}
function divisao(a, b){
    let div = a / b
    console.log(`
        A divisão de ${a} por ${b} é igual a ${div}!
    `)
}
function percent(a, b){
    let percent = ((a / b) * 100)
    console.log(`
        ${a} corresponde a ${percent}% de ${b}
    `)
}
function raiz(a){
    let n1 = a
    let raiz = Math.sqrt(n1)
    // let tp = (typeof raiz)
    console.log(`A raiz quadrada de ${n1} é ${raiz}!`)
    /*if(tp == 'number'){
        console.log(`O número ${n1} não tem raiz`)
    }*/
}

// EXECUÇÃO
boasvindas('Luiz')
somar(5, 5)
multiplicar(3, 4)
exponenciacao(2, 3)
divisao(10, 5)
percent(87, 100)
raiz(81)

// é possivel armazenar uma fução dentro de uma variavel

// Exemplo de função arow e função reduzida
const soma = (a, b) => {
    return a + b
}
console.log(soma(5, 6))
// Função mais reduzida

// Retorno ímplicito 
const div = (a, b) => a / b // modo de função mais reduzida
console.log(div(10, 5))