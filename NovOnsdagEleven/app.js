

var lista=  [ 1,40,[20,30] ]
         
console.log(lista[0]) //1
console.log(lista[1]) //40
console.log(lista[2]) // [20, 30]
console.log(lista[2].length) // length 
console.log(lista[2][0]     ) // 20
console.log(lista[2][1]     ) // 30



//key:value
//var object= { name: "lasse", arbetsPlats:"Medieinstitutet"}
  // object.name  //object.keyname
//lista av personer 
  //person ska vara ett objekt 

  //lista av object 
var personList = [ { key:"value1", name:"Lasse" } , {key:"value2" , name:"alex" }  ]

personList[0].name

console.log( personList[0] )
console.log(personList[0].name)

console.log( personList[1] )
console.log(personList[1].name)


//lista av object som innehåller funktion 
var personList = [ { key:"value1", name:"Lasse",  countEX1: function(){
  
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