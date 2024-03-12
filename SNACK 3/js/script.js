// Crea due tag div con due id diversi:
// Un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// Mi creo un array di numeri
 const numbersArray = [2, 5, 56, 23, 9, 22, 71, 65, 13, 1, 90];
//  console.log(numbersArray);

 // Scorro tutti gli elementi dell'array
 for (let i = 0; i < numbersArray.length; i++) {
    let eachNumber = numbersArray[i];
    console.log(eachNumber);
 }
 // Li divido dentro i due div in base a se sono dispari o pari
 // Dare il colore rosso al div con i numeri dispari
 // Dare il colore verde al div con i numeri pari
