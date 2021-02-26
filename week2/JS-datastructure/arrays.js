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
let teachers = ['Assaf', 'Shane', 'Zack']
for(let i = 0; i < teachers.length; i++) {
	console.log(teachers[i]);
}

//Uses a function
teachers.forEach(function(item, index) {
	console.log(item, index);
});