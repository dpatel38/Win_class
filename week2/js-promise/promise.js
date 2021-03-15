const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
  ];
  
  
  
  function createPost(post) {
    return new Promise(function(resolve, reject){
    setTimeout(function() {
      posts.push(post);
      const error = true;
        
      
    }, 2000);
})
  }
  
  
  function getPosts() {
      return new Promise(function(resolve, reject){
        setTimeout(function() {
            let output = '';
            posts.forEach(function(post){
              output += `<li>${post.title}: ${post.body}</li>`;
            });
            document.body.innerHTML = output;
          }, 1000);
      })
    
  }
  
  createPost({title: 'Post Three', body: 'This is post three'}, getPosts);