const valor = "Global"

function minhafunc(){
    console.log(valor)
}

function exec(){
    const valor = 'Global not'
    console.log(valor)
    minhafunc()
}

/* a Função vai buscar informação aonde ele foi definida,
 independente de onde ela for executada. */

exec()