const escola = 'Cod3r'

console.log(escola.charAt(4)) // elemento na posição 4
console.log(escola.charAt(5)) // não existe
console.log(escola[0]) // mesma função do charAt, mas eu prefiro essa
console.log(escola.charCodeAt(3)) // o código unicode do elemento no índice 3
console.log(escola.indexOf('3')) // retorna o índice do elemento procurado

console.log(escola.substring(1)) // fatia a string a partir do índice 1
console.log(escola.substring(0, 3)) // Não inclui o índice 3

console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')
console.log(escola.replace(3, 'e')) // no índice 3, substituir o atual elemento por 'e'

console.log('Ana,Maria,Pedro'.split(','))