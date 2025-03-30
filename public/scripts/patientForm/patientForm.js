/*
 * formValidation: Checks required fields against predefined patterns.
 *                 Date/Time is verified manually.                 
 */

function formValidation(){
    let flag = true;
    // Form fields saved to an array with id & regex pattern
    const correctFields = [
        { id: 'firstName', pattern: /^[A-Za-z]+$/ },
        { id: 'lastName', pattern: /^[A-Za-z]+$/ },
        { id: 'phoneNum', pattern: /^\+1\s\d{3}-\d{3}-\d{4}$/ },
        { id: 'address', pattern: /.+/ },
        { id: 'zipCode', pattern: /[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/ },
        { id: 'billing', pattern: /.+/ },
        { id: 'payMethod', pattern: /.+/ },
        { id: 'cardNum', pattern: /\d{4}-\d{4}-\d{4}-\d{4}/ },
        { id: 'creditCardHolder', pattern: /^[A-Za-z]+$/ },
        { id: 'cvv', pattern: /\d{3,4}$/ },
        { id: 'appointmentType', pattern: /.+/ },
    ];

    // Set images to hidden initially
    const notifIcons = document.querySelectorAll('.notifIcon, #notifIconSelect, #notifIconConflict');
    notifIcons.forEach(icon => icon.style.display = 'none');

    // Loops through the array of fields
    for(let i = 0; i < correctFields.length; i++){
        const field = correctFields[i];
        const inputElement = document.getElementById(field.id);
        const notifIcon = inputElement.parentNode.querySelector('img');
   
        // Checks if the input matches it's pattern, If not flag is false
        if(inputElement.value.match(field.pattern) === null) {
            flag = false;
            notifIcon.style.display = 'block';
        }
    }

    // Checking date input manually using the date object
    const dateTimeFormInput = document.getElementById('dateTime');
    const dateTimeValue = dateTimeFormInput.value;

    // Checks if year, day & hour are valid range
    if(dateTimeValue) {
        const selectedDateTime = new Date(dateTimeValue);
        const year = selectedDateTime.getFullYear();
        const dayOfWeek = selectedDateTime.getDay();
        const hours = selectedDateTime.getHours();
        const minutes = selectedDateTime.getMinutes();

        // If year is before 2025
        if(year < 2025){
            flag = false;
            document.getElementById('notifIconConflict').style.display = 'block';
        }

        // Index 0 is Sunday and Index 6 is Saturday
        // Cannot be set to Sunday (0)
        if(dayOfWeek === 0){
            flag = false;
            document.getElementById('notifIconConflict').style.display = 'block';
        }

        // First check: Is it greater than 6:00 PM in minutes
        // Second Check: Is it greater than 6:00 PM in hours
        // Finale Check: Is it less than 8:00 AM in hours
        if(hours < 8 || (hours > 18 || (hours === 18 && minutes > 0))){
            flag = false;
            document.getElementById('notifIconConflict').style.display = 'block';
        }

    // When date field is empty, flag is false
    } else {
        flag = false;
        document.getElementById('notifIconConflict').style.display = 'block';
    }
    return flag;
}
/*
 * subClick: Responsible for form submission by allowing the user to 
 *           submit the patient data if everything has been validated                                     *
 */

function subClick(){
    // Prevents form from instantly submiting
    // Allows for pop-up to display, Without it instant submission
    event.preventDefault();
    
    // Returns false if the form is wrong, Exits function
    if(formValidation() === false) {
        return false;
    }
        // Retrieves user input to display on pop-up
        const firstName = document.getElementById('firstName').value;
        const dateTime = document.getElementById('dateTime').value;

        document.getElementById('subInfoName').textContent = `Patient name: ${firstName}`;
        document.getElementById('subInfoTime').textContent = `Date & Time: ${dateTime}`;
        document.getElementById('alertMsg').style.display = 'block';
    
        const patientData = {
                firstName: document.getElementById("firstName").value, 
                lastName: document.getElementById("lastName").value,
                phoneNum: document.getElementById("phoneNum").value,
                address: document.getElementById("address").value,
                zipCode: document.getElementById("zipCode").value,
                insuranceName: document.getElementById("insuranceName").value || "",
                billing: document.getElementById("billing").value,
                payMethod: document.getElementById("payMethod").value,
                cardNum: document.getElementById("cardNum").value,
                creditCardHolder: document.getElementById("creditCardHolder").value,
                cvv: document.getElementById("cvv").value,
                dateTime: document.getElementById("dateTime").value,
                appointmentType: document.getElementById("appointmentType").value,
                preDentist: document.getElementById("preDentist").value || "",
                allergies: document.getElementById("allergies").value || "",
                curMed: document.getElementById("curMed").value || "",
                medCond: document.getElementById("medCond").value || "",
                additionalInfo: document.getElementById("additionalInfo").value || "",
            };

    fetch('/api/addPatient', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patientData)
        })
        .then(response => {
            console.log(response);
            return response.json()
        })
        .then(data => {
            console.log('Data has beeen submited', data);
            document.getElementById('splitContainer').reset();
        })
        .catch(error => {
            console.log('Error has occured', error);
    });

    // If they click the ok button then close the pop-up
    document.getElementById('btnClose').onclick = function() {
        document.getElementById('alertMsg').style.display='none';
    };
    
    //If they click the corner button then close the pop-up
    document.getElementById('cornerClose').onclick = function() {
        document.getElementById('alertMsg').style.display='none';
    };
}