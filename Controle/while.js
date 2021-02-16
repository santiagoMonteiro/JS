function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    // o método random gera um valor pseudo-aleatório entre 0 e 1
    /* multiplica-se por (max - min) para obter um valor que não estrapole a diferença
    entre o valor máximo e o valor mínimo */
    // e se soma com min para obter um valor entre min e max
    // o maior valor que random vai gerar é 1
    // e se assim fosse, min iria cancelar o -min
    // e o que teríamos seria o valor max 
    return Math.floor(valor)
}

let opcao = 0

while (opcao !== -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')
