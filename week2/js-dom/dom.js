// let el = document.getElementById('username');
// console.log(el);

// //Get all inputs
// let firstButton = document.querySelector('button');
// let inError = document.querySelectorAll('input.error');

// console.log(firstButton); //single button node
// console.log(inError); //Node list of inputs with class 'error'
//exercise-1
// let header = document.querySelector('header');
// console.log(header);
// let section = document.querySelectorAll('section');
// console.log(section);
// let current = document.querySelector('section.current');
// console.log(current);
// let afterCurrent = document.querySelector('section.current').nextElementSibling;
// console.log(afterCurrent);
// let h2Current = document.querySelector('section.current').previousElementSibling.children[0];
// console.log(h2Current);
// let h2 = document.querySelector('h2.highlight').parentElement.parentElement;
// console.log(h2);
// let allH2 = Array.from(document.querySelectorAll('section h2'))
//             .map(function(headline){
//                 return headline.parentElement;
// });
// console.log(allH2);

// //create element in DOM
// let newLI = document.createElement('li');
// newLI.innerHTML = "Item 4";

// let list = document.querySelector('ul');
// list.appendChild(newLI); //Insert after item 1

// let list = document.querySelector('#list');

//exercise-2
//1
// list.children[1].innerHTML = "Fair Trade Coffee";

// //2
// list.children[3].remove();

// //3
// let cheese = document.createElement('li');
// cheese.innerHTML = 'Cheese Whiz';
// list.appendChild(cheese);

// //4
// list.innerHTML = '';
// ['protein powder', 'muscle milk', 'power bars'].forEach(function(itemText){
// 	var li = document.createElement('li');
// 	li.innerHTML = itemText;
// 	list.appendChild(li);
// })

// //5
// list.children[1].className = "important";

// // TASK: 
// Add the following elements to the container using ONLY javascript - do not add any HTML or CSS code.

// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.

let redP = document.createElement('p');
redP.innerHTML = "Hey I’m red!";
redP.style.color = "red";
let div = document.querySelector('#container');
div.appendChild(redP);


let blueH3 = document.createElement('h3');
blueH3.innerHTML = "I’m a blue h3!";
blueH3.style.color = "blue";
 div = document.querySelector('#container');
div.appendChild(blueH3);

let newDiv = document.createElement('div');
newDiv.style.border = "solid 2px black";
newDiv.style.backgroundColor = "pink";
let h1 = document.createElement('h1');
h1.innerHTML = "I’m in a div";
div.appendChild(newDiv);
newDiv.appendChild(h1);

let p = document.createElement('p');
p.innerHTML = "ME TOO!";
newDiv.appendChild(p);


