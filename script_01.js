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

// function ausgabeNameParam(firstName) // Parameter
// {
// console.log("Hallo " + firstName + "!");
// }
// ausgabeNameParam("Sabine");// Argument sind Daten für Parameter

/*****Funktionen 02c********/
 // 2c. mehrere Parameter

// 
// ausgabeNamenParams(prompt("Vorname?"),prompt("Nachname")); // Argumente

// function ausgabeNamenParams2(firstName,familyName) // Parameter
// {
//     console.log("Hallo " + firstName + " " + familyName + "!");
// }

/****** Funktionen 03a *****/
//03a Vorbereitung
// Postulat: one function = one job (Uncle Bob)
// SRP single responsibility princible

// ausgabeNamenParams2("Michael","Müller"); // Argumente

// function ausgabeNamenParams2(firstName,familyName) // Parameter
// {
//     //1 . Funktionalität : string composing
//     const gab = " ";
//     console.outputStr = "Hallo " + firstName + gab + familyName + "!";
    
//     // 2. Funktionalität : data output

// //     console.log(outputStr);
// // }
// function ausgabeNamenParams2(firstName,familyName)

// //****Funktionen 03b****/
// // Trennen der Funktionalitäten | return

// // 1. Funtionalität : string composing

output(getString("Maxine","Mütze"));
function getString(firstName,familyName){
    const gab = " ";
    const outputStr = "Hallo " + firstName +gab + familyName + "!";
    return outputStr;
}

// 2. Funktionalität : string output
output("Nice to meet you"); // call
function output(outputData) {  // Wrapper
    console.log(outputData);
}

