import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Resume from './components/Resume';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </Router>

    </div>
  );
}

export default App;
