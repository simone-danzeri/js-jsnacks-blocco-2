// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// Chiedo all'utente due parole
let userWord1 = prompt('Ciao! Scrivi una parola');
// console.log(userWord1);
let userWord2 = prompt("Ora scrivine un'altra");
// console.log(userWord2);

// Devo controllare la lunghezza di ciascuna parola
let userWord1Length = userWord1.length;
// console.log(userWord1Length);
let userWord2Length = userWord2.length;
// console.log(userWord2Length);

// Stampo le due parole in ordine crescente di lunghezza
// Devo confrontare le due parole
if (userWord1Length > userWord2Length) {
    // Se la parola numero 1 è più lunga --> Stampo per prima la parola numero 2 e poi la parola numero 1
    console.log(userWord2);
    console.log(userWord1);
} else if (userWord1Length < userWord2Length) {
    // Se la parola numero 2 è più lunga --> Stampo per prima la parola numero 1 e poi la parola numero 2
    console.log(userWord1);
    console.log(userWord2);
} else {
    console.log("Le due parole hanno lunghezza uguale quindi beccatele nell'ordine in cui le hai scritte: " + userWord1 + ' ' + userWord2);
}