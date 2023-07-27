
function enviando(){
    var nome = document.getElementById('nome').value;
    var res = document.getElementById('res');
    
   if( nome == ""){
    window.alert('Erro digite novamente...' )
   }else{
    res.innerHTML = `Ola ${nome}`
   }

}