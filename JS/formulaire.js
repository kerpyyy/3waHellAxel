'use strict';

// Variable

const jobs = document.querySelector('#jobs');


// Fonction choissisant a caché ou afficher le menu
function display(){
    let choose_job = document.querySelector('#choosejob');
    if(document.getElementById("themes").value=="jobs"){
      choose_job.classList.remove('hide');
      choose_job.classList.add('show');
    } else if(document.getElementById("themes").value=="information"){
        choose_job.classList.remove('show');
        choose_job.classList.add('hide');
    } else if(document.getElementById("themes").value=="project"){
        choose_job.classList.remove('show');
        choose_job.classList.add('hide');
    } else if(document.getElementById("themes").value=="choose"){
        choose_job.classList.remove('show');
        choose_job.classList.add('hide');
    }
}