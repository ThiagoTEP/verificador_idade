function Verificar(){
        var data = new Date()
        var ano = data.getFullYear()
        var fano = document.getElementById('txtano')
        var res = document.querySelector('div#res')
        if (fano.value.length ==0 || fano.value > ano) {
            window.alert('Verifique os dados e tente novamente, Ano invalido')
        } else {
           var fsex = document.getElementsByName('radsex')
           var idade = ano - Number(fano.value)
           var genero = ''
           var img = document.createElement('img')
           img.setAttribute('id', 'foto')
            if (fsex[0].checked) {
                genero = 'Homem'
                if (idade >= 0 && idade < 10) {
                    //Criança
                    img.setAttribute('src', 'Crianca_homem.png')
                } else if (idade < 21) {
                    // JOVEM
                    img.setAttribute('src', 'Adolescente_homem.png')
                } else if ( idade < 50){
                    //ADULTO
                    img.setAttribute('src', 'Adulto_homem.png')
                } else {
                    //IDOSO
                    img.setAttribute('src', 'Idoso_homem.png')
                }
            } else if (fsex[1].checked) {
                genero = 'Mulher'
                if (idade >= 0 && idade < 10) {
                    //Criança
                    img.setAttribute('src', 'Crianca_mulher.png')
                } else if (idade < 21) {
                    // JOVEM
                    img.setAttribute('src', 'Adolescente_mulher.png')
                } else if ( idade < 50){
                    //ADULTO
                    img.setAttribute('src', 'Adulto_mulher.png')
                } else {
                    //IDOSO
                    img.setAttribute('src', 'Idosa_mulher.png')
                }
            }
           res.style.textAlign = 'center'
           res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
           res.appendChild(img)
        }
}