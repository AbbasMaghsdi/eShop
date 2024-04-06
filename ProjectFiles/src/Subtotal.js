// Importing necessary modules and hooks
import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

// Subtotal component
function Subtotal() {
    // Using the useStateValue hook to get the current state of the basket
    const [{basket}, dispatch] = useStateValue();

    return (
        // Main div for the subtotal
        <div className="subtotal">
            // Using the CurrencyFormat component to display the subtotal
            <CurrencyFormat 
                // Function to render the subtotal text
                renderText = {(value) => (
                    <>
                        // Displaying the number of items in the basket and the subtotal value
                        <p>
                            Subtotal ({basket.length} items): <strong>${value}</strong>
                        </p>
                        // Checkbox for indicating whether the order contains a gift
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}

                // Setting the decimal scale to 2
                decimalScale={2}
                // Getting the subtotal value from the basket
                value={getBasketTotal(basket)}
                // Setting the display type to text
                displayType={"text"}
                // Using a thousand separator
                thousandSeparator={true}
                
            />

            // Button to proceed to checkout
            <button>Proceed to Checkout</button>
        </div>
    )
}

// Exporting the Subtotal component to be used in other parts of the application
export default Subtotal
