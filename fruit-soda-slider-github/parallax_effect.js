// PARALLAX EFFECT

let parallax = document.getElementById("parallax");
let fruits_parallax = document.querySelector(".active .fruit");
let names_parallax = document.querySelector(".active .content");

// sensitivity
const sFront = 600;
const sBack = -200;

// cuando dentro de parallax se mueva el mouse
parallax.addEventListener("mousemove", (e) => {
  const x = e.clientX - window.innerWidth / 2;
  const y = e.clientY - window.innerHeight / 2;

  fruits_parallax.style.transform = `translate(
    ${-50 + x / sFront}%, 
    ${-50 + y / sFront}%
  )`;

  names_parallax.style.transform = `translate(
    ${-50 + x / sBack}%, 
    ${-50 + y / sBack}%
  )`;
});
