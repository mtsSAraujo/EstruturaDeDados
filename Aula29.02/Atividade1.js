function gerarVetorAleatorio(vetorAleatorio){
    for(let i=0; i<1000; i++){
        vetorAleatorio[i] = Math.floor(Math.random()*1000);
    }
}

function gerarVetorOrdenado(vetorOrdenado){
    for(let i=0; i<1000; i++){
        vetorOrdenado[i] = i+1
    }
}

function gerarVetorInvertido(vetorInvertido){
    for(let i=1000; i>0;i--){
        vetorInvertido.push(i)
    }
}

function insertionSort(vetor){
    let tam = vetor.length
    let vetorCopia = [... vetor]
    for(let i=1; i<tam; i++){
        let atual = vetorCopia[i]
        let j
        for(j=i-1; j>=0 && vetorCopia[j] > atual;j--){
            vetorCopia[j+1] = vetorCopia[j]
        }
        vetorCopia[j+1] = atual
    }
}

function selectionSort(vetor){
    tam = vetor.length
    let menor
    let indice
    let auxiliar
    let vetorCopia = [... vetor]
    for(let i= 0; i<tam; i++){
        menor = vetorCopia[i]
        indice = i
        for(let j=i; j<tam; j++){
            if(vetorCopia[j] < menor){
                    menor = vetorCopia[j]
                    indice = j
            }
        }
        auxiliar = vetorCopia[i]
        vetorCopia[i] = menor
        vetorCopia[indice] = auxiliar
    }
}

function bubblesort(vetor){
    let tamanho = vetor.length
    let comparacao = 0;
    let vetorCopia = [... vetor]
    while(tamanho>=0){
        for(let i=0; i<tamanho; i++){
            if(vetorCopia[i] > vetorCopia[i+1]){
                comparacao = vetorCopia[i]
                vetorCopia[i]=vetorCopia[i+1]
                vetorCopia[i+1] = comparacao
            }
        }
        tamanho--
    }
}

function salvaTempo(vetorAleatorio, vetorInvertido, vetorOrdenado, vetorTempos){
    let antes = performance.now()
    insertionSort(vetorOrdenado)
    let duracao = performance.now() - antes;
    vetorTempos.push(duracao + "ms - Insertion Sort Ordenado")
    antes = performance.now()
    insertionSort(vetorAleatorio)
    duracao = performance.now() - antes;
    vetorTempos.push(duracao + "ms - Insertion Sort Aleatorio")
    antes = performance.now()
    insertionSort(vetorInvertido)
    duracao = performance.now() - antes;
    vetorTempos.push(duracao + "ms - Insertion Sort Invertido")
    antes = performance.now()
    bubblesort(vetorOrdenado)
    duracao = performance.now() - antes;
    vetorTempos.push(duracao + "ms - Bubble Sort Ordenado")
    antes = performance.now()
    bubblesort(vetorAleatorio)
    duracao = performance.now() - antes;
    vetorTempos.push(duracao + "ms - Bubble Sort Aleatorio")
    antes = performance.now()
    bubblesort(vetorInvertido)
    duracao = performance.now() - antes;
    vetorTempos.push(duracao + "ms - Bubble Sort Invertido")
    antes = performance.now()
    selectionSort(vetorOrdenado)
    duracao = performance.now() - antes;
    vetorTempos.push(duracao + "ms - Selection Sort Ordenado")
    antes = performance.now()
    selectionSort(vetorAleatorio)
    duracao = performance.now() - antes;
    vetorTempos.push(duracao + "ms - Selection Sort Aleatorio")
    antes = performance.now()
    selectionSort(vetorInvertido)
    duracao = performance.now() - antes;
    vetorTempos.push(duracao + "ms - Selection Sort Invertido")
}

function mostraTempos(vetorTempos){
    for(let i =0; i<vetorTempos.length; i++){
        console.log(vetorTempos[i])
    }
}

function main(){
    let vetorAleatorio = []
    let vetorInvertido = []
    let vetorOrdenado = []
    let vetorTempos = []
    gerarVetorAleatorio(vetorAleatorio)
    gerarVetorInvertido(vetorInvertido)
    gerarVetorOrdenado(vetorOrdenado)
    let entrada = 1;
    while(entrada != 0){
        entrada = Number(prompt("Escolha uma das opções a seguir: \n1-Calcula tempo das funções;\n2-Mostra os tempos das funções;\n0-Finalizar o programa;"))
        switch(entrada){
            case 1:
                salvaTempo(vetorAleatorio, vetorInvertido, vetorOrdenado, vetorTempos)
                break;
            
            case 2:
                mostraTempos(vetorTempos);
                break;

            case 0:
                break;

            default:
                alert("Opção Digitada inválida!")
                entrada = Number(prompt("Escolha uma das opções a seguir: \n1-Ver tempo de duração das funções;\n0-Finalizar o programa;"))
                break;
        }
    }
}