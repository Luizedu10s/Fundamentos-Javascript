const salario = function(horas_no_mes, salario_hora){
    return `Salário igual a R$${horas_no_mes * salario_hora}`
}

console.log(salario(150, 40.5))