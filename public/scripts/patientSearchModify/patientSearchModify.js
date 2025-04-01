/*
 * populateData: Populates the table with pre-defined patient info.
 *               Only displays the full name & date in the table, While everything
 *               else is waiting to be called when the patient is clicked.
 *               from the populateForm function.             
 */

function populateData(){
    const tableBody = document.getElementById("patientDataTable");

    // Sends a GET requst to retrieve the pre-defined patient data in server.js
    fetch('/api/patientData')
        .then(response => response.json())
        .then(patientData => {
             // Iterates over the patient array and grabs: firstName, lastName & Date
            patientData.forEach(patient => {
                const row = document.createElement("tr");
        
                const fullNameCell = document.createElement("td");
                
                fullNameCell.textContent = `${patient.firstName} ${patient.lastName}`;
             
                const dateCell = document.createElement("td");
                dateCell.textContent = patient.dateTime;
        
                // Adds Name & Date, Then adds the next row for patient insertion
                row.appendChild(fullNameCell);
                row.appendChild(dateCell);
                tableBody.appendChild(row)
        
                // When the specified row is selected the populateForm function is called and the patients information populates the fields
                row.addEventListener("click" , function() {
                    populateForm(patient);
                });
            });
        })
        .catch(error => {
            console.log('Patient was fetched incorrectly', error);
        });
}

/*
 * populateForm: Fills the form with the patient data when the row with
 *               the patient name is clicked. The || '' is for the fields
 *               that are empty, Mainly not required fields.    
 */

function populateForm(patient){
    document.getElementById("firstName").value = patient.firstName;
    document.getElementById("lastName").value = patient.lastName;
    document.getElementById("phoneNum").value = patient.phoneNum;
    document.getElementById("address").value = patient.address;
    document.getElementById("zipCode").value = patient.zipCode;
    document.getElementById("insuranceName").value = patient.insuranceName || "";
    document.getElementById("billing").value = patient.billing;
    document.getElementById("payMethod").value = patient.payMethod;
    document.getElementById("cardNum").value = patient.cardNum;
    document.getElementById("creditCardHolder").value = patient.creditCardHolder;
    document.getElementById("cardNum").value = patient.cardNum;
    document.getElementById("cvv").value = patient.cvv;

    // Date is handled manually to accomodate for Time
    // Time Zone Specific, Set to Ontario time zone in localDate (GMT-4)
    const formattedDate = new Date(patient.dateTime);
    // First step: Converts passed Date/Time to timestamp
    // Second step: TimezoneOffset is used to adjust the local timezone, UTC to GMT-4
    const localDate = new Date(formattedDate.getTime() - formattedDate.getTimezoneOffset() * 60000);
    // Last step: Converts localDate to an ISO 8601 string which extracts
    // the date format need to correct display the date in the input field (YYYY-MM-DDTHH:mm)
    const formattedDateTime = localDate.toISOString().slice(0, 16);
    
    // Same as above but set for the end time and gets the time for an hour later
    const formattedEndTime = new Date(formattedDate.getTime() + 60 * 60 * 1000);
    const localEndTime = new Date(formattedEndTime.getTime() - formattedEndTime.getTimezoneOffset() * 60000);
    const formattedDateEndTime = localEndTime.toISOString().slice(0,16);

    console.log(formattedDate); // Console test for start date/time
    console.log(formattedEndTime); // Console test for end date/time

    document.getElementById("dateTime").value = formattedDateTime;
    document.getElementById("appointmentType").value = patient.appointmentType;
    document.getElementById("preDentist").value = patient.preDentist || "";
    document.getElementById("allergies").value = patient.allergies || "";
    document.getElementById("curMed").value = patient.curMed || "";
    document.getElementById("medCond").value = patient.medCond || "";
    document.getElementById("additionalInfo").value = patient.additionalInfo || "";
    document.getElementById("endTime").value = formattedDateEndTime;
}

// Loads the patients dynamically

document.addEventListener("DOMContentLoaded", function() {
    populateData();
});