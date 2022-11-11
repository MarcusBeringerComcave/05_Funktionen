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


// // console.log(firstName); // Fehler: Scope!
// ausgabeNamen();
// function ausgabeNamen() {
//     let firstName = "Sabine";  // what happens in Vegas, ...
//     console.log("Hallo " + firstName + "!");   
// }

/*****Funktionen 02b******/

//2b Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNamenParam();

function ausgabeNameParam(firstName) // Parameter
{
console.log("Hallo " + firstName + "!");
}
ausgabeNameParam("Sabine");// Argument sind Daten für Parameter

