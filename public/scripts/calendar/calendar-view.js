/**
 * calendar-view is a function to display month and week calendar table
 * when the user select the select it from the month-week-selector
 */
import { today } from "./date.js";
import { initMonthCalendar } from "./month-calendar.js";
import { initWeekCalendar } from "./week-calendar.js";



export function initCalendar(){
    const calendarElement=document.querySelector("[data-calendar]");
    let selectedView="month-selector";
    let selectedDate=today();
    function refreshCalendar(){
        calendarElement.replaceChildren();
        if(selectedView==="month-selector"){
            initMonthCalendar(calendarElement,selectedDate);
        }else if(selectedView==="week-selector"){
            initWeekCalendar(calendarElement,selectedDate);
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