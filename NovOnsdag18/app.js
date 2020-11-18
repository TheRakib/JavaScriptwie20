
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

    
    
    
    
    
  /*   
    
    //****Hur man lägger till funktion i ett objekt ? namn.key = function(){

   // }

 
var timeAnställda = { 
    name: "" , 
    timLön:0,  
    timme:0, 
    semesterErsättning:0, 
    räknaMånadsLön: function(){
          // ? this: what hack is this?  this: objektet
          // this refererar till objektet
          // this ska ha tillgång till objektens egenskaper eller properties 
          // fixa semesterErsättningen 
          
    var totalt= (this.timLön * this.timme) + this.semesterErsättning 
        console.log(totalt)  // error 
        console.log(" Hej " + this.name + ", Din månadsLön är " + totalt)

        //räkna semesterersättning 
        // semesterersättning + lön 
        return totalt;
  
    }
  }
 
  

  // sätta value i ett objekt  
  timeAnställda.name = "Kalle Anka"   // input fält 
  timeAnställda.timLön = 150
  timeAnställda.timme = 160
  
  timeAnställda.name // kalle anka

  timeAnställda.räknaMånadsLön()
  
  
  // objektNamn.funktionsNyckelNamnet()
  timeAnställda.räknaMånadsLön() */


  
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

// i===100 , i<100, password==="xyz"
//  if(villkor) {   koden kommer att köras om villkoret är sant      }
// else if(villkor && villkor2) { koden kommer att köras om villkoren är sant }

// else  {  koden körs om if eller else if är false   }



//klarna om användare har bra godkänd 
function köpProdukt() {
   
    // mer kod
    console.log("Användare kan köpa produkt")
}

function UC() {
    //check users payment histories

    return false;
}
function kreditKort() {

    //check users credit card

    return true;
}

var checkKreditVärdighet = UC();
var checkPayment = kreditKort();

var kreditGodkänd = checkKreditVärdighet;
var betalarDirekt= checkPayment ;

if(kreditGodkänd==true) {
    köpProdukt();
}

else if(betalarDirekt == true) {
    console.log("betalar direkt")
    köpProdukt();
}

else { console.log("kredit godkändes inte ") }



// Lista/Array , multidimentionella array/embedded array :: 
//var listaNamn = [ 2, 3, 4 , [20, 30] ]
//listaNamn[2]
//listaNamn[3][1]  //30
//listaNamn.push(data)

// Object i en array
//var listaNamn = [{key:"value", id:1}, {key:"value", id:2}]
 
   // objectnamn.key
   //listaNamn[0].id // 1



// Object , function i ett object   


// for loop , while loop
   
// alla loop har en startpunkt , måste ha en slutpunkt 
// loop körs mot något typ uttryck/villkor 
//skapar en loop som looper 0-9 

//bestämd 
   //for( var i= 0; i<10; i++ ) { console.log(i)}
     //loopa igenom lista 
 

    
    /* 
    var i= 0
    while( i<10) { 
        console.log("hello from while"); 
        i++
    }
    
    // dynamisk , obestämd
    var password = true
    while(password) {   
        
        //användare är inloggat för evigt 
       //password= false
    }  
    */
 

// Villkorande sats , if statement 

     
// var , if statement, datatypes, array, object, function , function return
// loop : for 

// rakib 
// \r \b  \n  : regex : regular expression


 //  var str = " hello  \n  new line ";



 // till browser /HTML 





// felsöka i js : console/inspect  
// föreläsning 1-5 från js grundläggande mappen

// function in i HTML , DOM , Globala objekt från browser

//document 
//document.querySelector() //välja element från document/html 
                         // tag, .classname, #idnamn

    //Vi har läst element från html filen
   var div =  document.querySelector("div") //hela element 

  var paragraf=  document.querySelector(".paragraf") 

  var span =   document.querySelector("#test")

  console.log(paragraf )
  console.log(span ) 
  // Vi kan läsa innehåll from element 
  console.log(div.innerText ) // textContent ,  innerHTMl
  // vi kan skriva innehåll in i element

  paragraf.innerText = " Nya data "

  console.log(paragraf.innerText )



  // Vi ska skapa element 

  
  


   // function och event 

   // click event -> function 

// Koppla event med function 

   //addEventListener("click", functionName )


   function testaClickEvent() { 

    var ul = document.createElement("ul")



  //console.log(ul) // returner element
  // lägger vi ul in i body element
  var body = document.querySelector("body")

  body.appendChild(ul)


  // lägg till <li> in i ul element 

  var li = document.createElement("li")

  li.innerText = "hello from click"
   
  var selectUL = document.querySelector("ul")
  selectUL.appendChild(li)


  //skapa Attribute/egenskaper i element
   selectUL.setAttribute("class", "ul-list")
       console.log("Hello , You have clicked the button")
   }


   var btn = document.querySelector("button")

   btn.addEventListener("click", testaClickEvent  )










  // vi kan rensa/uppdatera element innehåll

//window 





