const meses_ano = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
]
function nomedomes(x){
        if(x in meses_ano){
            console.log(meses_ano[x-1])
        } else {
            console.log('Mês não encontrado!')
        }
}
nomedomes(1)
nomedomes(4)