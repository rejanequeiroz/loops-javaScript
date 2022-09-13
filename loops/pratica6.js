var i=0
var n;
var soma = 0
var media = 0
do{
     n = Number(prompt("digite um valor ")) 
    if(n%3 == 0){
        i++
        soma += n
    }    
}while(n != 0)
i--;
media = soma / i

alert(`a somo dos multiplos 3 é ${media}`)
    