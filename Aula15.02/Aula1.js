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
                console.log(vetor)
                break;
            }
            else if(qtdRemovidos == 0){
                break
            }
            else{
                qtdRemovidos = Number(prompt(("Opção digitada inválida!\nInsira um valor válido entre 0 e "+vetorRemover.length + ": ")))
            }
        }
    }
    
}

function checaVetorVazio(vetor){
    if(vetor.length==0){
        console.log("O vetor está vazio!\nInsira algum elemento nele primeiro.")
        return false
    }
    return true
}

function removerElementoPorPosicao(vetor){
    console.log(vetor)
    num = Number(prompt("Digite a posição do número a ser removido do vetor(lembre-se que o primeiro elemento é o de indice 0!): "))
    if(!checaInteiro(num) || num < 0){
        while(checaInteiro(num) == false || num <0){
            console.log("Valor digitado não é um número inteiro maior igual a 0!")
            num = Number(prompt("Digite o indice do número a ser removido(lembre-se que o primeiro elemento é o de indice 0!): "))
        }
    }
    if(num>=vetor.length){
        while(num>=vetor.length){
            num = Number(prompt("Valor digitado não corresponde a nenhum indice do vetor, digite outro valor(lembre-se que o primeiro elemento é o de indice 0!): "))
        }
    }
    vetor.splice(num,1);
    console.log("Elemento removido com sucesso!")
    console.log(vetor)
}

function somarElementosPares(vetor){
    soma = 0;
    for(let i=0; i<vetor.length; i++){
        if(vetor[i]%2 == 0){
            soma += vetor[i]
        }
    }
    return soma;
}

function somarElementosImpares(vetor){
    soma = 0;
    for(let i=0; i<vetor.length; i++){
        if(vetor[i]%2 == 1){
            soma += vetor[i]
        }
    }
    return soma;
}

function defineMaior(i, j){
    if(i>j){
        maior = i
        menor = j
    }
    else{
        maior = j
        menor = i
    }
    vetorMaiorMenor = [maior, menor]
    return vetorMaiorMenor
}

function somarEntreIndices(vetor){
    tamanho = vetor.length
    soma = 0;
    num1 = Number(prompt("Digite o primeiro indice: "))
    while(num1 >= tamanho || !checaInteiro(num1) || num1<0){
        num1 = Number(prompt("Indice digitado invalido, digite um numero inteiro menor que "+ tamanho + " e maior igual a 0: "))
    }
    num2 = Number(prompt("Digite o segundo indice: "))
    while(num2 >= tamanho || !checaInteiro(num2) || num1<0){
        num2 = Number(prompt("Indice digitado invalido, digite um numero inteiro menor que "+ tamanho + " e maior igual a 0"))
    }
    vetorMaiorMenor = defineMaior(num1, num2)
    for(let i = vetorMaiorMenor[1]; i<=vetorMaiorMenor[0];i++){
        soma += vetor[i]
    }
    console.log("Os indices fornecidos foram: " + vetorMaiorMenor)
    return soma;
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
                if(checaVetorVazio(vetor)){
                    removerElementoPorValor(vetor)
                }
                break

            case 3:
                console.log(vetor)
                if(checaVetorVazio(vetor)){
                    removerElementoPorPosicao(vetor)
                }
                break

            case 4:
                console.log(vetor)
                if(checaVetorVazio(vetor)){
                    console.log("A soma dos elementos pares do vetor é: " + somarElementosPares(vetor))
                }
                break

            case 5:
                console.log(vetor)
                if(checaVetorVazio(vetor)){
                    console.log("A soma dos elementos impares do vetor é: " + somarElementosImpares(vetor))
                }
                break

            case 6:
                console.log(vetor)
                if(checaVetorVazio(vetor)){
                    console.log("A soma dos elementos entre os indices fornecidos é: "+ somarEntreIndices(vetor))
                }
                break

            case 0:
                break;

            default:
                alert("Opção Digitada inválida!")
                entrada = Number(prompt("Escolha uma das opções a seguir: \n1-Inserir Elemento;\n2-Remover Elemento por Valor;\n3-Remover Elemento por indice" +
        "\n4-Somar Elementos pares;\n5-Somar Elementos Impares;\n6-Somar elementos entre dois indices;\n0-Finalizar o programa;"))
                break;
        }
    }
}