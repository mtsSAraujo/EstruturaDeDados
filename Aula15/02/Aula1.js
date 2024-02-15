function inserirElemento(){
}

function checaVetor(vetor){
    if(length(vetor) <= 50){
        return true;
    }
    else{
        return false;
    }
}

function criaVetor(){

}

function removerElementoPorValor(){

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

            case 2:

            case 3:

            case 4:

            case 5:

            case 6:

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