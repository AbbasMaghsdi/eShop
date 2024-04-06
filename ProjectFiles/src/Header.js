// Importing necessary components and hooks
import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

// Header component
function Header() {
    // Using the useStateValue hook to get the current state of the basket
    const [{basket}, dispatch] = useStateValue();

    return (
        // Main div for the header
        <div className="header">
          // Link to the home page
          <Link to="/" style={{ textDecoration:"none" }}>
            // Div for the logo
            <div className="header__logo">
                // Storefront icon for the logo
                <StorefrontIcon className="header__logoImage" fontSize="large"/>
                // Title for the logo
                <h2 className="header__logoTitle">eShop</h2>
            </div>
          </Link>

          // Div for the search bar
          <div className="header__search">
            // Input field for the search bar
            <input type="text" className="header__searchInput" />
            // Search icon for the search bar
            <SearchIcon className="header__searchIcon" />
          </div>
          
          // Div for the navigation items
          <div className="header__nav">
            // Link to the login page
            <Link to="/login" style={{ textDecoration:"none" }}>
              // Div for the login navigation item
              <div className="nav__item">
                // Greeting for the guest user
                <span className="nav__itemLineOne">Hello Guest</span>
                // Text for the login link
                <span className="nav__itemLineTwo">Sign In</span>
              </div>
            </Link>
            // Div for the shop navigation item
            <div className="nav__item">
              // Text for the shop link
              <span className="nav__itemLineOne">Your</span>
              <span className="nav__itemLineTwo">Shop</span>
            </div>
            // Link to the checkout page
            <Link to="/checkout" style={{ textDecoration: "none" }}>
              // Div for the basket navigation item
              <div className="nav__itemBasket">
                // Shopping basket icon
                <ShoppingBasketIcon/>
                // Number of items in the basket
                <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span>
              </div>
            </Link>
          </div>
        </div>
    )
}

// Exporting the Header component to be used in other parts of the application
export default Header
