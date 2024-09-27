// CAN ROTATING EFFECT

let list = document.querySelectorAll(".list .item");
let carousel = document.querySelector(".carousel");

let next = document.getElementById("next");
let prev = document.getElementById("prev");

let mockup = document.querySelector(".mockup");

let count = list.length;
let active = 0;
let leftMockup = 0;
let left_each_item = 100 / (list.length - 1);

next.onclick = () => {
  active = active >= count - 1 ? 0 : active + 1;
  leftMockup = leftMockup + left_each_item;
  // quitar esto el cambiar de item tendra la animacion habitual
  carousel.classList.remove("animation-return");
  changeCarousel();
};

prev.onclick = () => {
  active = active <= 0 ? count - 1 : active - 1;
  leftMockup = leftMockup - left_each_item;
  // colocar esto para que el carousel tenga la animacion de retorno
  carousel.classList.add("animation-return");
  changeCarousel();
};

// funcion para cambiar el carousel
function changeCarousel() {
  // find item has class hidden to remove it
  let hidden_old = document.querySelector(".item.hidden");
  if (hidden_old) hidden_old.classList.remove("hidden");

  // find item  old active to remove it and add class hidden
  let active_old = document.querySelector(".item.active");
  active_old.classList.remove("active");
  active_old.classList.add("hidden");

  // add class active in position item active now
  list[active].classList.add("active");

  // update the elements which will have parallax effect
  fruits_parallax = document.querySelector(".active .fruit");
  names_parallax = document.querySelector(".active .content");

  // change mockup background
  mockup.style.setProperty("--left", leftMockup + "%");

  // reiniciar cuando se cambia de item
  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 4000);
}

// autorun de 4s para cambiar de item

let refreshInterval = setInterval(() => {
  next.click();
}, 4000);
