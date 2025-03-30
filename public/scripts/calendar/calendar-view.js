/**
Watches for "view-change" and "date-change" events.

Loads either the month or week calendar accordingly.

Uses initMonthCalendar() and initWeekCalendar() to render.
 */
import { today } from "./date.js";
import { initMonthCalendar } from "./month-calendar.js";
import { initWeekCalendar } from "./week-calendar.js";



let patientData=[];
fetch("/api/patientData")
.then(res=>res.json())
.then(data=>{
    patientData=data;
    initCalendar(patientData);
})
.catch(err=>console.error("Error fetching patient data",err));


export function initCalendar(patientData){                                                 
    const calendarElement=document.querySelector("[data-calendar]");
    let selectedView="month-selector";
    let selectedDate=today();
    function refreshCalendar(){
        calendarElement.replaceChildren();
        if(selectedView==="month-selector"){
            initMonthCalendar(calendarElement,selectedDate, patientData);    //display calendar month when it gotta selected
        }else if(selectedView==="week-selector"){
            initWeekCalendar(calendarElement,selectedDate, patientData);
        }else{

        }
    }
    document.addEventListener("view-change",
        (event)=>{
            selectedView=event.detail.view;
            refreshCalendar()
            
        }
    );
    document.addEventListener("date-change", (event)=>{
        selectedDate=event.detail.date;
        refreshCalendar();
    })
    refreshCalendar();
}