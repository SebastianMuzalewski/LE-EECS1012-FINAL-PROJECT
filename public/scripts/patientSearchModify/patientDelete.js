// Global Variables
let selectedRowIndex = null; 
let selectedPatientName = "";

// This is used to fix the bug related to 
// Uncaught ReferenceError: subClick is not defined
window.subDeleteClick = subDeleteClick;

// Function used to set the index of the table when the row is clicked on
// Similar to patientModify choosenRow function
function choosenRow(event){
    if(event.target && event.target.nodeName === 'TD'){
        let row = event.target.parentNode;
        
        // Starts at 0 with -1
        selectedRowIndex = row.rowIndex - 1;
        
        // Gets the name of the patient
        selectedPatientName = row.cells[0].textContent;

        console.log("Patient selected: ", selectedPatientName)
    }       
}

// Used for clearing the forms to empty fields
function resetFormFields() {
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

/*
 * subDeleteClick: Warns the user about deleting the patient. When the patient is deleted
 *                 it is removed from the patient from the array.
 */

function subDeleteClick() {
    let warnPopup = document.getElementById('alertMsgWarn');
    let deletePopup = document.getElementById('alertMsgDelete');

    // Used to prevent the delete pop-up when no patient is selected
    if (!selectedPatientName) { 
        return;
    }

    // Shows the patient name for the pop-up when the patient is going to be deleted
    if (selectedPatientName) {
        document.getElementById('subInfoWarn').textContent = 
            `Are you sure you want to delete ${selectedPatientName} from the schedule?`;
    }

    // Set the warning oto visisble intitialy
    warnPopup.style.display = 'block';

    // Message disappears if the no button is clicked on
    document.getElementById('btnCloseNo').onclick = function() {
        warnPopup.style.display = 'none';
    };

    // Shows the deleted message when the confimation is yes
    document.getElementById('btnCloseYes').onclick = function() {
        warnPopup.style.display = 'none';
        deletePopup.style.display = 'block'; 
    };

    // Closes button to confirm deletion
    document.getElementById('btnClose').onclick = function() {
        deletePopup.style.display = 'none'; 
    };

    // Closes popup for corner click
    document.getElementById('cornerCloseWarn').onclick = function() {
        warnPopup.style.display = 'none';
    };

    // Closes popup for corner click
    document.getElementById('cornerCloseDelete').onclick = function() {
        deletePopup.style.display = 'none'; 
    };

    // When the yes button is click on
    document.getElementById('btnCloseYes').addEventListener('click', function() {
        // Checks if the choosen name is not null
        if (selectedPatientName) {
    
                // Remove the patient from the table
                const table = document.getElementById('patientDataTable');
                const rows = table.rows;

                // Loops through the whole table of patients
                // When the patient name matches cell 0 name based on row delete the patient
                // Break is used to exit immediately after patient is found
                for (let i = 0; i < rows.length; i++) {
                    if (rows[i].cells[0].textContent === selectedPatientName) {
                        table.deleteRow(i);
                        break;
                    }
                }

                // Resets the global variables and form fields
                selectedRowIndex = null;
                selectedPatientName = "";
                resetFormFields();
        }
    });
}

// Waiting to click the choosen row within the table
document.getElementById('patientDataTable').addEventListener('click', choosenRow);

// Prevents the immediate submission of the data and then calls the subDeleteClick
document.getElementById('subDeleteAlert').addEventListener('click', function(event) {
    event.preventDefault(); 
    subDeleteClick();
});