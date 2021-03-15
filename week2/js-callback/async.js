var msg = document.getElementById("message"); 
  
        function f1() { 
            return new Promise(function (resolve, reject) { 
                setTimeout(function () { 
                msg.innerHTML += "<p>f1 is starting</p>"; 
                    msg.innerHTML += "<p>f1 is ending</p>"; 
                    resolve(); 
                }, 100); 
            }) 
        } 
  
        async function f2() { 
            msg.innerHTML += "<p>f2 is starting</p>"; 
              
            // Engine waits for f1() to finish it's  
            // execution before executing the next line 
            await f1();  
            msg.innerHTML += "<p>f2 is ending</p>"; 
        } 
  
        f2(); 