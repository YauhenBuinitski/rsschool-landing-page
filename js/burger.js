const burgerBtn = document.querySelector(".header__burger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuLinks = document.querySelectorAll(".mobile-menu__link");
function openMenu() {
  mobileMenu.classList.add("open");
  document.body.classList.add("no-scroll");
  burgerBtn.classList.add("active");
  burgerBtn.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  mobileMenu.classList.remove("open");
  document.body.classList.remove("no-scroll");
  burgerBtn.classList.remove("active");
  burgerBtn.setAttribute("aria-expanded", "false");
}

burgerBtn.addEventListener("click", function () {
  if (mobileMenu.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

menuLinks.forEach(function (link) {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && mobileMenu.classList.contains("open")) {
    closeMenu();
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 768 && mobileMenu.classList.contains("open")) {
    closeMenu();
  }
});
