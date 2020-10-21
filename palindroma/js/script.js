/*
Palindroma: scrivere una funzione per valutare se una parola è palindroma oppure no
(una parola è palindroma se la posso leggere nello stesso modo dall'inizio alla fine e viceversa,
ad esempio "anna" è palindroma, "andrea" no)*/


//chiedo all'utente una parola

var parola_utente = prompt('inserisci una parola');

//verifico se è stata inserita una parola o un numero
if (!isNaN(parola_utente)) {
   alert('devi inseire solo parole');
}


// verifico se la parola dell utente è palindroma o no usando la funzione apposita

if (isPalindroma(parola_utente)) {
    document.getElementById('password').innerHTML = 'la parola è palindroma'
} else {
    document.getElementById('password').innerHTML = 'la parola non è palindroma'
}

// creo una funzione per verificare se la parola è palindroma usando split, per prendere ogni carattenre
// e cosi facendo ogni parola viene inserita come elemento di un array, poi uso la funzione reverse per leggerlo al contrario e
// con join riconverto l'elemento dell'array in una stringa

function isPalindroma(str) {
    return str === str.split('').reverse().join('');
}