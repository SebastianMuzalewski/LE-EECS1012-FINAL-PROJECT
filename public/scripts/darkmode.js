function darkmode(){
    var darkmode_main_procedure  = document.getElementById("darkmode_main_procedure");
    var darkmode_toggle = document.getElementById("appearanceToggle");
    var darkmode_state_procedure = document.getElementById("state_procedure");
    var darkmode_navbar_procedure  = document.getElementById("darkmode_navbar_procedure");
    var darkmode_footer_procedure = document.getElementById("darkmode_footer_procedure");
    
    if (darkmode_toggle.checked) {
        darkmode_main_procedure.setAttribute("href", "styles/procedure/procedure_darkmode.css");
        darkmode_navbar_procedure.setAttribute("href", "styles/navbar_darkmode.css")
        darkmode_footer_procedure.setAttribute("href", "styles/footer_darkmode.css")
        darkmode_state_procedure.innerHTML = "On"
    
    } else {
        darkmode_main_procedure.setAttribute("href", "styles/procedure/procedure.css");
        darkmode_navbar_procedure.setAttribute("href", "styles/navbar.css");
        darkmode_footer_procedure.setAttribute("href", "styles/footer.css");
        darkmode_state_procedure.innerHTML = "Off"
    }
    }