import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import Page from './components/Page';
import './App.css';



function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" component={Page} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
