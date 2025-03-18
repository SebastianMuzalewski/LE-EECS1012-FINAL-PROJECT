function subClick(){
    
    document.getElementById('alertMsg').style.display = 'block';

    document.getElementById('btnClose').onclick = function() {
        document.getElementById('alertMsg').style.display='none';
    };

    document.getElementById('cornerClose').onclick = function() {
        document.getElementById('alertMsg').style.display='none';
    };
    
}