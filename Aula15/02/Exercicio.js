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
    }while((!checaInteiro(qtdeNumeros) || qtdeNumeros <=0))
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

function removerElementoPorValor(vetor){
    vetorRemover = []
    num = Number(prompt("Digite o valor a ser removido: "))
    if(!checaInteiro(num)){
        while(checaInteiro(num) == false){
            console.log("Valor digitado não é um número inteiro!")
            num = Number(prompt("Digite o valor a ser removido: "))
        }
    }
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] == num){
            vetorRemover.push(vetor[i]);
        }
    }
    if(vetorRemover.length == 0){
        console.log("Valor inserido não encontrado no vetor!")
    }
    else{
        qtdRemovidos = Number(prompt(("Foram encontrados " + vetorRemover.length + " números com o valor fornecido, deseja remover quantos deles?")))
        while(!checaInteiro(qtdRemovidos) || qtdRemovidos>=0 || !qtdRemovidos<=vetorRemover.length){
            if(checaInteiro(qtdRemovidos) && qtdRemovidos>0 && qtdRemovidos<=vetorRemover.length){
                for(let i=0; i<qtdRemovidos; i++){
                    vetor.splice(vetor.indexOf(vetorRemover[i]), 1)
                }
                console.log("Valores removidos com sucesso!")
                break;
            }
            else if(qtdRemovidos == 0){
                break
            }
            else{
                qtdRemovidos = Number(prompt(("Opção digitada inválida!\nInsira um valor válido!")))
            }
        }
    }
    
}

function removerElementoPorPosicao(){

}

function somarElementosPares(){

}

function somarElementosImpares(){

}

function somarEntreIndices(){

}

function main(){
    let vetor = []
    let entrada = 1;
    while(entrada != 0){
        entrada = Number(prompt("Escolha uma das opções a seguir: \n1-Inserir Elemento;\n2-Remover Elemento por Valor;\n3-Remover Elemento por indice" +
        "\n4-Somar Elementos pares;\n5-Somar Elementos Impares;\n6-Somar elementos entre dois indices;\n0-Finalizar o programa;"))
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
                if(vetor.length > 0){
                    removerElementoPorValor(vetor)
                }
                else{
                    console.log("O vetor está vazio!\nInsira algum elemento nele primeiro.")
                }
                break

            case 3:
                break

            case 4:
                break

            case 5:
                break

            case 6:
                break

            case 0:
                break;

            default:
                entrada = Number(prompt("Escolha uma das opções a seguir: \n1-Inserir Elemento;\n2-Remover Elemento por Valor;\n3-Remover Elemento por indice" +
        "\n4-Somar Elementos pares;\n5-Somar Elementos Impares;\n6-Somar elementos entre dois indices;\n0-Finalizar o programa;"))
                alert("Opção Digitada inválida!")
                break;
        }
    }
}