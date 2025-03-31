function darkmode(){
    var darkmode_toggle = document.getElementById("appearanceToggle");
    var darkmode_state_darkmode = document.getElementById("state");
    var darkmode = document.getElementById("darkmode");
    
    if (darkmode_toggle.checked) {
        darkmode_state_darkmode.innerHTML = "On"    //changes the state of the dark mode to on 
        darkmode.setAttribute ("href", "styles/darkmode/darkmode_universal.css"); //adds the darkmode css file to the html files that overrides the colors of the main css file
    
    } else {
        darkmode_state_darkmode.innerHTML = "Off" //changes the state of the darkmmode to off
        darkmode.setAttribute ("href" ,""); //removes the darmode css file 
    }
    }