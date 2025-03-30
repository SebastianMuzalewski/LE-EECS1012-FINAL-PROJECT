// Global Scope
let selectedRowIndex = null; 
let selectedPatientName = "";

// Function used to set the index of the table when the row is clicked on
document.getElementById('patientDataTable').addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'TD') {
        let row = event.target.parentNode;
        // -1 because of the header
        selectedRowIndex = row.rowIndex - 1; 
        // Sets the patient name based on the first index of the row
        selectedPatientName = row.cells[0].textContent; 

        console.log("Selected Patient Name:", selectedPatientName); // Console log the name
    }
});

/*
 * subDeleteClick: Warns the user about deleting the patient. When the patient is deleted
 *                 it is removed from the patient from the array.
 */

function subDeleteClick() {
    // Used to prevent the delete pop-up when no patient is selected
    if (!selectedPatientName) { 
        return;
    }

    // Shows the patient name for the pop-up when the patient is going to be deleted
    if (selectedPatientName) {
        document.getElementById('subInfoWarn').textContent = 
            `Are you sure you want to delete ${selectedPatientName} from the schedule?`;
    }

    document.getElementById('alertMsgWarn').style.display = 'block';

    // Message disappears if the no button is clicked on
    document.getElementById('btnCloseNo').onclick = function() {
        document.getElementById('alertMsgWarn').style.display = 'none';
    };

    // Shows the deleted message when the confimation is yes
    document.getElementById('btnCloseYes').onclick = function() {
        document.getElementById('alertMsgWarn').style.display = 'none';
        document.getElementById('alertMsgDelete').style.display = 'block'; 
    };

    // Closes button to confirm deletion
    document.getElementById('btnClose').onclick = function() {
        document.getElementById('alertMsgDelete').style.display = 'none'; 
    };

    // Closes popup for corner click
    document.getElementById('cornerCloseWarn').onclick = function() {
        document.getElementById('alertMsgWarn').style.display = 'none';
    };

    // Closes popup for corner click
    document.getElementById('cornerCloseDelete').onclick = function() {
        document.getElementById('alertMsgDelete').style.display = 'none'; 
    };

    
    document.getElementById('btnCloseYes').addEventListener('click', function() {
        // Checks if the row is not null
        if (selectedPatientName) {
    
                // Remove the patient from the table
                const table = document.getElementById('patientDataTable');
                const rows = table.rows;

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

// Prevents the immediate submission of the data and then calls the subDeleteClick
document.getElementById('subDeleteAlert').addEventListener('click', function(event) {
    event.preventDefault(); 
    subDeleteClick();
});