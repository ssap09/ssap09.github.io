var css = document.querySelector("h3")
var color1 = document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body = document.getElementById("bodybg");
 

 function colorinput(){
    body.setAttribute("style","background: linear-gradient(to right,"+ color1.value + "," + color2.value + ")");
    css.textcontent = body.style.background + ";";
}
color1.addEventListener("input",colorinput )

color2.addEventListener("input", colorinput)

function greet(name='', age=30, pet='cat'){
    return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} .`
}