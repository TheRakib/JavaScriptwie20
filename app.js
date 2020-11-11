
   

var addElement = function ()  {

  
  //var p = document.querySelector("p")
  //console.log(p)
  // skapar en p element createElement()
  var p = document.createElement("p")


  //console.log(p)
  //sätta attributer
  p.setAttribute("id" , "p1")

  //sätta attributer
  p.setAttribute("class" , "paragraf")
  //lägger till värde till p
  //console.log(p)

  //lägger till content 
  p.textContent = " hello från javascript "
  
  
  // var ska jag pusha p element
  // väljer body element
  
  var div1= document.querySelector("#div1");


// lägger till som child av body 
  div1.appendChild(p)


  console.log(div1)

  //radera element från html/DOM
  //p.remove()

  //väljer all
//var divs = document.querySelectorAll("div")

// en lista av divs
//console.log(divs)



}

var button = document.querySelector("button");
button.addEventListener("click", addElement); 
