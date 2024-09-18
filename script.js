function toggleMode() {
  const html = document.documentElement
  /*estrutura de ativação de potão por click
  if(html.classList.contains('light')){
    html.classList.remove('light')
  }
  else{
    html.classList.add('light')
  }*/
  html.classList.toggle("light")

  //pegar a imagem
  const img = document.querySelector('#profile img')
  //subistituir imagem
  if(html.classList.contains("light")){
    //se tiver light troca a imagem
  img.setAttribute("src", "./assets/avatar-light.png")
  } else {
  //se não estiver light fica img padrão
  img.setAttribute("src", "./assets/avatar.png")
  }


}


