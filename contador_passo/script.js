// funcao contar pegando valores html
function contar(){
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');
    
// condicao se valores iguais a 0 ou nao ter valor
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[Error] Fantam dados')
    }else{
        window.alert('Vamos contar');
    
        
   // res.innerHTML = imprime uma msg
    res.innerHTML = 'Contando: <br> '
    // pegando os valores do input e trasformando em numero
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    
    if(i < f) {
        // Contagem Crescente
        for (i; i <= f; i += p) {
            res.innerHTML += ` ${i} \u{1F449} `
        }
    } else {
        // Contagem Regressiva
        for(i; i >= f; i -= p) {
            res.innerHTML += ` ${i} \u{1F449} `
        }
     }
  }
}
