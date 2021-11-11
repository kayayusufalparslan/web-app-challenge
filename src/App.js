import React from "react";
import NavPerm from './NavPerm';
import HomePage from "./HomePage";
import About from "./About";
import Detail from "./Detail";

import { Route, Switch } from "react-router-dom";
import Footer from "./Footer";

function App() {

  return (
    <div>    
        <NavPerm />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path= "/about" exact component={About} />
          <Route path="/detail" exact component={Detail} />
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
