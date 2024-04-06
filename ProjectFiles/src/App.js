// Importing necessary CSS styles for the App
import './App.css';

// Importing components for different pages
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";

// Importing necessary components from 'react-router-dom' for routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Main App component
function App() {
  return (
    // Wrapping the entire app within a div with class 'App'
    <div className="App">
      // Using Router to handle different routes
      <Router>
        // Switch component is used to render only the first Route or Redirect that matches the location
        <Switch>
          // Route for the login page
          <Route path="/login">
            // Rendering the Login component when the path is '/login'
            <Login />
          </Route>

          // Route for the checkout page
          <Route path="/checkout">
            // Rendering the Header component on the checkout page
            <Header />
            // Rendering the Checkout component when the path is '/checkout'
            <Checkout />
          </Route>

          // Default route (home page)
          <Route path="/">    
            // Rendering the Header component on the home page
            <Header />
            // Rendering the Home component when the path is '/'
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

// Exporting the App component to be used in other parts of the application
export default App;
