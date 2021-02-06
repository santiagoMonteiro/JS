let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
// Negação dupla mostra se o valor é de fato true ou false
console.log(!!isAtivo)

console.log('os verdadeiros')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log('\n')

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log('\n')

console.log('Pra finalizar...')
console.log((!!('' || null || 0 || ' ')))

let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Santiago'
console.log(nome || 'Desconhecido')