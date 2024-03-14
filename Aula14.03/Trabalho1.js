function gerarVetorAleatorio(vetorAleatorio, tamanho) {
    for (let i = 0; i < tamanho; i++) {
        vetorAleatorio[i] = Math.round(Math.random() * (1000 - 1) + 1);
    }
}
function gerarVetorInvertido(vetorInvertido, tamanho) {
    for (let i = tamanho; i > 0; i--) {
        vetorInvertido.push(i);
    }
}
function gerarVetorOrdenado(vetorOrdenado, tamanho) {
    for (let i = 0; i < tamanho; i++) {
        vetorOrdenado[i] = i + 1;
    }
}

function bubblesort(vet) {
    let vetor = [...vet];
    let flag, trad;
    let x = vetor.length;
    while (x > 0) {
        for (let i = 0; i < x; i++) {
            if (vetor[i] > vetor[i + 1]) {
                flag = vetor[i];
                trad = vetor[i + 1];
                vetor[i] = trad;
                vetor[i + 1] = flag;
            }
        }
        x--;
    }
}

function selection(vet) {
    let vetor = [...vet];
    let menor, aux, index;
    let tam = vetor.length;
    for (let i = 0; i < tam; i++) {
        menor = vetor[i];
        for (let j = 1; j < tam; j++) {
            if (vetor[j] < menor) {
                menor = vetor[j];
                index = j;
            }
        }
        aux = vetor[i];
        vetor[i] = menor;
        vetor[index] = aux;
    }
}

function insertion(vet) {
    let vetor = [... vet]
    let tam = vetor.length
    for(let i=1; i<tam; i++){
        let atual = vetor[i]
        let j
        for(j=i-1; j>=0 && vetor[j] > atual;j--){
            vetor[j+1] = vetor[j]
        }
        vetor[j+1] = atual
    }
}

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

function particao(array, esquerda, direita, pivo){ //Chamada de uso para realização do quickSort
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

function tempoFunc(func, vetor, vetorTempo, metodo, tipoVet) {
    let antes, tempo;
    antes = performance.now();
    func(vetor);
    tempo = performance.now() - antes;
    vetorTempo.push(tempo + `ms ${metodo}`, `vetor ${tipoVet}`);
}

function tempo(vetorAleatorio, vetorInvertido, vetorOrdenado, vetorTempo) {
    tempoFunc(bubblesort, vetorAleatorio, vetorTempo, "bubblesort", "aleatorio");
    tempoFunc(bubblesort, vetorInvertido, vetorTempo, "bubblesort", "invertido");
    tempoFunc(bubblesort, vetorOrdenado, vetorTempo, "bubblesort", "ordenado");

    tempoFunc(selection, vetorAleatorio, vetorTempo, "selection", "aleatorio");
    tempoFunc(selection, vetorInvertido, vetorTempo, "selection", "invertido");
    tempoFunc(selection, vetorOrdenado, vetorTempo, "selection", "ordenado");

    tempoFunc(insertion, vetorAleatorio, vetorTempo, "insertion", "aleatorio");
    tempoFunc(insertion, vetorInvertido, vetorTempo, "insertion", "invertido");
    tempoFunc(insertion, vetorOrdenado, vetorTempo, "insertion", "ordenado");

    tempoFunc(quickSortCall, vetorAleatorio, vetorTempo, "quick", "aleatorio");
    tempoFunc(quickSortCall, vetorInvertido, vetorTempo, "quick", "invertido");
    tempoFunc(quickSortCall, vetorOrdenado, vetorTempo, "quick", "ordenado");
}

function mostrarTemp(vetorTempo) {
    for (let i = 0; i < vetorTempo.length; i++) {
        console.log(vetorTempo[i]);
    }
}

function checaInteiro(num){
    if(Number.isInteger(num)){
        return true
    }
    return false
}

function main() {
    let vetorAleatorio = [];
    let vetorInvertido = [];
    let vetorOrdenado = [];
    let vetorTempo = [];
    let tamanho;
    let opcaoTamanho;

    let op;
    do {
        op = Number(prompt("(1) - Escolher tamanho do vetor;\n(2) - Ver duração de execução de cada metodo;\n(3) - Sair;"));
        switch (op) {
            case 1:
                do {
                    opcaoTamanho = Number(prompt("Escolha um dos tamanhos a seguir: \n(1) - Tamanho = 100;\n(2) - Tamanho = 1.000;\n(3) - Tamanho = 10.000;\n(4) - Tamanho = 100.000;\n(5) - Sair;"))
                    switch (opcaoTamanho) {
                        case 1:
                            tamanho = 100
                            break;
                        case 2:
                            tamanho = 1000
                            break
                        case 3:
                            tamanho = 10000
                            break;

                        case 4:
                            tamanho = 100000
                            break;

                        case 5:
                            break;

                        default:
                            console.log("escreve um numero válido filho da puta")
                            break;

                    }
                } while (opcaoTamanho < 1 || opcaoTamanho > 5 || !checaInteiro(opcaoTamanho))
                break;

            case 2:
                gerarVetorAleatorio(vetorAleatorio, tamanho);
                gerarVetorInvertido(vetorInvertido, tamanho);
                gerarVetorOrdenado(vetorOrdenado, tamanho);
                tempo(vetorAleatorio, vetorInvertido, vetorOrdenado, vetorTempo);
                mostrarTemp(vetorTempo);
                break;
            case 3:
                break;
            default:
                console.log("Opção invalida!");
                break;
        }
    } while (op != 3);
}
main();