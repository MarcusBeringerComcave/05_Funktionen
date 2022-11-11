"use strict";

/***** Funktionen 01 *****/


// console.log("Hallo Marcus!");


// 1. Kabselung von Codeblöcken //



// // Funktionsaufruf (call) //
// test();

// // Funktionsrumpf (body) | callee  Funktionsdeklaration//

// function test()
// {
//     console.log("Hallo Marcus !");

// }

// Funktionen 02a //

// 2a Parametrisierung + Datenübergabe von INNEN //

ausgabeNamen();

function ausgabeNamen() {
    let firstName = "Sabine";  // what happens in Vegas, ...
    console.log("Hallo " + firstName + "!");   
}

console.log(firstName); // Fehler: Scope!


