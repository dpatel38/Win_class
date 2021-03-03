// let el = document.getElementById('username');
// console.log(el);

// //Get all inputs
// let firstButton = document.querySelector('button');
// let inError = document.querySelectorAll('input.error');

// console.log(firstButton); //single button node
// console.log(inError); //Node list of inputs with class 'error'
//exercise-1
let header = document.querySelector('header');
console.log(header);
let section = document.querySelectorAll('section');
console.log(section);
let current = document.querySelector('section.current');
console.log(current);
let afterCurrent = document.querySelector('section.current').nextElementSibling;
console.log(afterCurrent);
let h2Current = document.querySelector('section.current').previousElementSibling.children[0];
console.log(h2Current);
let h2 = document.querySelector('h2.highlight').parentElement.parentElement;
console.log(h2);
let allH2 = Array.from(document.querySelectorAll('section h2'))
            .map(function(headline){
                return headline.parentElement;
});
console.log(allH2);

// //create element in DOM
// let newLI = document.createElement('li');
// newLI.innerHTML = "Item 4";

// let list = document.querySelector('ul');
// list.appendChild(newLI); //Insert after item 1

// let list = document.querySelector('#list');

//exercise-2
//1
list.children[1].innerHTML = "Fair Trade Coffee";

//2
list.children[3].remove();

//3
let cheese = document.createElement('li');
cheese.innerHTML = 'Cheese Whiz';
list.appendChild(cheese);

//4
list.innerHTML = '';
['protein powder', 'muscle milk', 'power bars'].forEach(function(itemText){
	var li = document.createElement('li');
	li.innerHTML = itemText;
	list.appendChild(li);
})

//5
list.children[1].className = "important";
