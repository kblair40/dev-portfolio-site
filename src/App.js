import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/UI/Navbar/Navbar";
import Home from "./pages/Home";

// import classes from "./App.module.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
