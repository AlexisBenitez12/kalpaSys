/*cuando clickeo el boton se despliega el menu*/
function toggleMenu() {
  var menu = document.querySelector(".contenedor-menu");
  menu.classList.toggle("active");
}

function toggleSubMenu() {
  event.preventDefault();
  var submenu = document.querySelector(".submenu");
  submenu.classList.toggle("active");

  var item = document.querySelector(".item-menu");
  item.classList.toggle("active");

  var a = document.querySelector(".a-menu");
  a.classList.toggle("active");
}

function ordenar() {
  var lista = document.querySelector(".lista-ordenar");
  lista.classList.toggle("active");
}




