var idade = 17
console.log(`Você tem ${idade} anos`)
if (idade < 16){
    console.log('Não Vota')
}else if (idade< 18 || idade){
    /*if (idade >= 16 && idade < 18) //se idade maior ou = a 16 e menor que 18*/ 
    {
        console.log('Voto opcional')
    }
}else{
    console.log('Voto Obrigatorio')
}