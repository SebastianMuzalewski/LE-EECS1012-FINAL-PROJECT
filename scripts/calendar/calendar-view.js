/**
 * calendar-view is a function to display month and week calendar table
 * when the user select the select it from the month-week-selector
 */

export function initCalendar(){
    const monthCalendarElement= document.querySelector("[data-month-calendar]")
    const weekCalendarElement= document.querySelector("[data-week-calendar]")
    document.addEventListener("view-change",
        (event)=>{
            const selectedView=event.detail.view;
            if(selectedView==="month-selector"){
                monthCalendarElement.style.display="flex";
                weekCalendarElement.style.display="none";
            }else if(selectedView=="week-selector"){
                weekCalendarElement.style.display="flex";
                monthCalendarElement.style.display="none";
            }else{
                weekCalendarElement.style.display="none";
                monthCalendarElement.style.display="none";
            }
        }
    );
}