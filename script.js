const barras_menu = document.querySelector(".barras");
const navMenu = document.querySelector(".menu_Nav");

barras_menu.addEventListener("click", ()=>{
    barras_menu.classList.toggle('active');
    navMenu.classList.toggle('active');
})
function navigateTo(page) {
    window.location.href = page;
  }
