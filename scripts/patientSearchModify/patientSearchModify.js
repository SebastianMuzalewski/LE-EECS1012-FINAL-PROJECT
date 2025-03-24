
function populateData(){
    const tableBody = document.getElementById("patientDataTable");
    tableBody.innerHTML = "";

    patientData.forEach(patient => {
        const row = document.createElement("tr");

        const fullNameCell = document.createElement("td");
        
        fullNameCell.textContent = `${patient.firstName} ${patient.lastName}`;
     
        const dateCell = document.createElement("td");
        dateCell.textContent = patient.dateTime;

        row.addEventListener("click" , function() {
            populateForm(patient);
        });

        row.appendChild(fullNameCell);
        row.appendChild(dateCell);
        tableBody.appendChild(row)
    });
}

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

    // Time Zone Specific, Set to Ontario time zone in localDate (GMT-4)
    const formattedDate = new Date(patient.dateTime);
    const localDate = new Date(formattedDate.getTime() - formattedDate.getTimezoneOffset() * 60000);
    const formattedDateTime = localDate.toISOString().slice(0, 16);
    console.log(formattedDate);

    document.getElementById("dateTime").value = formattedDateTime;
    document.getElementById("appointmentType").value = patient.appointmentType;
    document.getElementById("preDentist").value = patient.preDentist || "";
    document.getElementById("allergies").value = patient.allergies || "";
    document.getElementById("curMed").value = patient.curMed || "";
    document.getElementById("medCond").value = patient.medCond || "";
    document.getElementById("additionalInfo").value = patient.additionalInfo || "";
}

function subDeleteClick(){
    
    document.getElementById('alertMsgWarn').style.display = 'block';

    document.getElementById('btnCloseNo').onclick = function() {
        document.getElementById('alertMsgWarn').style.display='none';
    };

    document.getElementById('btnCloseYes').onclick = function() {
        document.getElementById('alertMsgWarn').style.display='none';
        document.getElementById('alertMsgDelete').style.display='block';
    };

    document.getElementById('btnClose').onclick = function() {
        document.getElementById('alertMsgDelete').style.display='none';
    };

    document.getElementById('cornerCloseWarn').onclick = function() {
        document.getElementById('alertMsgWarn').style.display='none'; 
    };
    document.getElementById('cornerCloseDelete').onclick = function() {
        document.getElementById('alertMsgDelete').style.display='none'; 
    };
}

window.addEventListener("DOMContentLoaded", populateData);

