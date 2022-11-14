const header = document.querySelector(".header");
const iconMobile = document.querySelector(".header__icon-mobile");
const listMobile = document.querySelector(".header__list-mobile");
const overlayMobile = document.querySelector(".header__overlay-mobile");

function displayMenuOnMobile() {
    iconMobile.classList.toggle("active");
    listMobile.classList.toggle("show");
    overlayMobile.classList.toggle("show");

    iconMobile.classList.contains("active")
        ? header.setAttribute("style", "border-color: #ffffff;")
        : header.removeAttribute("style");
}

iconMobile.onclick = displayMenuOnMobile;

overlayMobile.onclick = displayMenuOnMobile;
