const buttonNavbarMobile = document.querySelector(".button-navbar-mobile");
const navbarList = document.querySelector(".navbar-container .navbar-list");

buttonNavbarMobile.onclick = (e) => {
  e.preventDefault();
  navbarList.classList.toggle("show");
};
