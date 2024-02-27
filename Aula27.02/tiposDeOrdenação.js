function insertionSort(vetor){
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

function selectionSort(vetor){
    tam = vetor.length
    let menor
    let indice
    let auxiliar
    for(let i= 0; i<tam; i++){
        menor = vetor[i]
        indice = i
        for(let j=i; j<tam; j++){
            if(vetor[j] < menor){
                    menor = vetor[j]
                    indice = j
            }
        }
        auxiliar = vetor[i]
        vetor[i] = menor
        vetor[indice] = auxiliar
    }
}

function bubblesort(vetor){
    let tamanho = vetor.length
    let comparacao = 0;
    while(tamanho>=0){
        for(let i=0; i<tamanho; i++){
            if(vetor[i] > vetor[i+1]){
                comparacao = vetor[i]
                vetor[i]=vetor[i+1]
                vetor[i+1] = comparacao
            }
        }
        tamanho--
    }
}

function checaInteiro(num){
    if(Number.isInteger(num)){
        return true
    }
    return false
}

function geraVetor(vetor){
    for(let i=0; i<15; i++){
        vetor[i] = Math.floor(Math.random()*50);
    }
}

function inserirElemento(vetor){
    qtdeNumeros = Number(prompt("Digite a quantidade de números que serão inseridos: "))
    do{
        if(checaInteiro(qtdeNumeros) && qtdeNumeros>0){
            for(let i=0;i<qtdeNumeros; i++){
                num = Number(prompt("Digite algum valor inteiro qualquer: \nPara parar o codigo, digite 1.1"))
                if(checaInteiro(num)){
                    vetor.push(num)
                }
                else if(num == 1.1){
                    break
                }
                else{
                    while(checaInteiro(num) == false){
                        console.log("Valor digitado não é um número inteiro!")
                        num = Number(prompt("Digite algum valor inteiro qualquer: "))
                    }
                    vetor.push(num)
                }
            }
            break
        }
        else{
            qtdeNumeros = Number(prompt("Número digitado inválido, insira outro valor: "))
        }
    }while((!checaInteiro(qtdeNumeros) || qtdeNumeros <=0 ))
}

function main(){
    let vetor = [25,57,48,37,12,92,86,33]
    let entrada = 1;
    while(entrada != 0){
        entrada = Number(prompt("Escolha uma das opções a seguir: \n1-Gerar Vetor com 15 números aleatórios;\n2-Inserir Elemento No Vetor;\n3-Insertion Sort;\n4-Bubble Sort;\n5-Selection Sort;\n0-Finalizar o programa;"))
        switch(entrada){
            case 1:
                geraVetor(vetor);
                console.log(vetor)
                break;

            case 2:
                inserirElemento(vetor);
                console.log(vetor)
                break;

            case 3:
                insertionSort(vetor);
                console.log(vetor)
                break;

            case 4:
                bubblesort(vetor)
                console.log(vetor)
                break;

            case 5:
                selectionSort(vetor)
                console.log(vetor)
                break;

            case 0:
                break;

            default:
                alert("Opção Digitada inválida!")
                entrada = Number(prompt("Escolha uma das opções a seguir: \n1-Gerar Vetor com 15 números aleatórios;\n2-Inserir Elemento No Vetor;\n3-Insertion Sort;\n4-Bubble Sort;\n5-Selection Sort;\n0-Finalizar o programa;"))
                break;
        }
    }
}