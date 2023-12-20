function hello(turno){
    let horario = turno.toUpperCase()
    if(horario == "MANHÃ" || horario == "MANHA"){
        console.log("Bom dia!!")
    }else if(horario == "TARDE"){
        console.log("Boa tarde!!")
    }else if(horario == "NOITE"){
        console.log("Boa noite!!")
    }
}
hello("noite")
hello("tarde")
hello("manha")