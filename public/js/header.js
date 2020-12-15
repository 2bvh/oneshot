const navToggle = document.querySelector(".navbar-toggle");
const mobileNav = document.querySelector(".nav-links");
const mobileNavClose = document.querySelector(".navbar-close");

navToggle.addEventListener("click", function () {
  mobileNav.style.right = 0;
});

mobileNavClose.addEventListener("click", function () {
  mobileNav.style.right = "-250px";
});
