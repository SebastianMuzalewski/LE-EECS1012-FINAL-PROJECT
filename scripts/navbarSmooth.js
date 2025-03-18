// Event Listener for navbar open/close animation

function toggleNavbar() {
    let navbar = document.getElementById('navbarToggle');
    let body = document.body;

    navbar.classList.toggle('nav-hidden');
    navbar.classList.toggle('nav-visible');
    
    if (navbar.classList.contains('nav-visible')){
        body.classList.remove('navbar-close');
        body.classList.add('navbar-open');
    } else { 
        body.classList.remove('navbar-open');
        body.classList.add('navbar-close');
    }
    
}
