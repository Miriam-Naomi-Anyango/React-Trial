import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React, it's simple
        </a>
      </header>
      
    </div>
  );
}

export default App;
