import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import history from "../history";
import Navbar from "./Navbar";
import Home from "./Home";
import Checkout from "./Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
