//Fazer um programa que utilize Hashing Linear para manipular chaves
//(representadas como um caracter) e possua as seguintes funções: 
//◦ inserir chaves na tabela hash;
//◦ buscar chaves na tabela hash.

function inserirString(vetorHash, string){
    let tamanhoVetor = vetorHash.length;
    let letraAtual;
    let posicaoAdicionada = 0;
    for(let i=0; i<tamanhoVetor; i++){
        letraAtual = string.charCodeAt(i);
        posicaoAdicionada = letraAtual % tamanhoVetor;
        while(vetorHash[posicaoAdicionada] != -1){
            posicaoAdicionada++
            if(posicaoAdicionada == tamanhoVetor - 1 && vetorHash(posicaoAdicionada) != -1){
                posicaoAdicionada = 0
            }
        }
        vetorHash[posicaoAdicionada] = string[i]
    }
}

function encontrarValorPorLetra(){

}

function main(){
    let stringInicial = prompt("Digite a string de caracteres a ser armazenada no hash;");
    let tamanho = stringInicial.length;
    let vetorHash = []
    for(let i=0; i<tamanho; i++){
        vetorHash.push(-1)
    }
    inserirString(vetorHash, stringInicial)
    console.log(vetorHash)
}