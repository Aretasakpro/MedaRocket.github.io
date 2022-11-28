
const navbar = document.querySelector('#NavbarScroll')
const logoNavbar = document.querySelector('#logoNavbar')
const logoImgNavbar = document.querySelector('#logoImgNavbar')


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        logoNavbar.classList.add('gradiente-lg-afterscroll')
        logoNavbar.classList.remove('gradiente-lg')
        logoImgNavbar.classList.add('nav-icon-afterscroll')
        logoImgNavbar.classList.remove('nav-icon')
        navbar.classList.add('navbar-after-scroll')
        
        
    } else {
        logoNavbar.classList.remove('gradiente-lg-afterscroll')
        logoNavbar.classList.add('gradiente-lg')
        logoImgNavbar.classList.remove('nav-icon-afterscroll')
        logoImgNavbar.classList.add('nav-icon')
        navbar.classList.remove('navbar-after-scroll')
        
    }
}


