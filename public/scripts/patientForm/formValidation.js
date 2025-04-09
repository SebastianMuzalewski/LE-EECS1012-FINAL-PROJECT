/*
 * formValidation: Checks required fields against predefined patterns in
 *                 the HTML code. Date/Time is verified manually.                 
 */

export function formValidation(){
    let validUserInput = true;

    // Fields that need to be checked
    let verifyFields = [
        'firstName',
        'lastName',
        'phoneNum',
        'address',
        'zipCode',
        'billing',
        'payMethod',
        'cardNum',
        'creditCardHolder',
        'cvv',
        'appointmentType'
    ];

    // Set images to hidden initially
    let notifIcons = document.querySelectorAll('.notifIcon, #notifIconSelect, #notifIconConflict');
    for (let i = 0; i < notifIcons.length; i++){
        notifIcons[i].style.display = 'none';
    }

    // Loops through the array of fields
    for(let i = 0; i < verifyFields.length; i++){
        let field = verifyFields[i];
        let inputElement = document.getElementById(field);
        let notifIcons = inputElement.parentNode.querySelector('img');
   
        // Checks if the input matches it's pattern or empty
        if(inputElement.value === '' || !inputElement.checkValidity()) {
            validUserInput = false;
            notifIcons.style.display = 'block';
        }
    }

    // Checking date input manually using the date object
    let dateTimeInput = document.getElementById('dateTime');
    let dateTimeValue = dateTimeInput.value;

    let showDateTimeConflict = document.getElementById('notifIconConflict');

    // Checks if year, day & hour are valid range
    if(dateTimeValue) {
        let selectedDateTime = new Date(dateTimeValue);
        let year = selectedDateTime.getFullYear();
        let dayOfWeek = selectedDateTime.getDay();
        let hours = selectedDateTime.getHours();
        let minutes = selectedDateTime.getMinutes();

        // If year is before 2025
        if(year < 2025){
            validUserInput = false;
            showDateTimeConflict.style.display = 'block';
        }

        // Index 0 is Sunday and Index 6 is Saturday
        // Cannot be set to Sunday (0)
        if(dayOfWeek === 0){
            validUserInput = false;
            showDateTimeConflict.style.display = 'block';
        }

        // First check: Is it greater than 6:00 PM in minutes
        // Second Check: Is it greater than 6:00 PM in hours
        // Finale Check: Is it less than 8:00 AM in hours
        if(hours < 8 || (hours > 18 || (hours === 18 && minutes > 0))){
            validUserInput = false;
            showDateTimeConflict.style.display = 'block';
        }

    // When date field is empty, validUserInput is false
    } else {
        validUserInput = false;
        showDateTimeConflict.style.display = 'block';
    }
    return validUserInput;
}