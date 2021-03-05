//Abstraction
//An abstraction is a way of hiding the implementation details and showing only the functionality to the users. 
//Creating a constructor function  
// function Vehicle()  
// {  
//     this.vehicleName=vehicleName;      
// }  
// //Creating a constructor function  
// function Bike(vehicleName)  
// {  
//     this.vehicleName=vehicleName;  
// }  
// Bike.prototype=Object.create(Vehicle.prototype);  
// var bike=new Bike("Honda");  
// console.log(bike instanceof Vehicle);  
// console.log(bike instanceof Bike); 
// console.log(bike);

//Encapsulation
//The JavaScript Encapsulation is a process of binding the data (i.e. variables) with the functions acting on that data. It allows us to control the data and validate it. To achieve an encapsulation in JavaScript: -

// Use var keyword to make data members private.
// Use setter methods to set the data and getter methods to get that data.
// The encapsulation allows us to handle an object using the following properties:

// Read/Write - Here, we use setter methods to write the data and getter methods read that data.


// Read Only - In this case, we use getter methods only.

// Write Only - In this case, we use setter methods only.


//////////////////////////*******************/////////////////////

// If you want to learn more about OOP check out this link first: 
// (or any other resources you want for reviewing oop)
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS

// then try this exercise: 
// TASK:
// In this task we provide you with a constructor. We want you to:
    // 1) Add a new method to the Shape class's prototype, calcPerimeter(), which calculates its perimeter (the length of the shape's outer edge) and logs the result to the console.
    // 2) Create a new instance of the Shape class called square. Give it a name of square and a sideLength of 5.
    // 3. Call your calcPerimeter() method on the instance, to see whether it logs the calculation result to the browser DevTools' console as expected.
    // 4. Create a new instance of Shape called triangle, with a name of triangle and a sideLength of 3.
    // 5. Call triangle.calcPerimeter() to check that it works OK.




// CONSTRUCTOR PROVIDED: 
function Shape(name, sides, sideLength) {
    this.name = name;

    this.sides = sides;
    this.sideLength = sideLength;
    this.calcPerimeter = function(){       
        console.log("The length of the shape's outer edge is " + this.sideLength * 4);        
    }
  }
  
  // Write your code below here

  let square = new Shape();
  square.sideLength = 5;
  square.calcPerimeter();

  let triangle = new Shape();
  triangle.sideLength = 3;
  triangle.calcPerimeter();