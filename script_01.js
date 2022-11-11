"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
// Funktionsdeklaration
function test()
{
    console.log("Hallo Sabine!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();
// console.log(firstName); // Fehler: Scope!

function ausgabeNamen() {
    let firstName = "Michael"; // what happens in Vegas, ...
    console.log("Hallo " + firstName + "!");
}

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNamenParam("Michael"); // Argument
// Argumente sind Daten für Parameter

function ausgabeNamenParam(firstName) // Parameter 
{
    console.log("Hallo " + firstName + "!");
}

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

// ausgabeNamenParams("Michael","Müller"); // Argumente
// ausgabeNamenParams(prompt("Vorname?"),prompt("Nachname")); // Argumente

function ausgabeNamenParams(firstName,familyName) // Parameter 
{
    console.log("Hallo " + firstName + " " + familyName + "!");
}
