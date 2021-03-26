//index.js
// app/javascript/index.js
// remove 
//require("style-loader!css-loader!../css/app.css");

//add
require("../css/app.css");

require('./another.js');

// function sayHello(){
//     let header = document.querySelector("#greeting");
//     let hello = ("<h1> hello world </h1>");
//     header.innerHTML = hello;
//   }
  
  sayHello();