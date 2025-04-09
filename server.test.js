// Required for HTML 
const request = require('supertest');
// Using server Endpoint API
const app = require('./server');

// Grouping test cases
describe('Patient API Tests', () => {

// First test case: Checks if the patient array loads properly from the server
it('Should recieve all the patients from the array', () => {
    return request(app)
    .get('/api/patientData')
    .then(response => {
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);
    });
});

// Second test case: Confirms that the root url loads the homepage
it('The homepage should be calendar.html', (done) => {
    request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /html/)
        .end(done);
})


it('Should add a new patient and return 201',()=>{
    const newPatient={                  //create a test patient object
        firstName:"Dave",
        lastName:"King",
        dateTime:"2025-04-05T10:00",
        appointmentType:"Checkup",
        phoneNumber:"2345-6789-0123-4567"
    };
    return request(app)
        .post('/api/addPatient')            //send the the data to the server through this route
        .send(newPatient)
        .expect(201)                        //expect the 201 response this mean the server accepted the data and added it
        .then(response=>{
            expect(response.body).toBeDefined();
            expect(response.body.patient.firstName).toBe("Dave");                //to check the response includes the added patient
        })
})

});