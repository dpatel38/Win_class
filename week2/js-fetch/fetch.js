//fetch with .then() method

// fetch('https://javascript.info/article/promise-chaining/user.json')
//   // Load it as json
//   .then(response => {
//     console.log('response from user api: '+ response);
//       return response.json()
//     })
//   // Make a request to GitHub
//   .then(user =>
//       fetch(`https://api.github.com/users/${user.name}`)
//   )
//   // Load the response as json
//   .then(response => response.json())
//   // Show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
//   .then(githubUser => {
//       console.log(githubUser);
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);
// }).catch(err => {console.log(response.status)});



//fetch using async and await
async function showAvatar() {

    // read our JSON
    let response = await fetch('https://javascript.info/article/promise-chaining/user.json');
    let user = await response.json();
  
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();
  
    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
  }
  
  showAvatar();