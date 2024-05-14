function VerificaChave(vetor){
    let pilha = []
    let tam = vetor.length
    let correspondente, indiceCorrespondente;
    if(tam == 0){
        return true
    }
    let parada = vetor[0]
    let i = 0
    while(parada != "]" && parada != "}" && parada != ")"){
        pilha.push(parada)
        i++
        parada = vetor[i]
        if(i >= tam){
            break;
        }
    }
    if(parada == "]"){
        correspondente = pilha.pop()
        if(correspondente != "["){
            return false
        }
        else{
            empilha()
        }
    }
    else if(parada == "}"){

    }
    else if(parada == ")"){

    }
    else{
        return false
    }
}

function empilha(pilha, indiceVetor, vetor){

}