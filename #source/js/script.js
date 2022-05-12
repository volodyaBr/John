function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

const burger = document.querySelector(".menu__burger")
const menuNav = document.querySelector(".menu__nav")

burger.addEventListener("click", e => {
    burger.classList.toggle("active")
    menuNav.classList.toggle("active")
    document.body.classList.toggle("lock")
})