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
	
		
	

	  function newFilledArray(arraySize, value) {
		var array = [];
		for (var i = 0; i < arraySize; i++) {
			array[i] = value;
		}
		return array;
	}
console.log(newFilledArray(3, 'a'));
// // ----- ** TWO ** -----
//   // // * Task description: Write a method that reverts input array 
//   // // * Expected Result: [1, 2, 3] => [3, 2, 1] 
//   // //* Task Complexity: 1 of 5 
//    // array - Array of any elements  
//    const reverse2 = (array) => array.map((el, id, givenArr) => givenArr[givenArr.length - id - 1]);
function reverseArray (arr) {
    var numArr = arr.length;    
    var newArr = [];    
    for (i = 0; i < numArr; i++) {      
        let inArr = arr;
        newArr[i] = inArr.pop(i);       
    }
    return newArr;
}
console.log(reverseArray([1,2,3]));

//not working
// function reverseArr(arr){
// 	let newArray = [];
// 	for (let i = arr.length-1; i > 0; i--){
// 		let inArr = arr;
// 		newArray[i];
// 	}
// 	return newArray;
// }
// console.log(reverseArr([1,2,3]));
// ----- ** THREE ** -----
// //  * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null 
// // * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3] 
// //  * Task Complexity: 1 of 5 
// //  array - An array of any elements 
////filter() method remove the falsy value and return truthy value.
function clearArray(arr) {
	var array = arr.filter(function(value){
	  return value;
	});
	return array;
  }
console.log(clearArray([0, 1, false, 2, undefined, '', 3, null]));
  


// ----- ** FOUR ** -----
// //  * Task description: Write a method that returns an object composed of key-value pairs. 
// //  * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 } 
// //  * Task Complexity: 2 of 5 
// //   array - a deep array of pairs 

let array4 = [['a', 1], ['b', 2]];
let array =[];

function additem(myobject, keyvalue){//['a', 1]
    let thiskey = keyvalue[0]; //a
    let thisvalue = keyvalue[1]; //1
    myobject[thiskey] = thisvalue;
    return myobject;
}

let arrayAsObject = array4.reduce(additem, {});

console.log(arrayAsObject);

// // ***** FIVE *****
// // create an array of names 
// // add three new names to the end of that array
let names = ['lina','kim','rita'];
names.push('bob','tom', 'smith');
console.log(names);

// ***** SIX *****
//       find a needle in the haystack -> if a word matches 'needle' return the index of that word within that array
const myHaystack = 'This is my haystack!';
const myNeedle = 'is my';
let findNeedle = (needle, haystack) => {
	let needleLength = needle.length;
	let haystackLength = haystack.length;
	if (needleLength === 0) return 0;
		for(i = 0; i < haystackLength; i++) {
			if (haystack.substr(i, needleLength === needle) return i;
		}	
	return 0;
}
console.log(findNeedle(myNeedle, myHaystack));


// //  ***** Seven *****
// //     Return an array, where the first element is the count of positives numbers and the second   element is sum of negative numbers.

function countPositivesSumNegatives(input) {
	if (input == null || input.length < 1){
	  return [];
	}
	var sum =0;
	var pos =[];
	
	for (var i=0; i<input.length; i++){
	
		if(input[i]>0){
		pos.push(input[i]);		
		} else{
		sum += input[i];		
		}
	}
		return [pos.length, sum];
}
console.log(countPositivesSumNegatives([2,6,3,8,9,-5, -7]));
// // If the input array is empty or null, return an empty array.