const aaa = document.querySelector(".div1");
const navMenu = document.querySelector(".menu_Nav");

aaa.addEventListener("click", ()=>{
    aaa.classList.toggle('active');
    navMenu.classList.toggle('active');
})
function navigateTo(page) {
    window.location.href = page;
  }