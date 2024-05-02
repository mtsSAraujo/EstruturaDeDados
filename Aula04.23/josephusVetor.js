function createVetor(vetor, n){
    for(let i=1; i<=n; i++){
        vetor.push(i)
    }
}

let vetor = []
let n = 4, m = 3;
createVetor(vetor, n)
console.log(vetor)