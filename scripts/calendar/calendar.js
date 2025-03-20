// Toggles Navbar if icon is clicked
// Shifts the header if the navbar is open
function toggleNavbar() {
    let navbar = document.getElementById('navbarToggle');
    let body = document.body;

    navbar.classList.toggle('active'); 
    body.classList.toggle('navbar-closed');
}
