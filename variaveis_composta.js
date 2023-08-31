let num = [5,8,2,9,3]
num[1] = 6// adicionei o numero 6 na posicao 1 substituindo o 8
//num.sort()// organiza em ordem crescente os numeros
num.push(11) // adiconou o numero 11 na ultima posicao 

/*console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(num[0])

for (let pos  = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let pos = num.indexOf(20)
if (pos == -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor está na posição ${pos}`)
}