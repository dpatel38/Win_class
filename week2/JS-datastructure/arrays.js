// let teacher = ['Melissa', 'Yusuf', 'Laura'];
// console.log(teacher[1]);

// console.log(teacher.length);  //2

// let teachers = ['Assaf', 'Shane'];
// console.log(teachers);
// teachers.push('Zack'); //['Assaf', 'Shane', 'Zack']
// console.log(teachers);
// let teacher1 = teachers.pop(); //teacher1 == 'Zack', teachers == ['Assaf', 'Shane']
// console.log(teacher1);

//Iterating over Arrays using for loop and forEach
// 

//// solutions: https://github.com/andrewborisov/javascript-practice/tree/master/arrays

// ----- ** ONE ** -----

// //  * Task description: Write a method that creates a new array with given values 
// // * Expected Result: (3, 'a') => ['a', 'a', 'a'] 
// //  * Task Complexity: 1 of 5 
// //   arraySize - size of array 
// //   value - value to fill 
// //   returns - new array 
	// const arr = function(arraySize, value) {
	// 	//let newArr =[];
	// 	// for(let i = 0; i < arraySize.length; i++){
		
	// 	// newArr.push(value);
	// 	// //console.log(array(arraySize).push(value));
	// 	// //console.log(newArr);
	// 	// }
	// 	new Array(arraySize).fill(value);
	// 	//console.log(newArr);
	// 	}
		
	const fill = (arraySize, value) => new Array(arraySize).fill(value);
	console.log(fill(3, 'a'));

// // ----- ** TWO ** -----
//   // // * Task description: Write a method that reverts input array 
//   // // * Expected Result: [1, 2, 3] => [3, 2, 1] 
//   // //* Task Complexity: 1 of 5 
//    // array - Array of any elements  
//    const reverse2 = (array) => array.map((el, id, givenArr) => givenArr[givenArr.length - id - 1]);



// ----- ** THREE ** -----
// //  * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null 
// // * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3] 
// //  * Task Complexity: 1 of 5 
// //  array - An array of any elements 


  


// ----- ** FOUR ** -----
// //  * Task description: Write a method that returns an object composed of key-value pairs. 
// //  * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 } 
// //  * Task Complexity: 2 of 5 
// //   array - a deep array of pairs 
