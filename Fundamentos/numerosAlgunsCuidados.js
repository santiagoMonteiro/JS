console.log(7 / 0)
console.log('10' / 2)
console.log('3' + 2) // + vai concatenar, ele faz sentido pra string
console.log('3' - 2) // - não faz sentido pra string
console.log('Show!' * 2)
console.log(0.1 + 0.7)
//console.log(10.toString())
console.log((10.345).toFixed(2))
console.log(typeof (10.345).toFixed(2)) // vira uma string
n = 10
s = n.toString()
console.log(typeof s) // se usar uma variável vai dar certo
console.log(0 / 0) // NaN

/*
    O único operador aritmético que faz sentido para string é o +
    O + significa concatenação
*/