let soma = (a, b) => { // ARROW FUNCTION É UMA FORMA REDUZIDA DE SE FAZER FUNÇÕES EM JAVASCRIPT.
    return a + b
}
console.log(soma(2, 4))

let multiplicacao = (multiplicador, multiplicando) => {
    return multiplicador * multiplicando
}
console.log(multiplicacao(2, 4))

let exponenciacao = (a, b) => {
    return a ** b
}
console.log(exponenciacao(2, 3)) // 2 X 2 X 2 = 8 ou 2**3 in JS.

let dobro = a => 2 * a // FORMA MAIS REDUZIDA AINDA, PORÉM NESTE CASO SO TEM A PRESENÇA DE UM PARAMETRO QUE SERIA O PARAMETRO A.
console.log(dobro(3))