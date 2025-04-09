# EECS 1012 | Dental application
This project is made for a receptionist that is able to add, delete and, modify patients. The changes are then able to be reflected via the Calendar.

## Main Features:
- **Display Schedule**
  - Ability to toggle between week & day view
  - Populates the calendar with patients located in the server
  - Reflects modified patient data in the calendar when data is updated
- **Register Patient**
  - Registers a new patient via a form with Regex pattern checking
- **Modify Patient Data**
  - Updates the information related to the patient via clicking the table and saving the data
- **Delete Patient**
  - Deletes the patient from the table by index location
- **Node JS server**
  - Responsible for running the application. It uses GET & POST requests to modify patient information

## Side Features:
- **Dark Mode**
  - Changes the page from light to dark from a toggle button
- **Navbar**
  - Slight animation for the navbar
  - Able to toggle for visible and hidden view
- **List of Services**
  - Displays additional infromation to the receptionist if the patient needs more information
 
## Technologies Used:
- **HTML, CSS, JS:** Responsible for Frontend and Backend logic 
- **Node JS:** JavaScript runtime environment that allows for server-side scripting
- **Jest Testing:** Node.js unit testing that allows for streamlined testing

## Getting Started:
### Running Server.js:
1. Clone the repository: <br>
`git clone [https://github.com/davecao2k5/LE-EECS1012-FINAL-PROJECT]`
3. Install npm: <br>
`npm install`
4. Install express: <br>
`npm install express`
5. Run the server: <br>
`node server.js`

### Running Jest tests:
6. Install Jest: <br>
`npm install jest`

7. Modify Package.json: <br>
- Replace test value with "jest" <br>
`"scripts": { 
    "test": "jest"
  }`
8. Install Jest Supertest: <br>
- Used to test HTTP assertions <br>
`npm install supertest --save-dev`

9. Run Jest testing: <br> 
`npm test server.test.js`

## Contributors:
1. **[David](https://github.com/davecao2k5) |**  First year student
2. **[GG](https://github.com/gurkarangill07) |**  First year student
3. **[Sebastian](https://github.com/SebastianMuzalewski)** | First year student
