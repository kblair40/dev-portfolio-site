import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

// import classes from "./App.module.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/resume" exact>
          <Resume />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
