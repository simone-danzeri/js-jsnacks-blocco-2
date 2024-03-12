// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// Chiedo all'utente due parole
let userWord1 = prompt('Ciao! Scrivi una parola');
console.log(userWord1);
let userWord2 = prompt("Ora scrivine un'altra");
console.log(userWord2);

// Devo controllare la lunghezza di ciascuna parola
let userWord1Length = userWord1.length;
console.log(userWord1Length);
let userWord2Length = userWord2.length;
console.log(userWord2Length);