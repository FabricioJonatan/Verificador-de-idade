function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let FAno = document.querySelector('input#txtano')
    let res = document.querySelector('div#res')

    if (FAno.value.length == 0 || FAno.value > ano){
        alert('ERROR! Confira os dados e tente novamente')
    }else{
        let sex = document.getElementsByName('radsex')
        let idade = ano - Number(FAno.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sex[0].checked){
            genero = 'homem'

            if (idade >= 0 && idade <= 10){
                img.setAttribute('src', './image/crianca-homem.jpg')
            } else if (idade < 24){
                img.setAttribute('src', './image/jovem-homem.jpg')
            } else if (idade < 50){
                img.setAttribute('src', './image/adulto-homem.jpg')
            } else {
                img.setAttribute('src', './image/velho-homem.jpg')
            }
        }else{
            genero = 'mulher'

            if (idade >= 0 && idade <= 10){
                img.setAttribute('src', './image/crianca-mulher.jpg')
            } else if (idade < 24){
                img.setAttribute('src', './image/jovem-mulher.jpg')
            } else if (idade < 50){
                img.setAttribute('src', './image/adulto-mulher.jpg')
            } else {
                img.setAttribute('src', './image/velho-mulher.jpg')
            }
        }

        res.innerHTML = `<p>Detectamos que você é um(a) ${genero} de ${idade} anos</p>`
        res.appendChild(img)
    }
}