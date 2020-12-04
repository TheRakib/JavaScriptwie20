/* function doSum() {let summa =0;
    for(let i= 0; i<2000000000; i++){
      summa += 1;
    }
    console.log(summa)
    }

//async 
setTimeout(doSum, 3000)
    
//den kör sync
const input1 = document.querySelector("#id1").value;
// den kör sync
const input2 = document.querySelector("#id2");
console.log(input2)
// den byggs upp men kör inte tills man anropar den
function Vadsomhelst(e){

    //e kommer från event 
 e.preventDefault()

 console.log(' Show me the value ' )
}
 
// kör sync
const btn = document.querySelector("button")


//  den kör async
// callback en funktion som är beroende på en annan function 
btn.addEventListener("click", Vadsomhelst)

// callback funktion brukar vara beroende på en event eller respons från server/api 
 
// den kör sync
const mainDiv =document.querySelector(".main")
//den kör sync
console.log(mainDiv)


 */

/* // API , database 
const data = [
    {id:1, json:"data1"},
    {id:2 , json:"data2"}
 ]








  
 function fetchData(){
     
 setTimeout(()=>{  console.log(data[0])},2000) 
 // fejkade dröjning av data hämtning
 }
  

 // när ska vi använda async function ? API request 
// hur ska vi göra den 

async function readData()   
{
    // request, fetch 
    const x =  await fetchData()
    console.log(" use x " , x)

}
 */




 
// vi ska läsa data från en api 


// hur skapar man async funtion 

async function collectData(){
// fetch inbyggd js function som tar in en url som har data. 
const res = await fetch('https://jsonplaceholder.typicode.com/todos')
console.log(res)
const data = await res.json()

data.map(  e => console.log(e))
//console.log(data)

 }

 
collectData(); 
console.log("resten av min kod")



//map och foreach 

const lista = [ 100, 200, 300, 500 ]


lista.forEach( function(e) {console.log(e)}  )
//alternative
lista.forEach( (e)=> {  console.log(e)  }  )

lista.map(  f=> console.log(f)  )

