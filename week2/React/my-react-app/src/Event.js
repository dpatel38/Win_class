
 const state = {eventCount: 0, username: ''}

 function Event() {
   function handleClick() {
     setState({eventCount: state.eventCount + 1})
   }

   function handleChange(event) {
     setState({username: event.target.value})
   }

   return (
     <div>
       <p>There have been {state.eventCount} events.</p>
       <p>
         <button onClick={handleClick}>Click Me</button>
       </p>
       <p>You typed: {state.username}</p>
       <p>
         <input onChange={handleChange} />
       </p>
     </div>
   )
 }

 function setState(newState) {
    Object.assign(state, newState)
   

 }

 

 export default Event;