// Importing necessary modules and components
import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

// Product component
function Product({id, title, image, price, rating}) {
    // Using the useStateValue hook to get the current state and dispatch function
    const [state, dispatch] = useStateValue();

    // Function to add the product to the basket
    const addToBasket = () => {
        // Dispatching an action to add the product to the basket
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        // Main div for the product
        <div className="product">
            // Div for the product information
            <div className="product__info">
                // Title of the product
                <p>{title}</p>
                // Price of the product
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                // Rating of the product
                <div className="product__rating">
                    // Displaying the rating as stars
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>

            // Image of the product
            <img src={image} />

            // Button to add the product to the basket
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

// Exporting the Product component to be used in other parts of the application
export default Product
