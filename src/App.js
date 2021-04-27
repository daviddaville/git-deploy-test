import { Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
          Learn React
        </a>
      </header>

      <Route
        exact
        path="/"
        render={() => (
          <div>
            <h1>Welcome</h1>
          </div>
        )}
      />
      <Route
        path="/dashboard"
        render={() => (
          <div>
            <h1>Dashboard</h1>
            <Link to="/" id="click-me">
              Home
          </Link>
          </div>
        )}
      />
    </div>
  );
}

export default App;
