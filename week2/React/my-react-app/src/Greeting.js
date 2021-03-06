import React, {useState,useEffect } from 'react';

function useLocalStorageState(key, defaultValue = '') {
    const [state, setState] = useState(
      () => window.localStorage.getItem(key) || defaultValue,
    )

    useEffect(() => {
      window.localStorage.setItem(key, state)
    }, [key, state])

    return [state, setState]
  }

  function Greeting() {
    const [name, setName] = useLocalStorageState('name')

    const handleChange = event => setName(event.target.value)

    return (
      <div>        
        <h1>{name ? <strong>Hello {name}</strong> : 'Please type your name'}</h1>
        <form>
          <label htmlFor="name">Name: </label>
          <input value={name} onChange={handleChange} id="name" />
        </form>
      </div>
    )
  }

  export default Greeting;