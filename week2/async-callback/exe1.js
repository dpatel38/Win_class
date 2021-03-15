
async function loadJson(url) {
    let response= await fetch(url); 
    if (response.status == 200) {
        let data = await response.json();
        console.log(data);
        return data;
    } else {
    throw new Error(response.status);
    }   
}
loadJson('https://jsonplaceholder.typicode.com/posts')
  .catch(alert); // Error: 500


  //exercise2
//   async function wait() {
//     await new Promise(resolve => setTimeout(resolve, 1000));
  
//     return 10;
//   }
  
//   function f() {
//     // ...what should you write here?
//     // we need to call async wait() and wait to get 10
//     // remember, we can't use "await"
//     wait().then(results => console.log(results));
//   }
// f();