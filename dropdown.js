const nav = document.getElementById("nav-items");
const navbtn = document.getElementById("openMenu");
const closebtn = document.getElementById("closeMenu");

function openMenu(){
  nav.style.display = "flex";
  toggleBtn();
}
function closeMenu(){
  nav.style.display = "none";
  toggleBtn();
}

function toggleBtn(){
  nav.classList.toggle("show-menu");
  navbtn.classList.toggle("hidden");
  closebtn.classList.toggle("hidden");
}
