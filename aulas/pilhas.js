var elementos = [];
var topo = -1;
const Max = 10;

function push(num) {
    if (topo < Max) {
        topo = topo + 1
        elementos[topo] = num
    } else {
        console.log('Pilha cheia')
    }
}

function estavaVazia() {
    return topo === -1
}

function pop() {
    if (topo != -1) {
        let num = elementos[topo];
        topo = topo - 1
        return num;
    } else console.log('Pilha está vazia')
}

// Parte do código que usa a pilha
push(10)
push(20)
push(30)
console.log(elementos)

console.log(pop())
console.log(pop())
console.log(pop())

// Parte do código que usa a pilha2
var numeroDecimal = 10;
var resto;


console.log("Hora de empilhar!!!")
while (numeroDecimal != 0) {
    resto = parseInt(numeroDecimal % 2)
    push(resto)
    numeroDecimal = parseInt(numeroDecimal / 2)
    console.log(resto)
}
console.log('Desempilhando!!!!!!!!!')
while (!estavaVazia()) {
    console.log(pop())
}