import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Hakone from "./pages/Hakone/Hakone";
import Kyoto from "./pages/Kyoto/Kyoto";
import Osaka from "./pages/Osaka/Osaka";
import Nara from "./pages/Nara/Nara";
import Kobe from "./pages/Kobe/Kobe";
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
          <Route path="/hakone/" exact component={Hakone} />
          <Route path="/kyoto/" exact component={Kyoto} />
          <Route path="/osaka/" exact component={Osaka} />
          <Route path="/nara/" exact component={Nara} />
          <Route path="/kobe/" exact component={Kobe} />
          <Route path="/korea/" exact component={Korea} />
          <Route path="/hotel/" exact component={Hotel} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
