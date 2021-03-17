

import logo from './logo.svg';
import './App.css';
import WelcomeFN from './welcomeFn';
import Greeting from './Greeting';

function App() {
  return (
    <div className="App">
      <WelcomeFN />
      <Greeting />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Damini Patel. This is my first React APP. How Exciting!!!!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
