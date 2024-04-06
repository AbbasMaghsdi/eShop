// Importing necessary modules and components
import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import StorefrontIcon from '@material-ui/icons/Storefront';
import { auth } from "./firebase";

// Login component
function Login() {
    // Using the useHistory hook for navigation
    const history = useHistory();
    // Using the useState hook to manage email and password states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle sign in
    const signIn = e => {
        e.preventDefault();

        // Using Firebase auth to sign in with email and password
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                // Navigating to the home page after successful sign in
                history.push('/');
            })
            .catch(error => alert(error.message))

    }

    // Function to handle registration
    const register = e => {
        e.preventDefault();

        // Using Firebase auth to create a new user with email and password
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // Navigating to the home page after successful registration
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message))

    }

    return (
        // Main div for the login page
        <div className='login'> 
            // Link to the home page
            <Link to='/' style={{ textDecoration: "none" }}>
                // Div for the logo
                <div className="login__logo">
                    // Storefront icon for the logo
                    <StorefrontIcon className="login__logoImage" fontSize="large" />
                    // Title for the logo
                    <h2 className="login__logoTitle">eSHOP</h2>
                </div>
            </Link>

            // Container for the login form
            <div className='login__container'>
                // Title for the login form
                <h1>Sign-in</h1>

                // Login form
                <form>
                    // Input field for email
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    // Input field for password
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    // Sign in button
                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>

                // Agreement text
                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                // Registration button
                <button className='login__registerButton' onClick={register}>Create your eShop Account</button>
            </div>
        </div>
    )
}

// Exporting the Login component to be used in other parts of the application
export default Login;
