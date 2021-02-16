function teste1(num) {
    if (num > 7)
        console.log(num) 
        //somente a primeira linha de código após o if será considerada
        console.log("Final")
        // 'Final está fora da condição'

}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7);{ // cuidado com o ';', não usar com as estruturas de controle
        console.log(num)
    }  
}

teste2(6)
teste2(8)