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

function gerarVetorAleatorio(vetorAleatorio){
    for(let i=0; i<1000; i++){
        vetorAleatorio[i] = Math.floor(Math.random()*1000);
    }
}

let vetor = []
gerarVetorAleatorio(vetor)
console.log(vetor)
quickSortCall(vetor)
console.log(vetor)