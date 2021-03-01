//Define a function
// function sumTwoDigits(digitOne, digitTwo) {
// 	let sum = digitOne + digitTwo;
//     return sum;
// }
// console.log(sumTwoDigits(9, 4));

// function add() {
// 	let sum = 0;
// 	for(let i = 0; i < arguments.length; i++) {
// 		sum += arguments[i];
//         console.log(sum);
// 	}
// 	return sum;
// }
	
// console.log(add(1,2,3,4,5,6,7,8));

// function add(...rest) {
// 	let sum = 0;
// 	for(let i = 0; i < rest.length; i++) {
// 		sum += rest[i];
// 	}
// 	return sum;
// }
	
// console.log(add(1,2,3,4,5,6,7,8));
//challange 1
// let billAmount = 126.69;
// function gratuity(){    
//     //console.log(gratuity) ;   
//     return billAmount * 0.2;
// }
// //console.log(gratuity());
// function totalWithGrat(amount){
//     return amount + gratuity();

// }
//  console.log(`Your total including gratuity is : $${totalWithGrat(billAmount).toFixed(2)}`);

// //Hoisting in JS
//  hoisted(); // logs "foo"

// function hoisted() {
//   console.log("foo");
// }
// notHoisted(); // TypeError: notHoisted is not a function

// let notHoisted = function() {
//    console.log("bar");
// };
//Anonymous Functions
// let calculator = {
// 	add: function(a,b) {
// 		return a + b;
// 	}
// }

// calculator.add(2,3) // 5

// let arrayOfMystery = [
//     ['anonymous','array'],
//     { name: 'anonymous object' },
//     function(){ return 'Anonymous Function!'}
// ];

// console.log(arrayOfMystery[0][1]); // array
// console.log(arrayOfMystery[1].name); // anonymous object
// console.log(arrayOfMystery[2]()); // anonymous function!

//challenge 2

// let hands = ['rock', 'paper', 'scissors'];

// function getComputerHand(){
//     return hands[parseInt(Math.random()*10) % 3];
// }
// function compare(choice1, choice2){ 
// 	console.log("Player1: " + choice1);
//   console.log("Player2: " + choice2);
  
//   if (choice1 == choice2){
// 		return "Tie!";
//   }
//   if (choice1 == "rock"){
// 		if (choice2 == "paper"){
//     	return "Player2 Won!";
// 		}
//     else{
//     	return "Player1 Won!";
//     }
//   }
//   else if (choice1 == "paper"){
//   	if (choice2 == "scissors"){
//     	return "Player2 Won!";
//     }
//     else{
//     	return "Player1 Won!";
//     }
//   }
//   else if (choice1 == "scissors"){
//   	if (choice2 == "rock"){
//     	return "Player2 Won!"
//     }
//     else{
//     	return "Player1 Won!"
//     }
//   }
// }

// let choice1 = getComputerHand(); // computer's choice
// let choice2 = hands[2]; // our choice
// let game_result = compare(choice1, choice2); // get the result

// console.log(game_result); // log the result

//nested scope
// function outer() {
// 	let x = 'x';
// 	function inner() {
// 		let y = 'y';
// 		console.log(x); //'x'
// 	}
// 	console.log(x); // 'x'
// 	console.log(y); // ReferenceError: y is not defined
// }

// let landscape = function() {
//     let result = "";

//     let flat = function(size) {
//         for (let count = 0; count < size; count++)
//             result += " _ ";
//     };

//     let mountain = function(size) {
//         result += "/";
//         for (let count = 0; count < size; count++)
//             result += " '";
//         result += "\\";
//     };

//     flat(3);
//     mountain(4);
//     flat(6);
//     mountain(1);
//     flat(1);
//     return result;
// };

// console.log(landscape());


//challenge 3
function outer(){
    let a = "A";
    let b = "B";
    function inner(a, b) {
         a = "D";
         b = "E";
        
        console.log(a);

        console.log(b);

    }
  
    inner(a,b);
  }
  
  outer();

  //challenge 4

//   let slideshow = {
//       photoList: ["flower", "animal", "bird","plant"],
//       currentPhotoIndex: 0,
//       nextPhoto: function nextPhoto(){
//         currentPhotoIndex++;
//         if( currentPhotoIndex >= this.photoList.length ) {
//             currentSlideIndex = 0;
//         }

//       }

//   }

