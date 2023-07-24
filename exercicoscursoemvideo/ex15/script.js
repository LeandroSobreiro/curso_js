function verificar() {
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Não funcionou tente novamente..')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src','homembebe.jpg')
            }else if ( idade <= 23){
                //jovem
                img.setAttribute('src', 'homemjovem.jpg')
            }else if (idade < 50 ){
                //idoso
                img.setAttribute('src', 'homemvelho.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src','mulherbebe.jpg')
            }else if (idade < 23){
                //jovem
                img.setAttribute('src','mulheradulta.jpg')
            }else if (idade < 50){
                //idoso
                img.setAttribute('src','mulheridosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}