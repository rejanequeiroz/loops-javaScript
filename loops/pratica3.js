var idade = 0
var menos21 = 0
var mais50 = 0

while(idade != -99){
    var idade = prompt("digite sua idade")
    
    if (idade < 21) {
        menos21++
    }
    else if (idade > 50) {
        mais50++
    }
}

alert(`O número de pessoas que tem mais de 50 anos é ${mais50}`)
alert(`O número de pessoas que tem menos de 21 é ${menos21}`)

console.log(`${mais50} , ${menos21}`)