// Importing necessary components and hooks
import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

// CheckoutProduct component
function CheckoutProduct({ id, image, title, price, rating }) {
    // Using the useStateValue hook to get the current state of the basket
    const [{basket}, dispatch] = useStateValue();

    // Function to remove an item from the basket
    const removeFromBasket = () => {
        // Dispatching an action to the reducer to remove the item from the basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        // Main div for the checkout product
        <div className="checkoutProduct">
            // Image of the product
            <img src={image} alt="" className="checkoutProduct__image" />

            // Div for the product information
            <div className="checkoutProduct__info">
                // Title of the product
                <p className="checkoutProduct__title">{title}
                </p>
                // Price of the product
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                // Rating of the product
                <div className="checkoutProduct__rating">
                    // Displaying the rating as stars
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                // Button to remove the product from the basket
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

// Exporting the CheckoutProduct component to be used in other parts of the application
export default CheckoutProduct
