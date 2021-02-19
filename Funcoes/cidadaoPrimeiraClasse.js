// Funcão em JS é First Class Object (Citizens)
// Higher-Order function

// criar de forma literal
function fun1() {

}

// armazenar em uma variável
const fun2 = function() {
// passamos para uma constante ou variável uma função anônima
}

// armazenar em um Array
const array = [function(a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function() { return 'Fala Mano!' }
console.log(obj.falar())

// passar função como parâmetro
function run(fun) {
    fun()
}

run(function() { console.log('Executando...') })

//uma função pode retornar ou conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2,3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)
////////////////////////////
console.log('\n')

function soma2(a, b) {
    return function (c) {
        return (a + b + c)
    }
}
console.log(soma2(2,3)(4))









