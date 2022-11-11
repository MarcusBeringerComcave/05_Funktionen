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

/***** Funktionen 03a *****/
// 03a. Vorbereitung
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNamenParams2("Michael","Müller"); // Argumente


function ausgabeNamenParams2(firstName,familyName) // Parameter 
{
    // 1. Funktionalität: string composing
    const gap = " ";
    const outputStr = "Hallo " + firstName + gap + familyName + "!";

    // 2. Funktionalität: string output
    console.log(outputStr);
}

/***** Funktionen 03b *****/
// Trennen der Funktionalitäten | return

 // 1. Funktionalität: string composing
 output(getString("Maxine","Mütze"));
 output("Hallo Maxine Mütze!");
 function getString(firstName,familyName) {
    const gap = " ";
    const outputStr = "Hallo " + firstName + gap + familyName + "!";
    return outputStr;
    console.log("Funktion beendet");
 }

 // 2. Funktionalität: string output
// output("hi"); // Call
 function output(outputData) { //Wrapper
    console.log(outputData);
 }

