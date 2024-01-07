function toggle() {
  const content = document.querySelector('body')

  content.classList.toggle("light")

  const img = document.querySelector('.profileimg')

  if (content.classList.contains("light")) {
    img.setAttribute("src", "https://github.com/nathanpalatin.png")
  } else {
    img.setAttribute("src", "https://media.licdn.com/dms/image/D4D03AQGoT9B1dlbm4w/profile-displayphoto-shrink_200_200/0/1699448287507?e=1710374400&v=beta&t=1fkPW5B9VJ-AUvSlzCjNdgnqu81al8qJaS2C2dkSEqI")
  }
}