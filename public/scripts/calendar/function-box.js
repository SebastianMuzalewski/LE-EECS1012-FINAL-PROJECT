import{today, addDays, addMonths, subtractDays, subtractMonth} from "./date.js";
const dateFormatter= new Intl.DateTimeFormat("en-US",{
    month:"long",
    year:"numeric"
});
export function initFuncButton(){
    const todayButtonElements = document.querySelectorAll("[data-nav-today-button]");
    const previousButtonElement=document.querySelector("[data-nav-previous-button]");
    const nextButtonElement=document.querySelector("[data-nav-next-button]");
    const dateElement=document.querySelector("[data-nav-date]");
    let selectedView="month-selector";
    let selectedDate=today();
    for (const todayButton of todayButtonElements) {
        todayButton.addEventListener("click", () => {
            todayButton.dispatchEvent(new CustomEvent("date-change", {
                detail: {
                    date: today()
                },
                bubbles: true
            }));
        });
    }
    previousButtonElement.addEventListener("click",()=>
        {previousButtonElement.dispatchEvent(new CustomEvent("date-change",{
         detail:{
             date: getPreviousDate(selectedView,selectedDate)
         }, bubbles:true
        }))} );
        
    nextButtonElement.addEventListener("click",()=>
        {nextButtonElement.dispatchEvent(new CustomEvent("date-change",{
            detail:{
                date: getNextDate(selectedView,selectedDate)
             }, bubbles:true
            }))} );    
    
    document.addEventListener("view-change",(event)=>
    {selectedView=event.detail.view;
    });

    document.addEventListener("date-change",(event)=>{
        selectedDate=event.detail.date;
        refreshDateElement(dateElement, selectedDate)
    });

    refreshDateElement(dateElement, selectedDate);
}
function refreshDateElement(dateElement, selectedDate){
    dateElement.textContent=dateFormatter.format(selectedDate);
}

function getPreviousDate(selectedView,selectedDate){
    if(selectedView==="week-selector"){
        return subtractDays(selectedDate, 7);
    }
    return subtractMonth(selectedDate,1);
}
function getNextDate(selectedView,selectedDate){
    if(selectedView==="week-selector"){
        return addDays(selectedDate, 7);
    }
    return addMonths(selectedDate,1);
}