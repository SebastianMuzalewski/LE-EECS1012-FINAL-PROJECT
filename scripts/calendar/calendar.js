// Toggles Navbar if icon is clicked
// Shifts the header if the navbar is open
import {initViewSelect} from "./viewselect.js";
import {initCalendar} from  "./calendar-view.js";

initCalendar();
initViewSelect();
function toggleNavbar() {
    let navbar = document.getElementById('navbarToggle');
    let body = document.body;

    navbar.classList.toggle('active'); 
    body.classList.toggle('navbar-closed');
}
