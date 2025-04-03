import { formValidation } from "../patientForm/formValidation.js";

// This is used to fix the bug related to 
// Uncaught ReferenceError: subClick is not defined
window.subClick = subClick;

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
        var name = document.getElementById('firstName').value;
        var dateTime = document.getElementById('dateTime').value;

        document.getElementById('subInfoName').textContent = `Patient name: ${name}`;
        document.getElementById('subInfoTime').textContent = `Date & Time: ${dateTime}`;

        document.getElementById('alertMsg').style.display = 'block';
  
        // Patientdata collects the information needed to be passed to the addPatient API
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

    // Sends the patientData to the server
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
    function closeAlert() {
        document.getElementById('alertMsg').style.display = 'none';
    }
    
    document.getElementById('btnClose').onclick = closeAlert;
    document.getElementById('cornerClose').onclick = closeAlert;

};