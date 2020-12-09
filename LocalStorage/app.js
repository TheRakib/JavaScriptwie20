

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

   const divData = document.querySelector(".test").innerText;

   localStorage.setItem("DivData" , divData)
   // input1 och input2 ska lagras i ett objekt
   //Validera om användare har matat in empty value
  product.name = name;
  product.price = price
  console.log(product) // {name :" ", price:" "}
   //objektet ska pushas i item array 
  
  item.push(product)
  console.log("item array ", item)
  //item array ska lagras i localstorage 

  // vi behöver skriva lite logik som gör att setItem kan också
 //lagra nya value /append nya value
 //när det finns data in i localstorage ska vi lägga till data  

 //localstorage har befietligt value
 const localData = localStorage.getItem("productList"); 


 const existingData = JSON.parse(localData)

   // hur vi kan adda två array 
  // const cleanedData = existingData +item   eller   item

  const cleanedData = existingData ?  existingData.concat(item) : item

  //cleanedData ska sparas i localstorage
  localStorage.setItem("productList", JSON.stringify(cleanedData))
 
}

const dataFromLocal= localStorage.getItem("productList")

const parsedData = JSON.parse( dataFromLocal)
console.log("Från utanför funktionen " ,parsedData )


parsedData.map(  product => {
   //div= document.querySelector(".data")
   const li = document.createElement("li")
    li.innerText = product.name
    const div = document.querySelector(".data")
    div.append(li);
    console.log(product.name) 
    console.log(product.price)}    
    
    )




const divData = localStorage.getItem("DivData");
console.log(divData)


//localStorage.clear() 
// läser data input fälten 
// skapa ett objekt utifån input data 
// pushade input data till en list
// läser om det finns existing data in i localstorage
// om det finns existing data adderas listas data med hjälp av concat metoden 
// annars läser den data från lista 
// lagra data i localstorage 
// läsa data från localstorage
