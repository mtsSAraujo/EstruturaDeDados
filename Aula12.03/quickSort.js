function quickSortCall(vetor){
    quickSort(vetor, 0, vetor.length - 1)
}

function quickSort(array, inicio, fim){
    if(inicio<fim){
        meio = Math.floor((inicio+fim)/2)
        pivo = array[meio]
        index = particao(array, inicio, fim, pivo)
        quickSort(array, inicio, index-1)
        quickSort(array, index, fim)
    }
}

function particao(array, esquerda, direita, pivo){
    let auxiliar;
    while(esquerda<=direita){
        while(array[esquerda] < pivo){
            esquerda ++
        }
        while(array[direita] > pivo){
            direita --
        }
        if(esquerda <= direita){
            auxiliar = array[esquerda]
            array[esquerda] = array[direita]
            array[direita] = auxiliar
            esquerda ++
            direita --
        }
    }
    return esquerda;
}

let vetor = [25, 57, 48, 37, 12, 92, 86, 33]
quickSortCall(vetor)
console.log(vetor)