function inventoryList() {
	let items = [];
	  
	const add = (name) => {
	  const names = items.filter(item => item.name === name)
	  if (names.length === 0) {
        let addItem = items.push({name: name});
	    console.log('add'+ addItem);
         }
         
	}

 	const remove = (name) => {

 for (var i = inventoryList.length-1;i >= 0; i--) {
    if(items[i]=== name){
        items.splice(i, 1);
    }
}
     }


	const getList = () => {
	 // console.log(items)
		return items
	}



 	return {add, remove, getList};

 }

console.log(inventoryList());

// function inventoryList() {
//     // write your code here
//      let list = [];
     
//      function add(name){
      
//          if(list.length<10 && !list.includes(name)){ 
//               list.push(name);
//           }
//           return name;
//      }
//      function remove(name){ 
//           let index = list.indexOf(name);
//           if (index > -1) {
//               list.splice(index, 1);
//           }
//           else{
//           console.log("Name is not present in the List.");
//           }
//           return name;
//       }
//       function getList(){
//           for (var i = 0; i < list.length; i++) {
//           console.log(list[i]);
//           }
//           return inventoryList;
//       }

//       //console.log(getList());
// //   //
// //     
//   //return add(), remove(), getList();
  
  
//   } 
//   console.log(inventoryList()); 
//   console.log(add('Vladimir'));
//     console.log(add('Goran'));
//     console.log(add('Gordana'));
//     console.log(getList());
//     console.log(remove('Vladimir'));
//     console.log(getList());
// //   let obj = inventoryList();
// //   console.log(inventoryList(add('Shirt')));
//