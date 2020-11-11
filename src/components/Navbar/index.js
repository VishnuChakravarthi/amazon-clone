import React from "react";
import Search from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import "./navbar.css";
import logo from ".../../../public/img/amazonlogo.jpg";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

const Navbar = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={logo} alt="logo" />
      </Link>
      <div className="header_search">
        <input className="header_searchinput" type="text" />
        <Search className="header_searchicon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionlineone">Hello Vishnu</span>
          <span className="header_optionlinetwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionlineone">Returns</span>
          <span className="header_optionlinetwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionlineone">Your</span>
          <span className="header_optionlinetwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionbasket">
            <ShoppingBasket />
            <span className="header_optionlinetwo header_basketcount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
