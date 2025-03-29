const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

//Middleware to parse JSON requests
app.use(express.json());

// Static html files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'calendar.html'));
});

// Gets the patient data
app.get("/api/patientData", (req, res) => {
    res.json(patientData) // Sends the patient data
});

// When a new patient is added is pushses it to the bottom of the array
app.post("/api/addPatient", (req, res) => {
    console.log("Received a request to add a patient:", req.body); 
    const newPatient = req.body;
    patientData.push(newPatient);
    res.status(201).json({ message: "Patient has been added", patient: newPatient });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// patientData defined here for better global scope
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
        creditCardHolder: "MsAliceSmith",
        cvv: "783",
        dateTime: "2025-03-12T18:00",
        appointmentType: "Filling",
        preDentist: "Dr Jackson",
        allergies: "Peanuts",
        curMed: "Ibuprofen",
        medCond: "None",
        additionalInfo: "Regular checkup",
        endTime: null,
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
        creditCardHolder: "MrBobJones",
        cvv: "435",
        dateTime: "2025-03-15T10:00",
        appointmentType: "Emergency",
        preDentist: "Dr Williams",
        allergies: "None",
        curMed: "None",
        medCond: "Diabetes",
        additionalInfo: "Urgent care needed",
        endTime: null,
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
        creditCardHolder: "MsCarlaGreen",
        cvv: "512",
        dateTime: "2025-03-19T12:15",
        appointmentType: "Cleaning",
        preDentist: "Dr Blake",
        allergies: "None",
        curMed: "Vitamin C",
        medCond: "None",
        additionalInfo: "Regular cleaning",
        endTime: null,
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
        creditCardHolder: "MrDavidTaylor",
        cvv: "639",
        dateTime: "2025-03-17T13:45",
        appointmentType: "Filling",
        preDentist: "Dr Monroe",
        allergies: "Shellfish",
        curMed: "Antihistamines",
        medCond: "Asthma",
        additionalInfo: "Scheduled follow-up",
        endTime: null,
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
        creditCardHolder: "MsEveWhite",
        cvv: "781",
        dateTime: "2025-03-18T15:00",
        appointmentType: "Emergency",
        preDentist: "Dr Sanders",
        allergies: "Dust",
        curMed: "None",
        medCond: "None",
        additionalInfo: "Emergency consultation",
        endTime: null,
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
        creditCardHolder: "MrFrankBlack",
        cvv: "842",
        dateTime: "2025-03-19T16:30",
        appointmentType: "Cleaning",
        preDentist: "Dr Clark",
        allergies: "None",
        curMed: "None",
        medCond: "None",
        additionalInfo: "No special notes",
        endTime: null,
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
        creditCardHolder: "MsGraceBlue",
        cvv: "293",
        dateTime: "2025-03-20T17:00",
        appointmentType: "Filling",
        preDentist: "Dr Patel",
        allergies: "Penicillin",
        curMed: "None",
        medCond: "Hypertension",
        additionalInfo: "Follow-up appointment",
        endTime: null,
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
        creditCardHolder: "MsHelenRed",
        cvv: "716",
        dateTime: "2025-03-21T09:15",
        appointmentType: "Emergency",
        preDentist: "Dr Martinez",
        allergies: "None",
        curMed: "None",
        medCond: "None",
        additionalInfo: "Urgent care needed",
        endTime: null,
    },
];