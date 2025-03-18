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