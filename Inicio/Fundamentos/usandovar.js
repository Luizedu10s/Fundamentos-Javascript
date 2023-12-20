// EXEMPLOS A CERCA DE VARIÁVEIS DE ESCOPO GLOBAL E LOCAL.


let num1 = 2 // geralmente para escopo global é var.
{
    let num1 = 3 // let para escopo local, exemplo, dentro de um blobo de código ou função.
    console.log(num1)
}
console.log(num1) // fugir de variáveis com escopo global(var), usar mais let.


// Modo var, a variável muda
var n2 = 5
{
    var n2 = 6
    console.log(n2)
}
console.log(n2)