// Importing necessary modules and components
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

// Rendering the main App component
ReactDOM.render(
  // Using React's StrictMode to highlight potential problems in the application
  <React.StrictMode>
    // Using the StateProvider component to provide state management capabilities to the App
    <StateProvider initialState={initialState} reducer={reducer}>
      // Rendering the App component
      <App />
    </StateProvider>
  </React.StrictMode>,
  // Specifying the root element where the App will be mounted
  document.getElementById('root')
);