// Array list of patients by default when the page is loaded
const patientData = [
    {
        firstName: "Alice", 
        lastName: "Smith",
        phoneNum: "+1 123-456-1234",
        address: "4321 Oak Drive",
        zipCode: "B1C 4T5",
        insuranceName: "HealthPlus",
        billing: "5678 Maple Ave",
        payMethod: "Mastercard",
        cardNum: "2345-6789-0123-4567",
        creditCardHolder: "Ms Alice Smith",
        cvv: "783",
        dateTime: "2025/03/14, 8:30 am",
        appointmentType: "Filling",
        preDentist: "Dr Jackson",
        allergies: "Peanuts",
        curMed: "Ibuprofen",
        medCond: "None",
        additionalInfo: "Regular checkup"
    },
    {
        firstName: "Bob", 
        lastName: "Jones",
        phoneNum: "+1 123-456-7891",
        address: "9876 Pine Road",
        zipCode: "C2D 6E7",
        insuranceName: "HealthyLife",
        billing: "2468 Elm St",
        payMethod: "PayPal",
        cardNum: "3456-7890-1234-5678",
        creditCardHolder: "Mr Bob Jones",
        cvv: "435",
        dateTime: "2025/03/15, 10:00 am",
        appointmentType: "Emergency",
        preDentist: "Dr Williams",
        allergies: "None",
        curMed: "None",
        medCond: "Diabetes",
        additionalInfo: "Urgent care needed"
    },
    {
        firstName: "Carla", 
        lastName: "Green",
        phoneNum: "+1 123-456-7892",
        address: "1234 Birch Blvd",
        zipCode: "D3E 7F9",
        insuranceName: "Medicare",
        billing: "9087 Cedar Ln",
        payMethod: "Visa",
        cardNum: "4567-8901-2345-6789",
        creditCardHolder: "Ms Carla Green",
        cvv: "512",
        dateTime: "2025/03/16, 12:15 pm",
        appointmentType: "Cleaning",
        preDentist: "Dr Blake",
        allergies: "None",
        curMed: "Vitamin C",
        medCond: "None",
        additionalInfo: "Regular cleaning"
    },
    {
        firstName: "David", 
        lastName: "Taylor",
        phoneNum: "+1 123-456-7893",
        address: "6543 Willow Ave",
        zipCode: "E4F 8G2",
        insuranceName: "PrimeHealth",
        billing: "1122 Maple St",
        payMethod: "Stripe",
        cardNum: "5678-9012-3456-7890",
        creditCardHolder: "Mr David Taylor",
        cvv: "639",
        dateTime: "2025/03/17, 1:45 pm",
        appointmentType: "Filling",
        preDentist: "Dr Monroe",
        allergies: "Shellfish",
        curMed: "Antihistamines",
        medCond: "Asthma",
        additionalInfo: "Scheduled follow-up"
    },
    {
        firstName: "Eve", 
        lastName: "White",
        phoneNum: "+1 123-456-7894",
        address: "3210 Cedar Rd",
        zipCode: "F5G 9H3",
        insuranceName: "WellCare",
        billing: "1024 Birch Ln",
        payMethod: "Mastercard",
        cardNum: "6789-0123-4567-8901",
        creditCardHolder: "Ms Eve White",
        cvv: "781",
        dateTime: "2025/03/18, 3:00 pm",
        appointmentType: "Emergency",
        preDentist: "Dr Sanders",
        allergies: "Dust",
        curMed: "None",
        medCond: "None",
        additionalInfo: "Emergency consultation"
    },
    {
        firstName: "Frank", 
        lastName: "Black",
        phoneNum: "+1 123-456-7895",
        address: "7654 Oak St",
        zipCode: "G6H 0J4",
        insuranceName: "Aetna",
        billing: "3210 Oak Dr",
        payMethod: "PayPal",
        cardNum: "7890-1234-5678-9012",
        creditCardHolder: "Mr Frank Black",
        cvv: "842",
        dateTime: "2025/03/19, 4:30 pm",
        appointmentType: "Cleaning",
        preDentist: "Dr Clark",
        allergies: "None",
        curMed: "None",
        medCond: "None",
        additionalInfo: "No special notes"
    },
    {
        firstName: "Grace", 
        lastName: "Blue",
        phoneNum: "+1 123-456-7896",
        address: "8765 Pine Blvd",
        zipCode: "H7I 2K5",
        insuranceName: "Cigna",
        billing: "4432 Pine St",
        payMethod: "Visa",
        cardNum: "8901-2345-6789-0123",
        creditCardHolder: "Ms Grace Blue",
        cvv: "293",
        dateTime: "2025/03/20, 5:00 pm",
        appointmentType: "Filling",
        preDentist: "Dr Patel",
        allergies: "Penicillin",
        curMed: "None",
        medCond: "Hypertension",
        additionalInfo: "Follow-up appointment"
    },
    {
        firstName: "Helen", 
        lastName: "Red",
        phoneNum: "+1 123-456-7897",
        address: "2345 Birch Ln",
        zipCode: "I8J 3L6",
        insuranceName: "UnitedHealth",
        billing: "5678 Elm Ave",
        payMethod: "Stripe",
        cardNum: "9012-3456-7890-1234",
        creditCardHolder: "Ms Helen Red",
        cvv: "716",
        dateTime: "2025/03/21, 9:15 am",
        appointmentType: "Emergency",
        preDentist: "Dr Martinez",
        allergies: "None",
        curMed: "None",
        medCond: "None",
        additionalInfo: "Urgent care needed"
    },
];
