

var lista=  [ 1,40,[20,30] ]
         
console.log(lista[0])  //1
console.log(lista[1]) //40
//embedded array: 
console.log(lista[2]) // [20, 30]
console.log(lista[2].length) // length 
console.log(lista[2][0]) // 20
console.log(lista[2][1]) // 30

//list.push("din data")
lista.push(1000)  // [ 1,40,[20,30],1000 ]
         
console.log("new data added " , lista)



//key:value
//var object= { name: "lasse", arbetsPlats:"Medieinstitutet"}
  // object.name  //object.keyname
//lista av personer 
  //person ska vara ett objekt 
       
  // { key:value , key1:value }

  var Noreen = { id:4, name:"Noreen" , followers:1000  }
  
  //lista av object 
var personList = [ 
{ id:1,  name:"Lasse", followers:1000 } , 
{ id:2 , name:"Alex", followers:1000 } 
]
personList.push({ id:3 , name:"Rakib" , followers:1000  } )
personList.push(Noreen)
console.log("new added object "  , personList)

// console.log("new added object " + personList)
// coersion /tvångkonvertering ??:  10 + "10" = "1010"

//objectName.key
//Läsa data från en lista/array av objekten 
personList[0].name  // Lasse


console.log( personList[0] )
console.log("name " , personList[0].name) //Lasse

console.log( personList[1] )
console.log("name 2 " , personList[1].name) // Alex





function countExperience(a){
  console.log("data från funktionen " , a)
  console.log("data från funktionen " , a)


  var output = a //
  // return
  // return ??

  //output
   return output

}

  function sparande(inkomst , utgifter) {
        
    //sparande  = inkomst - utgifter ?? 
    var sparande = inkomst - utgifter

    return sparande

  }

  var jan = sparande(40000 , 25000)   //jan : 15000
  var feb = sparande(35000, 15000) //feb : 20000
  var mars = sparande(45000, 25000) //mars : 20000

console.log(" totalt sparande i kvartal " , (jan + feb + mars))

// årssparande :  12 månaders kvar/return från 
    //funktionen som räknar ut kvar/restende 


   //ska ha bra domain/branch kunskap
   // ska kunna programming syntax, concept m.m 
     //computational thinking , write code 




var personal1 = countExperience(1)  //1

console.log("returned value from function " , personal1)

var personal2 = countExperience(3)  //3
console.log("returned value from function ", personal2)












//---------------
// skapa ett objekt 
// objektet ska handla om en timanställda 


//lista av object som innehåller funktion 
var personList = [ { key:"value1", name:"Lasse", 
 countEX1: function(){
  
     //kolla datetime
     // räkna ut hur länge lasse har jobbat om han började 2011 på medieinstitutet
    console.log("räknat erfarenhet ", 9)

}} , {key:"value2" , name:"alex", countEX2: function(){console.log( "har erfarenhet ", 3)}   }]

personList[0].name

console.log( personList[0] )
console.log(personList[0].name)

console.log( personList[1] )
console.log(personList[1].name)

console.log(personList[0].countEX1()) //funktionen 

console.log(personList[1].countEX2()) //funktionen 



//**   split funktion         **/

var newsData= "Något news data";

//konvertera en list 
console.log(newsData.split("")) // [N, å, g, o, ...... ]

console.log(newsData.split(" ")) //["Något", "news", "data"]

//11.30