// L'utente inserisce un numero nel prompt.
// Se è pari stampa il numero.
// Se è dispari stampa il numero successivo

// Chiedo il numero all'utente
const userNumber = parseInt(prompt('Ciao! Dimmi un numero'));
// console.log(userNumber);

// Controllo se il numero è pari
if (userNumber % 2 === 0) {
    // Lo stampo così com'è
    console.log(userNumber);
} else { // Se invece è dispari
    // Stampo il successivo
    console.log(userNumber + 1);
}