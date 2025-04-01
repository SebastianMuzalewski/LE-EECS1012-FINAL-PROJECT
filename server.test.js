// Required for HTML 
const request = require('supertest');
// Using server Endpoint API
const app = require('./server');

describe('Patient API Tests', () => {

// Checks if the patient array loads properly
// Why is this meaningful? Patients array is always changing so checking if it
// loads is always important
it('Should recieve all the patients from the array', () => {
    return request(app)
    .get('/api/patientData')
    .then(response => {
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);
    });
});

// Checks if the homepage is calendar.html
// Why is this meaningful? Without access to the homepage the application won't
// run correctly
it('The homepage should be calendar.html', (done) => {
    request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /html/)
        .end(done);
})

// David your stuff is here


});