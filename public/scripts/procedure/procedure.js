function showcleaningDetails(){
    var title = document.getElementById("detail-about-service-name");
    var dentists = document.getElementById("details-dentists-available");
    var fees = document.getElementById("details-average-fee");
    var insurance_coverage = document.getElementById("detail-insurance-covereage");
    var estimated_time = document.getElementById("detail-estimated-time");
    var additonal_info = document.getElementById("additonal-info");
    
    title.innerHTML = "Details about Cleaning";
    dentists.innerHTML = "Dr. Shawn <br> Dr. Edward";
    fees.innerHTML = "$250 flat fee, Tax not included;";
    insurance_coverage.innerHTML = "80 percent Coverage for most insurance <br>50 percent Coverage for seniors";
    estimated_time.innerHTML = "1-2 hour completion time";
    additonal_info.innerHTML = "Avoid eating for 30 minutes after cleaning to allow your teeth to remineralize. Mild sensitivity is normal."
    

}

function showfillingDetails(){
    var title = document.getElementById("detail-about-service-name");
    var dentists = document.getElementById("details-dentists-available");
    var fees = document.getElementById("details-average-fee");
    var insurance_coverage = document.getElementById("detail-insurance-covereage");
    var estimated_time = document.getElementById("detail-estimated-time");
    var additonal_info = document.getElementById("additonal-info");
    
    title.innerHTML = "Details about Filling";
    dentists.innerHTML = "Dr. Sarah <br> Dr. John";
    fees.innerHTML = "$350 flat fee, Tax not included;";
    insurance_coverage.innerHTML = "85 percent Coverage for most insurance <br> 60 percent Coverage for seniors";
    estimated_time.innerHTML = "45-60 minutes completion time";
    additonal_info.innerHTML = "Please avoid eating immediately after the procedure to allow the filling to set properly.";
    
}

function showemergencyDetails(){
    var title = document.getElementById("detail-about-service-name");
    var dentists = document.getElementById("details-dentists-available");
    var fees = document.getElementById("details-average-fee");
    var insurance_coverage = document.getElementById("detail-insurance-covereage");
    var estimated_time = document.getElementById("detail-estimated-time");
    var additonal_info = document.getElementById("additonal-info");
    
    title.innerHTML = "Details about Emergency";
    dentists.innerHTML = "Dr. Alice <br> Dr. Michael";
    fees.innerHTML = "$500 flat fee, Tax not included;";
    insurance_coverage.innerHTML = "90 percent Coverage for most insurance <br> 70 percent Coverage for seniors";
    estimated_time.innerHTML = "Immediate care, estimated 30 minutes";
    additonal_info.innerHTML = "Emergency procedures may require follow-up appointments, depending on the severity of the situation."
    
}