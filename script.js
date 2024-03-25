
function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("space");

  const img = document.querySelector("#profile img");
  if (html.classList.contains("space")) {
    img.setAttribute("src", "./assets/avatar-space.png");
    img.setAttribute("alt", "profile");
  }
  else {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "profile");
  }
}
