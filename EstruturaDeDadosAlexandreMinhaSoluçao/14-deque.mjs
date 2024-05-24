import Deque from "./entity/Deque.mjs";

let listaCompras = new Deque();

// Alimenticío
listaCompras.insertFront("Arroz");
listaCompras.insertFront("Feijão");
listaCompras.insertFront("Macarrão");

console.log(listaCompras.print());

listaCompras.insertBack("Sabão em pó");
listaCompras.insertBack("Desodorante");
listaCompras.insertBack("Água sanitária");

listaCompras.insertFront("Café");
listaCompras.insertFront("Açúcar");
listaCompras.insertBack("Shampoo");

console.log(listaCompras.print());

let primeiro = listaCompras.peekFront();
let ultimo = listaCompras.peekBack();

console.log({primeiro});
console.log({ultimo});