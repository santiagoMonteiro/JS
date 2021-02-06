// Função sem retorno
function imprimeSoma(a, b) {
    console.log(a + b)
}

imprimeSoma(1,2)
imprimeSoma(2)
imprimeSoma(2,10,4,5,6,7,8)
imprimeSoma()

// Função com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))