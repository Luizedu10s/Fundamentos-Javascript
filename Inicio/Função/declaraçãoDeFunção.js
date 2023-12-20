// Função declaration // Pra cima e pra baixo, o interpretador reconhece e executa.
function soma(x, y){ return x + y}
console.log(soma(4, 6))

// Função expression // Só pode ser invocada depois da sua declaração.
const sub = function(x, y){ return x - y}
console.log(sub(10, 2))

// expressão da Função  // Só pode ser invocada depois da sua declaração.
const multi = function multi(x , y){ return x * y}
console.log(multi(2, 5))
