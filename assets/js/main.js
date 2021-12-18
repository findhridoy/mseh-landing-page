const navMenu = document.getElementById("nav-menu");
const navHamburger = document.getElementById("nav-hamburger");
const navLink = document.querySelectorAll(".nav__link");

// Toggle Hamburger Menu
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

// Hero Section parralax effect
const topImage = document.getElementById("top-img");
const middleImage = document.getElementById("middle-img");
const bottomImage = document.getElementById("bottom-img");
const heroData = document.getElementById("hero-data");

window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;
  topImage.style.transform = `translateY(-${scrollPosition * 0.1}%)`;
  middleImage.style.transform = `translateY(-${scrollPosition * 0.2}%)`;
  bottomImage.style.transform = `translateY(-${scrollPosition * 0.1}%)`;
  heroData.style.transform = `translateY(-${scrollPosition * 0.1}%)`;
  heroData.style.opacity = 1 - scrollPosition * 0.004;
});
