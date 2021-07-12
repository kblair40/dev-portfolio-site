import React from "react";
import { Route, Switch } from "react-router-dom";

import { ThemeProvider } from "./store/ThemeContext";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
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
