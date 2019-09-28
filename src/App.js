import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Korea from "./pages/Korea/Korea";
import Hotel from "./pages/Hotel/Hotel";
import Page404 from "./pages/Page404/Page404";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/korea/" exact component={Korea} />
          <Route path="/hotel/" exact component={Hotel} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
