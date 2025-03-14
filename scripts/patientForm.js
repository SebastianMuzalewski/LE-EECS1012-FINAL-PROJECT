// Toggles Navbar if icon is clicked
// Shifts the header if the navbar is open
function toggleNavbar() {
    let navbar = document.getElementById('navbarToggle');
    let body = document.body;

    navbar.classList.toggle('active'); 
    body.classList.toggle('navbar-closed');
}

function subClick(){
    
    document.getElementById('alertMsg').style.display = 'block';

    document.getElementById('btnClose').onclick = function() {
        document.getElementById('alertMsg').style.display='none';
    };

    document.getElementById('cornerClose').onclick = function() {
        document.getElementById('alertMsg').style.display='none';
    };
    
}