/* * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * *
 * * YOUR CODE GOES HERE ! * *
 * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * */
$(document).ready(

    $('#play').click( function () {
        compteur = 1500;
        commencerCompteur();
    }),

    $('#pause').click(function() {
        clearInterval(interval);

    }),
    
    $('#stop').click( function () {
        var input = $("#task").val();
        $('.list-group').prepend('<li class="list-group-item"><s>' + input + '</s></li>')
        stop();
    })
);


// COMPTEUR
 var compteur = 1500;
 var interval;

 function commencerCompteur() {
     interval = setInterval(enleverSec, 1000);
 }

  


function enleverSec() {
    var minute = 0;
    var seconde = 0;
    compteur -= 1;
    minute = Math.floor(compteur/60);
    seconde = Math.ceil(compteur-(minute*60));
    var x = document.getElementById('timer');
    x.innerHTML = minute + ":" + seconde;
   console.log(minute);
    console.log(seconde);
   // console.log(compteur);
    if (compteur == 0) {
        clearInterval(interval);
  //      console.log(compteur);
    }
}

function stop() {
    clearInterval(interval);
    compteur = 300;
    commencerCompteur();
}

// FIN COMPTEUR



