import React from 'react';
 //const state = {eventCount: 0, username: ''}

 function Event() {
  let [eventCount, setEventCount] = React.useState(0);
   function handleClick() {
    setEventCount(eventCount + 1);
   }
   let [username, setUsername] = React.useState('');
   function handleChange(event) {
    setUsername( event.target.value);
   }

   return (
     <div>
       <p>There have been {eventCount} events.</p>
       <p>
         <button onClick={handleClick}>Click Me</button>
       </p>
       <p>You typed: {username}</p>
       <p>
         <input onChange={handleChange} />
       </p>
     </div>
   )
 }

 
 export default Event;