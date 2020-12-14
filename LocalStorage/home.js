
const dataFromLocal= localStorage.getItem("productList")

const parsedData = JSON.parse( dataFromLocal)

// trigga , köra den med nån event 

/* parsedData.map( product => {
    const li = document.createElement("li")
    li.innerText = product.name
    const div = document.querySelector(".data")
    div.append(li);
    console.log(product.name) 
    console.log(product.price)}    
    
    ) 


const kundvagnDiv = document.querySelector(".kundvagn")
  
const itemNumber = localStorage.getItem("productList")

kundvagnDiv.innerText = JSON.parse(itemNumber).length
*/


const btn = document.querySelector("button")

btn.addEventListener("click" , collectPicture)


//när vi gör en api request vilken typ av funktion vi använder? 
// varför ?

 //alternative till fecth:  axios 
     
async function collectPicture() {

    //client id : username
    //secret key : lösenord 
    // först man ska skicka request till api endpoints
    // måste man göra async await 
const response=  await fetch("https://api.unsplash.com/photos/?client_id=iQPAF8Dq7rQFnTgJhOH_cd0D7xUMZqM6pHi4VHSloyk")   
//const response=   await fetch("https://api.unsplash.com/photos/ramdom?client_id=iQPAF8Dq7rQFnTgJhOH_cd0D7xUMZqM6pHi4VHSloyk")
//const data = await response.json();
// console.log(data.urls.small) //hämtar en ramdom bild objekt

 //JSON.stringify : js till json
 // JSON.parse : json till js

// response måste anropas med json() metod 
// den måste ha också await 
// då får man riktigt data som vi kan använda i vår app 

const data = await response.json();


// en data:  objekt 

// flera data : lista av objekt. 
    
//array av objekt /data är en lista när man gör en request till all photos 
  

console.log(data) //url
console.log(data[3].urls.small) //url
   
   // img.src= data[5].urls.small

const specifikBild = await fetch("https://api.unsplash.com/photos/SwcaMnI7TUU/?client_id=iQPAF8Dq7rQFnTgJhOH_cd0D7xUMZqM6pHi4VHSloyk")
const wishedPic = await specifikBild.json();
console.log(wishedPic)

}


// async await funktion 

// fetch request till api 
// res= await fetch("url")
// data =res.json() //riktigt 
// data kan användas var jag vill 





