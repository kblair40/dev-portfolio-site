import React from "react";
import { Route, Switch } from "react-router-dom";

import { ThemeProvider } from "./store/ThemeContext";
import Navbar from "./components/UI/Navbar/Navbar";
import Home from "./pages/Home";

// import classes from "./App.module.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ThemeProvider>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
