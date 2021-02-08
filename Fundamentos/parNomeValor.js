// par nome valor
const saudacao = 'Oi' // contexto léxico

function exec(){
    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao
}// ele primeiro vai procurar no contexto da função
// se não achar aí vai procurar em um contexto que esteja maior

//Objetos são grupos anihados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: '32',
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)