function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img

  const img = document.querySelector("#profile img")
// substituir a img

  if (html.classList.contains("light")) {
    // se tiver light mode , adicionar a img light
    img.setAttribute("src", "./assets/avatar-light.png")

  } else {
    // se tiver sem light mode , manter a img normal
    img.setAttribute("src", "./assets/mobile-avatar.png")
  }

  if (html.classList.contains("light")) {
    // se tiver light mode , adicionar a img light
    img.setAttribute("alt", "Mayk brito de blusa preta e óculos escuros")
  } else {
    // se tiver sem light mode , manter a img normal
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito usando óculos e camisa preta, barba e fundo amarelo"
    )
  }


 
}