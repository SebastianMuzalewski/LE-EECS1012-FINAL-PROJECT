function formValidation(){
    let isValid = true;
    // Form fields saved to an array
    const correctFields = [
        { id: 'firstName', pattern: /^[A-Za-z]+$/ },
        { id: 'lastName', pattern: /^[A-Za-z]+$/ },
        { id: 'phoneNum', pattern: /^\+1\s\d{3}-\d{3}-\d{4}$/ },
        { id: 'address', pattern: /.+/ },
        { id: 'zipCode', pattern: /[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/ },
        { id: 'billing', pattern: /.+/ },
        { id: 'payMethod', pattern: /.+/ },
        { id: 'cardNum', pattern: /\d{4}-\d{4}-\d{4}-\d{4}/ },
        { id: 'creditCardHolder', pattern: /.+/ },
        { id: 'cvv', pattern: /\d{3,4}$/ },
        { id: 'dateTime', pattern: /.+/ },
        { id: 'appointmentType', pattern: /.+/ },
    ];

    // Logic for images showing up when the input is incorrect
    const notifIcons = document.querySelectorAll('.notifIcon, #notifIconSelect, #notifIconConflict');
    notifIcons.forEach(icon => icon.style.display = 'none');

    correctFields.forEach(field => {
        const inputElement = document.getElementById(field.id);
        const notifIcon = inputElement.parentNode.querySelector('img');    

    if(!inputElement.value.match(field.pattern)) {
        isValid = false;
        notifIcon.style.display = 'block';
    }});
    return isValid;
}

// Submit logic which passes name and date
function subClick(){
    
    if(formValidation()) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const dateTime = document.getElementById('dateTime').value;

        document.getElementById('subInfoName').textContent = `Patient name: ${firstName}`;
        document.getElementById('subInfoTime').textContent = `Date & Time: ${dateTime}`;
    
        document.getElementById('alertMsg').style.display = 'block';
    }

    document.getElementById('btnClose').onclick = function() {
        document.getElementById('alertMsg').style.display='none';
        document.getElementById('splitContainer').submit();
    };
    
    document.getElementById('cornerClose').onclick = function() {
        document.getElementById('alertMsg').style.display='none';
        document.getElementById('splitContainer').submit();
    };
}