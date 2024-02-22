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

function checaVetor(vetor){
    if(vetor.length < 50){
        return true;
    }
    else{
        return false;
    }
}

function main(){
    let vetor = []
    let entrada = 1;
    while(entrada != 0){
        entrada = Number(prompt("Escolha uma das opções a seguir: \n1-Inserir Elemento;\n2-Bubblesort;\n0-Finalizar o programa;"))
        switch(entrada){
            case 1:
                if(checaVetor(vetor)){
                    inserirElemento(vetor);
                }
                else{
                    console.log("Limite máximo do vetor alcançado\nRemova algum elemento do vetor primeiro!")
                }
                console.log(vetor)
                break

            case 2:
                console.log(vetor)
                bubblesort(vetor);
                console.log(vetor)
                break;

            case 0:
                break;

            default:
                alert("Opção Digitada inválida!")
                entrada = Number(prompt("Escolha uma das opções a seguir: \n1-Inserir Elemento;\n2-Bubblesort; \n0-Finalizar o programa;"))
                break;
        }
    }

}

function inserirElemento(vetor){
    qtdeNumeros = Number(prompt("Digite a quantidade de números que serão inseridos: "))
    do{
        if(checaInteiro(qtdeNumeros) && qtdeNumeros>0){
            while(qtdeNumeros+vetor.length>50 || !checaInteiro(qtdeNumeros) || qtdeNumeros<=0){
                max = 50 - vetor.length
                qtdeNumeros = Number(prompt("Número digitado ultrapassa limite do vetor, o maximo de números que podem ser inseridos é de: " + max + "\nDigite uma quantidade valida!"))
            }
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