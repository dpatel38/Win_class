// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some; //10
//   }
  
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum; //10
//   }
  
//   let result = myCalculator(5, 5);
//   myDisplayer(result);

//   //

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     myDisplayer(sum);
//   }
  
//   myCalculator(5, 5);

// //
// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }

// function printResults(someNumber){
//     return `this is a random number: ${someNumber}`;
// }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
  
//   myCalculator(5, 5, printResults);

// //
// let numbers = [1, 2, 4, 7, 3, 5, 6];
// numbers.sort((a, b) => a - b);
// console.log(numbers); // [ 1, 2, 3, 4, 5, 6, 7 ]

// // 
// // definted & executed first
// console.log('1')

// setTimeout(function afterTwoSeconds() {
//   //defined second
//   //executed third
//   console.log('inside my callback function inside the functin being passed in: 2')
// }, 2000)

// // defined third and executed second
// console.log('3')

// Date is a JS keyword it's pulling from an existing object template and creating a new instance from that object template
// let d = new Date();
// console.log(d);

// //
// setInterval(myFunction, 1000);

// function myFunction() {
//   let d = new Date();
// //   document.getElementById("demo").innerHTML=
//   console.log(d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds());
// }
  
//
// setTimeout(function totalNum (num1=8, num2=4){
//     console.log(num1 + num2);
// }, 5000);

// 

// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function getFile(myCallback) {
//   let req = new XMLHttpRequest();
//   req.open('GET', "mycallback.html");
//   req.onload = function() {
//     if (req.status == 200) {
//       myCallback(this.responseText);
//     } else {
//       myCallback("Error: " + req.status);
//     }
//   }
//   req.send();
// }

// getFile(myDisplayer);

var form = document.querySelector('form')
form.onsubmit = function formSubmit (submitEvent) {
  var name = document.querySelector('input').value
  request({
    uri: "http://example.com/upload",
    body: name,
    method: "POST"
  }, function postResponse (err, response, body) {
    var statusMessage = document.querySelector('.status')
    if (err) return statusMessage.value = err
    statusMessage.value = body
  })
}