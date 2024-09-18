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
}
