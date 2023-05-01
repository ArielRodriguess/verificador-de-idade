function verificar() {
  let data = new Date()
  ano = data.getFullYear()
  let fAno = window.document.getElementById('nascimento').value
  let res = window.document.getElementById('res')
  if (fAno == 0 || fAno > ano || fAno <= 1899) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    let sexo = window.document.getElementsByName('sexo')
    idade = ano - fAno
    let gênero = ''
    let image = window.document.getElementById('image')
    image.style.display = 'block'
    if (sexo[0].checked) {
      gênero = 'Homem'
      if (idade >= 0 && idade < 4) {
        // bebê
        image.style.backgroundImage = "url('./images/bebe-homem.jpg')"
      } else if (idade <= 11) {
        // criança
        image.style.backgroundImage = "url('./images/crianca-homem.jpg')"
      } else if (idade <= 17 ) {
        // adolescente
        image.style.backgroundPosition = 'center top'
        image.style.backgroundImage = "url('./images/adolescente-homem.jpg')"
      } else if (idade < 40) {
        // homem-jovem
        image.style.backgroundPosition = "center center"
        image.style.backgroundImage = "url('./images/jovem-homem.jpg')"
      } else if (idade < 60) {
        // homem
        image.style.backgroundPosition = "left center"
        image.style.backgroundImage = "url('./images/homem-adulto.jpg')"
      } else if (idade >= 60) {
        // idoso
        image.style.backgroundImage = "url('./images/idoso-homem.jpg')"
      }
    } else if (sexo[1].checked) {
      gênero = 'Mulher'
      if (idade >= 0 && idade < 4) {
        // bebê
        image.style.backgroundImage = "url('./images/bebe-mulher.jpg')"
      } else if (idade <= 11) {
        // criança
        image.style.backgroundImage = "url('./images/crianca-mulher.jpg')"
      } else if (idade <= 17 ) {
        // adolescente
        image.style.backgroundImage = "url('./images/adolescente-mulher.jpg')"
      } else if (idade < 40) {
        // mulher-jovem
        image.style.backgroundImage = "url('./images/jovem-mulher.jpg')"
      } else if (idade < 60) {
        // mulher
        image.style.backgroundImage = "url('./images/mulher-adulta.jpg')"
      } else if (idade >= 60) {
        // idoso
        image.style.backgroundPosition = "center top"
        image.style.backgroundImage = "url('./images/idosa-mulher.jpg')"
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Você é ${gênero} e tem ${idade} anos de idade.`
  }
}