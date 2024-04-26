// Lista encadeada circular para resolver o exercicio
function LinkedList(){

    let Node = function(element){
        this.element = element;
        this.next = null;
    }

    let length = 0;
    let head = null;

    this.append = function(element){

        let node = new Node(element), current;
        if(head == null){
            head = node;
        }
        else{
            current = head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        length ++
    }

    this.createList = function(variavel, n){
        let i=1;
        let ultimo = new Node();
        while(i<=n){
            variavel.append(i)
            i++
        }
        let busca = head
        if(n == 1){
            busca.next = busca
            console.log(busca)
            return variavel
        }
        while(busca.next){
            busca = busca.next
            ultimo = busca
        }
        ultimo.next = head
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
        while(length>1){
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
        if(length == 1){
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

}

function main(){
    let variavel = new LinkedList();
    let n = 10, m = 5;
    variavel = variavel.createList(variavel, n)
    console.log(variavel.getHead())
    console.log("Lista: " + variavel.getAllElements())
    console.log("Lista: " + variavel.getAllElements())
    variavel.removeMValues(m)
    console.log(variavel.getHead().next)
}

main()