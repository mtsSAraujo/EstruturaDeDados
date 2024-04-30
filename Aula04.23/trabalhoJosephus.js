// Lista encadeada circular para resolver o exercicio
function LinkedList(){

    let Node = function(element){
        this.element = element;
        this.next = null;
    }

    let length = 0;
    let head = null;

    this.createList = function(variavel, n){
        let i=1;
        while(i<=n){
            variavel.appendCircular(i)
            i++
        }
        let busca = head
        if(n == 1){
            busca.next = busca
            return variavel
        }
        return variavel
    }

    this.size = function(){
        return length
    }

    this.getHead = function(){
        return head
    }

    this.getAllElements = function(){
        let atual = head
        listaDeElementos = []
        if(length == 0){
            return "Lista Vazia!"
        }
        do{
            listaDeElementos.push(atual.element)
            listaDeElementos.push(atual.next != head ? " --> " : "")
            atual = atual.next
        }while(atual != head)
        listaDeElementos = listaDeElementos.join("")
        return listaDeElementos
    }

    this.toString = function (){
        let atual = head, string = ""
        do{
            string += atual.element + (" ")
            atual = atual.next
        }while(atual != head)
        return string
    }

    this.shift = function (){
        if(length == 0){
            return console.log("Lista Vazia!")
        }
        let atual = head
        let proximo = atual.next
        if(proximo == head){
            head = null
            length = 0
            return
        }
        head = proximo
        length --
    }

    this.unshift = function(element){
        let node = new Node(element)
        if(head == null){
            head = node
        }
        else{
            node.next = head
            head = node
        }
        length ++
    }

    this.removeMValues = function(m){
        let andar = m -1
        let current = head
        while(length>=0){
            while(andar > 1){
                current = current.next
                andar --
            }
            if(current.next == head){
                head = current.next.next
            }
            current.next = current.next.next
            andar = m
            length --
        }
        if(length == 0){
            return 
        }
        return console.log("Lista encadeada vazia!")
    }

    this.empty = function(){
        if(head == null){
            return true
        }
        return false
    }

    this.appendCircular = function(element){
        let node = new Node(element)
        if(head == null){
            head = node
            head.next = head
        }
        else{
            current = head
            while(current.next != head){
                current = current.next
            }
            current.next = node
            node.next = head
        }
        length++
    }

}

function main(){
    let variavel = new LinkedList();
    let n = 41, m = 7;
    variavel = variavel.createList(variavel, n)
    console.log("Lista: " + variavel.getAllElements())
    console.log(variavel.getHead())
    variavel.removeMValues(m)
    console.log(variavel.getAllElements())
    variavel.shift()
    console.log(variavel.getAllElements())
    variavel.appendCircular(2)
    variavel.appendCircular(3)
    console.log(variavel.getHead())
}

main()