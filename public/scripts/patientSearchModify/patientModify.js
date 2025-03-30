/*
 * formValidation: Checks required fields against predefined patterns.
 *                 Date/Time is verified manually. 
 */

function formValidation(){
    let flag = true;
    // Form fields saved to an array with id & pattern
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
   
        // Checks if the input matches the pattern, If not flag is false
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

// Function used to set the index of the table when the row is clicked on
document.getElementById('patientDataTable').addEventListener('click', function(event) {

    // Checks if the target is table cell if clicked on
    if (event.target && event.target.nodeName === 'TD') {
        var row = event.target.parentNode;
        // -1 for the header
        var rowIndex = row.rowIndex - 1; 
        // Global variable that is accessable
        window.selectedRowIndex = rowIndex;
    }
});

/*
 * subSaveClick: Grabs the values based on the row that was clicked,
 *               Then the rows get updated when changes are mad.
 */

function subSaveClick() {

    fetch('/api/patientData')
        .then(response => {
            return response.json()
        })
        .then(data => {
             // Iterates over the patient array and grabs: firstName, lastName & Date
           
            patientData = data;
            console.log(patientData);
        
            if (!formValidation()) {
                return;
            }
        
            // Grabs all the values 
            var firstName = document.getElementById('firstName').value;
            var lastName = document.getElementById('lastName').value;
            var dateTime = document.getElementById('dateTime').value;
            var phoneNum = document.getElementById("phoneNum").value;
            var address = document.getElementById("address").value;
            var zipCode = document.getElementById("zipCode").value;
            var insuranceName = document.getElementById("insuranceName").value;
            var billing = document.getElementById("billing").value;
            var payMethod = document.getElementById("payMethod").value;
            var cardNum = document.getElementById("cardNum").value;
            var creditCardHolder = document.getElementById("creditCardHolder").value;
            var cvv = document.getElementById("cvv").value;
            var appointmentType = document.getElementById("appointmentType").value;
            var preDentist = document.getElementById("preDentist").value;
            var allergies = document.getElementById("allergies").value;
            var curMed = document.getElementById("curMed").value;
            var medCond = document.getElementById("medCond").value;
            var additionalInfo = document.getElementById("additionalInfo").value;
        
            // Finds the row that is being selected. Uses window to select the row
            var rowIndex = window.selectedRowIndex;
            var table = document.getElementById('patientDataTable');
            var row = table.rows[rowIndex];
        
            // Updates the row with the name & date. 
            // Very important since name and date needs to be reflected in the code
            row.cells[0].textContent = firstName + ' ' + lastName; 
            row.cells[1].textContent = dateTime; 
        
            // Based on what was selected. The values become updated in the array
            var rowIndex = window.selectedRowIndex;
            var updatedPatient = patientData[rowIndex];
            console.log("Updating patient at index:", rowIndex, updatedPatient);

            updatedPatient.firstName = firstName;
            updatedPatient.lastName = lastName;
            updatedPatient.dateTime = dateTime;
            updatedPatient.phoneNum = phoneNum;
            updatedPatient.address = address;
            updatedPatient.zipCode = zipCode;
            updatedPatient.insuranceName = insuranceName;
            updatedPatient.billing = billing;
            updatedPatient.payMethod = payMethod;
            updatedPatient.cardNum = cardNum;
            updatedPatient.creditCardHolder = creditCardHolder;
            updatedPatient.cvv = cvv;
            updatedPatient.appointmentType = appointmentType;
            updatedPatient.preDentist = preDentist;
            updatedPatient.allergies = allergies;
            updatedPatient.curMed = curMed;
            updatedPatient.medCond = medCond;
            updatedPatient.additionalInfo = additionalInfo;
        
            console.log(patientData); // Check for patientData update

            
            // Clears input by calling the function
            resetFormFields();

           return fetch('api/savePatientData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(patientData)
            })
            .then(response => {
                return response.json()
            })
        }); 
}

// Used for clearing the forms to empty fields
function resetFormFields() {


    // Resets the select row
    window.selectedRowIndex = null;

    document.getElementById("firstName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("phoneNum").value = '';
    document.getElementById("address").value = '';
    document.getElementById("zipCode").value = '';
    document.getElementById("insuranceName").value = '';
    document.getElementById("billing").value = '';
    document.getElementById("payMethod").value = '';
    document.getElementById("cardNum").value = '';
    document.getElementById("creditCardHolder").value = '';
    document.getElementById("cvv").value = '';
    document.getElementById("dateTime").value = '';
    document.getElementById("appointmentType").value = '';
    document.getElementById("preDentist").value = '';
    document.getElementById("allergies").value = '';
    document.getElementById("curMed").value = '';
    document.getElementById("medCond").value = '';
    document.getElementById("additionalInfo").value = '';
}

// Prevents the immediate submission of the data and then calls the subSaveClick
document.getElementById('subSaveAlert').addEventListener('click', function(event) {
    event.preventDefault(); 
    subSaveClick();
});