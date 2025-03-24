/********************************************************************
* formValidation: Saves important fields into an array. It checks if*
*                 the fields are valid input based on the pattern   *
*                 when the pattern is incorrect certain images will *
*                 display as a result. Date is manually checked     *
*                 since on valid dates are applicable.              * 
*********************************************************************/

function formValidation(){
    let flag = true;
    // Form fields saved to an array, Date is moved to a manual check since more critical validation is needed
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

    // Loops through the array 
    for(let i = 0; i < correctFields.length; i++){
        const field = correctFields[i];
        const inputElement = document.getElementById(field.id);
        const notifIcon = inputElement.parentNode.querySelector('img');
   
        // Checks if the matched input for the form was null
        if(inputElement.value.match(field.pattern) === null) {
            flag = false;
            notifIcon.style.display = 'block';
        }
    }

    // Checking date input manually using the date object
    const dateTimeFormInput = document.getElementById('dateTime');
    const dateTimeValue = dateTimeFormInput.value;

    // Checks if the value is not empty 
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
        if(dayOfWeek === 0){
            flag = false;
            document.getElementById('notifIconConflict').style.display = 'block';
        }

        // First check: Is it greater than 6:00 PM in minutes
        // Second Check: Is it greater than 6:00 PM for hours
        // Finale Check: Is it less than 8:00 AM for hours
        if(hours < 8 || (hours > 18 || (hours === 18 && minutes > 0))){
            flag = false;
            document.getElementById('notifIconConflict').style.display = 'block';
        }

    // Checks by default if the value is empty
    } else {
        flag = false;
        document.getElementById('notifIconConflict').style.display = 'block';
    }
    return flag;
}

/********************************************************************
* subClick: event.preventDefault(); prevents the page from instally *
*           reloading when the information is sent. If the form is  *
*           incorrect then it will not proceed with the function    *
*           without it the form will submit without date checking.  *
*           Once the form is submitted the first name and date get  *
*           passed to a custom pop-up that shows the patient has    *
*           been submitted.                                         *
*********************************************************************/

function subClick(){
    // Prevents form from instantly sending
    event.preventDefault();
    
    // Return if the form is wrong
    if(!formValidation()) {
        return;
    }
        
        const firstName = document.getElementById('firstName').value;
        const dateTime = document.getElementById('dateTime').value;

        document.getElementById('subInfoName').textContent = `Patient name: ${firstName}`;
        document.getElementById('subInfoTime').textContent = `Date & Time: ${dateTime}`;
    
        document.getElementById('alertMsg').style.display = 'block';
    
    // If they click the ok button then close the pop-up
    document.getElementById('btnClose').onclick = function() {
        document.getElementById('alertMsg').style.display='none';
        document.getElementById('splitContainer').submit();
    };
    
    //If they click the corner button then close the pop-up
    document.getElementById('cornerClose').onclick = function() {
        document.getElementById('alertMsg').style.display='none';
        document.getElementById('splitContainer').submit();
    };
}