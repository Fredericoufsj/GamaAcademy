var valores = [5, 8, 10, 22, 38, 45];

function busca(num) {
    for (i = 0; i < 6; i++) {
        if (num === valores[i]) {
            return i;
        }
    }
    return -1;
}


// Usando a nosso ferramenta de busca

console.log(busca(10))
console.log(busca(50))