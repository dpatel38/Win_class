//FUNCTION AS ARGUMENTS
//Declare an add function
// function add(number1, number2) {
// 	return number1 + number2;
// }
// //console.log(add('hello world', 4));
// //Declare a function that takes a function as an argument
// function doMath(operation, number1, number2) {
// 	return operation(number1,number2);
// }

// //Pass a function into another.
// let sum = console.log(doMath(add, 1, 2));

//Array Functions
//.Filter function
// let students = [
// 	{name: 'John Lennon', average: 90},
// 	{name: 'Ringo Starr', average: 58},
// 	{name: 'Paul McCartney', average: 82}
// ];

// let passingStudents = students.filter(function(student){
// 	return student.average > 60;
// });
// console.log(passingStudents);
// passingStudents === [
// 	{name: 'John Lennon', average: 90},
// 	{name: 'Paul McCartney', average: 82}
// ];

// // // if we didn't have filter array function we needed to do this:
// function checkAverage(students){
//     let passing = [];
//     for(let i =0; i<students.length; i++){
//         console.log(students[i]);
//         if(students[i].average > 60){
//             passing.push(students[i]);
//         }
        
//     }
//     return passing
// }
// console.log(checkAverage(students));

//.Find Array function
// let students = [
// 	{name: 'John Lennon', average: 90},
// 	{name: 'Ringo Starr', average: 58},
// 	{name: 'Paul McCartney', average: 82}
// ];

// let passingStudents = students.find(function(student){
// 	return student.average > 50;
// });

// passingStudents === [
// 	{name: 'John Lennon', average: 90}
// ];
// console.log(passingStudents);

// //Map
// let students = [
// 	{firstName: 'Cam', lastName: 'Newton'},
// 	{firstName: 'Ted', lastName: 'Ginn'},
// 	{firstName: 'Greg', lastName: 'Olsen'}
// ]

// let fullNames = students.map(function(student){
// 	return `${student.firstName} ${student.lastName}`;
// })

// fullNames === ["Cam Newton", "Ted Ginn", "Greg Olsen"]

// console.log(fullNames),

//Reduce
// let students = [
// 	{name: 'Cam Newton', assignmentsCompleted: 6},
// 	{name: 'Ted Ginn', assignmentsCompleted: 10},
// 	{name: 'Greg Olsen', assignmentsCompleted: 8}
// ]

// let totalAssignments = students.reduce(function(sum,current){
//     console.log(`current ${current.name} & sum: ${sum}`);
// 	return sum + current.assignmentsCompleted;
// }, 0);

// totalAssignments === 24;
// console.log(totalAssignments);

// let animals = ['cat', 'dog', 'snail', 'bird', 'bear'];
// let result = animals.reduce(function(letter, current){
//     console.log(current[0]);
//     return current[0] == 'b';
// },0);
// console.log(result);

//challenge 1
// let superHeroes = [ ["Batman", "Bruce Wayne"],
//                    ["Spiderman", "Peter Parker"],
//                    ["The Flash", "Barry Allen"]];

// let secretIdentity = superHeroes.map(function(revealArray){
//   return revealArray.join(" is ");
// });

// console.log(secretIdentity.join("\n"));

//challenge 3
let slideshow = {
    photoList: ['birds', 'puppies', 'rainbows', 'kittens', 'babies'],

    currentPhotoIndex: 0,

    nextPhoto: () => {
        if(this.currentPhotoIndex < this.photoList.length - 1) {
            this.currentPhotoIndex++;
            console.log('currentPhoto is: '+ this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('End of Slideshow');
              this.pause();
        }
    },

    prevPhoto: () => {
        if(this.currentPhotoIndex > 0) {
            this.currentPhotoIndex--;
            console.log('currentPhoto is: ' + this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('Start of Slideshow');
            
        }
    },

    getCurrentPhoto: () => {
        return this.photoList[this.currentPhotoIndex];  
    },

    playInterval: null,

    play: () => {
        let self = this;
        this.playInterval = setInterval(function(){self.nextPhoto()}, 2000)
    },

    pause: () => {
        clearInterval(this.playInterval);
    }

}

// let myFunction = function (element, index) {
//     console.log(index + ":" + element);
//   }
  //array
  var fruits = ["apple", "orange", "cherry"];
  
//   // loop through
//   fruits.forEach(myFunction = (element, index) => {
//     console.log(index + ":" + element);
//   });
  fruits.forEach(myFunction);
   function myFunction(element, index, arr) {
    console.log(arr[index] + ":" + element.length);
  }

  //reduce
  const pokemon = [
    { name: "charmander", type: "fire" },
    { name: "squirtle", type: "water" },
    { name: "bulbasaur", type: "grass" }
  ]
  
  const getMapFromArray = pokemon.reduce((newPobj, currPokemon) => {
  
    // add object key to our object i.e. charmander: { type: 'water' }
    newPobj[currPokemon.name] = { type: currPokemon.type };
    return newPobj;
  }, {});
  
  // If we call our method like so:
  console.log(getMapFromArray);
  
  
  