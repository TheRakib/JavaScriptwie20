

//Vi ska läsa form data 
// lagra form data in i localstorage 


//visa localstorage data in i div med klassnamn data



const btn = document.querySelector("button");

btn.addEventListener("click", addToLocalStorage )

//en lista av objekt 

let item= [];

function addToLocalStorage(){ 
   let product = {}
   const name= document.querySelector("#input1").value;
   const price= document.querySelector("#input2").value;

  // const divData = document.querySelector(".test").innerText;

  // localStorage.setItem("DivData" , divData)

   // input1 och input2 ska lagras i ett objekt
   //Validera om användare har matat in empty value
  product.name = name;
  product.price = price
  //console.log(product) // {name :" ", price:" "}
   //objektet ska pushas i item array 
  
  item.push(product)
 // console.log("item array ", item)
  //item array ska lagras i localstorage 

  // vi behöver skriva lite logik som gör att setItem kan också
 //lagra nya value /append nya value
 //när det finns data in i localstorage ska vi lägga till data  


// vi skulle spara data i localStorage 



// om det redan finns produkter i localstorage skulle vi lägga till item 
// i localstorage.


 //localstorage har befietligt value
 const localData = localStorage.getItem("productList"); 
 //konverterade vi till js objekt 
 const existingData = JSON.parse(localData)

   // hur vi kan adda två array 
  // const cleanedData = existingData +item   eller   item

  const cleanedData = existingData ?  existingData.concat(item) : item

  //cleanedData ska sparas i localstorage
  localStorage.setItem("productList", JSON.stringify(cleanedData))
 
}




function addSomething() {
    localStorage.setItem("someData", " lite info ")

    location.reload();
}

//onreload()
function reload() {
    const data2 = localStorage.getItem("someData")
console.log(data2)

}

const btn2 = document.querySelector(".btn")


btn2.addEventListener("click", addSomething)
//nån event : click , onload , onsubmit osv. 



//localStorage.clear() 
// läser data input fälten 
// skapa ett objekt utifån input data 
// pushade input data till en list
// läser om det finns existing data in i localstorage
// om det finns existing data adderas listas data med hjälp av concat metoden 
// annars läser den data från lista 
// lagra data i localstorage 
// läsa data från localstorage
