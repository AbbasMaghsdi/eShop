// Importing necessary components and hooks
import { SportsBasketball } from "@material-ui/icons";
import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal.js";
import { useStateValue } from "./StateProvider";

// Checkout component
function Checkout() {
    // Using the useStateValue hook to get the current state of the basket
    const [{basket}, dispatch] = useStateValue();

    return (
        // Main div for the checkout page
        <div className="checkout">
            // Div for the left side of the checkout page
            <div className="checkout__left">
                // Advertisement image at the top of the checkout page
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
                <div>
                    // Title for the shopping basket
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    // Mapping through each item in the basket and rendering a CheckoutProduct component for each
                    {basket.map(item => (
                        <CheckoutProduct 
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}
                </div>
            </div>

            // Div for the right side of the checkout page
            <div className="checkout__right">
                // Rendering the Subtotal component which shows the total price of the items in the basket
                <Subtotal />
            </div>
        </div>
    )
}

// Exporting the Checkout component to be used in other parts of the application
export default Checkout
