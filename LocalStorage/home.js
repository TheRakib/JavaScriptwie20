
const dataFromLocal= localStorage.getItem("productList")

const parsedData = JSON.parse( dataFromLocal)

parsedData.map( product => {
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



const btn = document.querySelector("button")

btn.addEventListener("click" , collectPicture)


//när vi gör en api request vilken typ av funktion vi använder? 
// varför ?
function collectPicture() {


}