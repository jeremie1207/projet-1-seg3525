'use strict';


// variables

const form = document.getElementById('forms');
const white_teeth = document.getElementById('white_teeth');
const e_teeth = document.getElementById('e_teeth');
const i_teeth = document.getElementById('i_teeth');
const canal = document.getElementById('canal');
const error_checkbox = document.getElementById('error_checkbox');





form.addEventListener('submit', (e)=>{

  

    if(white_teeth.checked == false && e_teeth.checked == false  && i_teeth.checked == false && canal.checked == false){
        error_checkbox.innerHTML = "veillez selectionner un service";
        
    }

    else {
        form.setAttribute("action", "confrimation.html");
    }

  
    
});

