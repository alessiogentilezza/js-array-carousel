// for (let i = 1; i <= 1000; i++) {
//     if (i === 1000) {
//         console.log(i);
//     } else {
//         console.log(i + ", ");
//     }
// }

// for (let i = 1; i <=10; i++) {
//     console.log(i);
// }


// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//       console.log('Buzz');
//     } else if (i % 5 === 0) {
//       console.log('Fizz');
//     } else {
//       console.log(i);
//     }
//   }


// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else {
//     console.log(i);
//   }
// }

// function capitalizeInitials(str) {
//   // Dividiamo la stringa in un array di parole
//   const words = str.split(" ");

//   // Iteriamo su ogni parola dell'array
//   const capitalizedWords = words.map((word) => {
//     // Se la parola ha una lunghezza minore o uguale a 1, la restituiamo senza modifiche
//     if (word.length <= 1) {
//       return word;
//     }

//     // Altrimenti, restituiamo la parola con la prima lettera in maiuscolo e le altre in minuscolo
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   });

//   // Uniamo le parole con uno spazio e restituiamo il risultato
//   return capitalizedWords.join(" ");
// }

// const str = "questa è una stringa di esempio";
// const result = capitalizeInitials(str);
// console.log(result); // "Questa È Una Stringa Di Esempio"


// let ciao = [1, 2, 3];
// console.log(ciao);

/* var x = 0;
while (true) {
    console.log(x);
    // condizione di uscita
    if (x > 100) break;
    x++;
} */

// document.getElementById("prova").innerHTML = x;



// var x = 0;
// while (x < 10) {
//     x++;
//     if (x > 3) continue;
//     // se x è maggiore di 3, questa istruzione non viene più eseguita
//     console.log(x);
// }

