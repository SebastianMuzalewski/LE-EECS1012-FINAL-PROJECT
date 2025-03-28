/*
 * toggleNavbar: Allows the user to open/close the navbar using the 
 *               navbarToggle id
 */

function toggleNavbar() {
    let navbar = document.getElementById('navbarToggle');
    let body = document.body;

    // Hides the navbar
    navbar.classList.toggle('nav-hidden');
    // Shows the navbar
    navbar.classList.toggle('nav-visible');
    
    // Animation ease-in-out, As well for navbar leaf
    if (navbar.classList.contains('nav-visible')){
        body.classList.remove('navbar-close');
        body.classList.add('navbar-open');
    } else { 
        body.classList.remove('navbar-open');
        body.classList.add('navbar-close');
    }
    
}
