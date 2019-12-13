import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar.js'
import Games from './components/games.js'

function App() {
  return (      
      <div>
        <NavBar/>
      <header className="App-header">
       {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
      <Games />
    </div>
  );
}

export default App;
