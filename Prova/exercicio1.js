function main(){

}

function buscaSequencial(vetor, numeroProcurado){
    for(let i=0; i<vetor.length(); i++){
        if(vetor[i]===numeroProcurado){
            return i
        }
        else if(vetor[i]>numeroProcurado){
            return -1
        }
    }
    return -1
}

function chamadaBuscaSequencial(){
    let vetorOrdenado = [1,2,3,4,5]
    let numeroProcurado = 3
    let resultado;
    resultado = buscaSequencial(vetorOrdenado, numeroProcurado)
    console.log(resultado + " - Indice do Numero procurado no vetor")
}

function bubbleSort(vetor){
    for(let b = 0; b<vetor.length()-1; b++){
        let d
        for(let c = 0; c<vetor.length()-b-1; c++){
            d = vetor[c]
            vetor[c] = vetor[c+1]
            vetor[c+1] = d
        }
    }
}

function exponencial2(n, contador){
    contador ++
    console.log(contador)
    if(n == 0){
        return 1
    }
    if(n == 1){
        return 2
    }
    else{
        return(exponencial2(n-1) + 2*(exponencial2(n-2)))
    }
}

let contador = 0
exponencial2(4, contador)
console.log(contador)