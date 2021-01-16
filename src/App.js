import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootswatch/dist/united/bootstrap.min.css";
import * as jquery from "jquery";
import popperJS from "popper.js";
import "bootstrap/dist/js/bootstrap";
import './App.css';

import { Navbar } from "./components/Navbar";
import { DogImage } from "./components/DogImage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={DogImage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
