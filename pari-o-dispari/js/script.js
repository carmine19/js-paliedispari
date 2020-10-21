/*
Pari o dispari: scrivere una (o più di una) funzione per simulare il gioco di pari
e dispari tra l'utente e il computer. L'utente sceglie un numero tra 1 e 5 e sceglie
"pari" o "dispari". Il computer genera un secondo numero casuale tra 1 e 5.
Per vedere chi dei due vince, si deve fare la somma dei numeri dell'utente e del computer
e stabilire se il risultato è pari o dispari. Ad esempio, l'utente inserisce il numero 1 e indica
come scelta "pari";
il computer genera casualmente il numero 3. In questo caso ha vinto l'utente (perché 1+3 = 4, che è pari)*/

/***** CORE ******/
// L utente sceglie un numero da 1 a 5
var numero_utente = 1;
if(!isNaN(numero_utente) && numero_utente >= 1 && numero_utente <= 5) {
    console.log(numero_utente);
}else {
    console.log('devi inserire un numero')
}

// L utente sceglie se pari o dispari
var scelta_utente = true;
/*if (!isNaN(scelta_utente)) {
    alert('devi inseire solo parole');
}*/
console.log(scelta_utente);

// qui determino il numero utente finale
var numero_utente_finale = numero_utente + isRandomNumberPc(1,5);
console.log(numero_utente_finale);

// qui determino il numero finale del pc
var numero_finale_pc = isRandomNumberPc(1,5);
console.log(numero_finale_pc)

// creo la condizionale per determinare i vincitori
if ((numero_utente_finale > numero_finale_pc) && scelta_utente === isEven(scelta_utente) ) {
    console.log('vince l\'utente con numero pari ' + numero_utente_finale);
}else if ((numero_utente_finale > numero_finale_pc) && scelta_utente !== isEven(scelta_utente) ) {
    console.log('vince l\'utente con numero dispari ' + numero_utente_finale);
}else if ((numero_utente_finale < numero_finale_pc) && scelta_utente === isEven(scelta_utente) ) {
    console.log('vince il pc con numero pari ' + numero_finale_pc);
}else if ((numero_utente_finale < numero_finale_pc) && scelta_utente !== isEven(scelta_utente) ) {
    console.log('vince il pc con numero dispari ' + numero_finale_pc);
} else {
    console.log('i numeri sono uguali, il gioco ricomincia')
}


/******* BLOCCO FUNZIONI *********/
// creo la funzione per generare il numero random del computer
function isRandomNumberPc (min, max) {
    return Math.floor(Math.random() * (max - min));
}

// creo una funzione per deterinare se un numero è pari
function isEven(num) {
    return numero_utente_finale % 2 === 0;
}
console.log(isEven())