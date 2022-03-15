// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// (non usare INCLUDES)

let iscritti = [ 
    `pippobaudo@gmail.com`, 
    `pippofranco@libero.it`, 
    `pippoinzaghi@hotmail.it`, 
    `pippopotamo@gmail.com`,
    `pippotassio@hotmail.it`,
    `pippolonio@libero.it`,
    `pippotenza@gmail.com`,
];

let dammiMail = prompt("inserisci la tua mail");
console.log("la mail inserita è " + dammiMail);

let mailTrovata = false;

for ( let i=0; i < iscritti.length; i++ ) {

    if ( dammiMail == iscritti[i] ) {
        mailTrovata = true;
    }

}

if ( mailTrovata == true ) {
    console.log("risulti gia registrato!");
    document.getElementById("risposta_out").innerHTML = `risulti gia registrato!`;
} else {
    console.log("che aspetti! corri a registrarti!");
    document.getElementById("risposta_out").innerHTML = `che aspetti! corri a registrarti!`;
}