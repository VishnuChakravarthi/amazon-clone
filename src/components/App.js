import React, { useEffect } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Footer from "./Footer";
import Carousel from "./Carousel";

const promise = loadStripe(
  "pk_test_51Hme46A6CjnMXja2sGBFaboIA3YL6nUY0WLCnKeum3TVfLqFY35idj4YFMctGgPYXGZe4tzTZ99PCqAn4H3EWeZV00SgSswVAa"
);

const App = () => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>> ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/orders" exact>
            <Navbar />
            <Orders />
            <Footer />
          </Route>
          <Route path="/checkout" exact>
            <Navbar />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment" exact>
            <Navbar />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path="/login" exact component={Login} />
          <Route path="/c" exact component={Carousel} />
          <Route path="/">
            <Navbar />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
