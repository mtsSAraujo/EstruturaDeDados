function createVetor(vetor, n){
    for(let i=1; i<=n; i++){
        vetor.push(i)
    }
}

function josephusResolution(vetor, m){
    let tamanho = vetor.length;
    let andar = m -1;
    let posicaoAtual = 0;
    let saldo;
    while(tamanho>1){
        if(posicaoAtual + andar < tamanho){
            posicaoAtual = posicaoAtual + andar
        }
        else{
            if(posicaoAtual - tamanho >= 0){
                saldo = posicaoAtual - tamanho
                posicaoAtual = saldo
            }
            for(let i = 0; i < andar; i++){
                if(posicaoAtual + 1 < tamanho){
                    posicaoAtual++
                }
                else{
                    posicaoAtual = 0
                }
            }
        }
        vetor.splice(posicaoAtual, 1)
        tamanho--
    }
}

let vetor = []
let n = 50, m = 36;
createVetor(vetor, n)
console.log(vetor)
josephusResolution(vetor, m)
console.log(vetor)