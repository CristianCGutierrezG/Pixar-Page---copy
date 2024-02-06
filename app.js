"use strict";

//Applying parallax with library
let parallax_sections = document.querySelectorAll(".js-parallax-section");
for (let parallax_section of parallax_sections) {
  let _from = parallax_section.getAttribute("data-from") || "0px";
  let _to = parallax_section.getAttribute("data-to") || "100px";
  let instance = basicScroll.create({
    elem: parallax_section,
    from: "top-top",
    to: "bottom-top",
    direct: true,
    props: {
      "--ty": {
        from: _from,
        to: _to,
      },
    },
  });

  instance.start();
}

//data of de size of the window for rearrange the image
let img = document.getElementById("img-parallax");

let widthWindow = window.innerWidth;

img.style.setProperty("--widthWindow", `${widthWindow}px`);

window.onresize = function () {
  widthWindow = window.innerWidth;
  img.style.setProperty("--widthWindow", `${widthWindow}px`);
};

//funcion para qeu al recargar la pantalla vuelva a arriba

const mobileOver = document.getElementById("mobileOverlay");
const mobileMenu = document.querySelector(".mobile__overlay-menu");
const mobileMenuMain = document.querySelector(".mobile__overlay-menu-main");
const closBut = document.querySelector(".mobile__overlay-close");
const buttons = document.querySelectorAll(".mobile__overlay-nav-folder");
const menus = document.querySelectorAll(".mobile__overlay-folder");
const back = document.querySelectorAll(".mobile__overlay-folder-toggle");

document.querySelector(".header__menuButton").addEventListener("click", () => {
  mobileOver.classList.add("is-mobile-overlay-active");
  closBut.classList.add("mobile-overlay-close");
  mobileMenuMain.style.setProperty("transform", "translate3d(0, 0, 0)");
  mobileMenu.style.setProperty("transform", "translate3d(0, 0, 0)");
  document.body.classList.add("stop-scrolling");
});

document
  .querySelector(".mobile__overlay-close")
  .addEventListener("click", () => {
    mobileOver.classList.remove("is-mobile-overlay-active");
    closBut.classList.remove("mobile-overlay-close");
    mobileMenu.style.setProperty("transform", "translate3d(-100%, 0, 0)");
    document.body.classList.remove("stop-scrolling");
  });

buttons.forEach((elementB) => {
  elementB.addEventListener("click", () => {
    mobileMenuMain.style.setProperty("transform", "translate3d(-100%, 0, 0)");
    menus.forEach((elementM) => {
      if (elementB.id === elementM.id) {
        elementM.classList.add("mobile-folder-active");
      }
    });
  });
});

back.forEach((element) => {
  element.addEventListener("click", () => {
    menus.forEach((elementM) => {
      elementM.classList.remove("mobile-folder-active");
    });
    mobileMenuMain.style.setProperty("transform", "translate3d(0, 0, 0)");
  });
});
