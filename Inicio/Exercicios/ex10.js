// MANIPULANDO LISTAS.
function print(x){console.log(x)}

const jogadores = [
    'Neymar', 'Gabriel jesus', 'Tardelli', 'Bruno Henrique'
]

jogadores.forEach((item, indice) => {
    console.log(indice + 1, item)
})
print(jogadores.includes('Neymar'))