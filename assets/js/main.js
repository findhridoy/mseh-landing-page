const navMenu = document.getElementById("nav-menu");
const navHamburger = document.getElementById("nav-hamburger");
const navLink = document.querySelectorAll(".nav__link");

navHamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
  navHamburger.classList.toggle("cross-hamburger");
});

navLink.forEach((item) => {
  item.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    navHamburger.classList.remove("cross-hamburger");
  });
});
