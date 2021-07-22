import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Resume from "./pages/Resume";

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
      </Switch>
    </div>
  );
}

export default App;
