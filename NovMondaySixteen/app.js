
// lära oss objekt 
// hur vi kan använda funktion i objektet
// this keyword koncept 

// 10.30


// Vi skapade ett objekt
//  egenskaper : name, timLön, timme, semesterErsättning 

 // Vi har lagt en funktion i objektet
    // funktionen räknar ut totaltMånadsLön utifrån timLön,timme,  
    // semesterErsättnings values
 

    // Hur skapar man ett object? var namn = { key:value, }
    // Hur man lägger till data in i objektet ? namn.key = "value"
    
   // Hur man lägger till/skriver funktion i ett objekt ?
    // var timeAnställda = { keyname: function() { }}
   
    // Vad är this i objekt ? 
      // this refererar till objektet

      //varför använder vi this? 
      // för att kunna använda objektegenskapernas value in i funktionen

    
    
    
    
    
    
    
    //****Hur man lägger till funktion i ett objekt ? namn.key = function(){

   // }

 
/* var timeAnställda = { 
    name: "" , 
    timLön:0,  
    timme:0, 
    semesterErsättning:0, 
    räknaMånadsLön: function(){
          // ? this: what hack is this?  this: objektet
          // this refererar till objektet
          // this ska ha tillgång till objektens egenskaper eller properties 
          // fixa semesterErsättningen 
        var totalt= (this.timLön * this.timme) +this.semesterErsättning 
        console.log(totalt)  // error 
        return totalt;
  
    }
  }
  
  // sätta value i ett objekt  
  timeAnställda.name = "Kalle Anka"   // input fält 
  timeAnställda.timLön = 150
  timeAnställda.timme = 160
  timeAnställda.semesterErsättning = .12  //räkna semesterErsättning
  
  
  // objektNamn.funktionsNyckelNamnet()
  timeAnställda.räknaMånadsLön()
   */
  // object: har egenskaper , funktion


  // ****    var defination ****//
  //hur definerar man en var??
  
 /*     //initializing 
  var namn = "namnet "
  
  // lägga till values 
  namn += " new values ";

console.log(namn) */

// Hur ska vi felsöka ??  inspecterar vi i browser ->  console 


// for (var i=0; i<10; i++) { //koden kommer att köras så länge uttrycket är sant   }

// for, for each, map 




//klarna om användare har bra godkänd 

var kreditGodkänd = false;
var betalarDirekt= true;

if(kreditGodkänd==true) {console.log("Man kan köpa produkt") }

else if(betalarDirekt == true) {console.log("man kan köpa produkt oxå")}

else { console.log("kredit godkändes inte ") }



// Lista/Array , multidimentionella array/embedded array
// Object i en array
// Object , function i ett object 
// for loop , while loop
// Villkorande sats 
// felsöka i js : console/inspect  
// föreläsning 1-5 från js grundläggande mappen
