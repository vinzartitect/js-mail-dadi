// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let bottone = document.getElementById(`btn_start`);
let risultato = document.getElementById(`result`);

bottone.addEventListener(`click`,

   function(){
      
      let dadoPlayer = Math.floor( (Math.random()  * 6) + 1);
      let dadoPc = Math.floor( (Math.random() * 6) + 1);
 
      document.getElementById(`player`).innerHTML = dadoPlayer;
      document.getElementById(`pc`).innerHTML = dadoPc;

      if ( dadoPlayer > dadoPc ) {

          risultato.innerHTML = `Bravo mi hai battuto!`;

      } else if ( dadoPlayer < dadoPc ) {

          risultato.innerHTML = `Mi dispiace, hai perso!`;

      } else {

          risultato.innerHTML = `Pareggio!`;

      }

   }

)