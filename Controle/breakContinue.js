const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// o índice x é uma string!!!
for (let x in nums) {
    if (x == 5) {
        break // sai imediatamente do laço associado
        // o break só pode sair de um for , while e switch
        // nesse caso ele irá sair do laço mais próximo, o (for)
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log('\n')

for (let y in nums) {
    if (y == 5) {
        continue // passa imediatamente para a próxima iteração
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: // Não faça isso
for (let a in nums) {
    for (let b in nums) {
        if (a == 2 && b == 3) {
            break externo // sai do laço associado ao marcador
        }
        console.log(`Par = ${a},${b}`)
    }
}