const btn_menu = document.getElementById("btn-menu");
const nav = document.getElementById("navegador-principal");
const header = document.getElementById("header-scroll");

btn_menu.addEventListener("click", () => {
  nav.classList.toggle("responsive");
});

window.addEventListener("scroll", function () {
  header.classList.toggle("abajo", window.scrollY > 100);
});
