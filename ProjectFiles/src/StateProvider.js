// Importing necessary hooks and functions from React
import React, { createContext, useContext, useReducer } from "react";

// Creating the data layer with createContext
export const StateContext = createContext();

// The StateProvider component which wraps the app and provides the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  // Using the Provider component from the created context and providing it with a value
  // The value is the current state of the application and a dispatch function for updating the state
  // The current state and dispatch function are obtained by using the useReducer hook with the provided reducer and initial state
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    // Rendering the children components inside the Provider component
    {children}
  </StateContext.Provider>
);

// Custom hook for accessing the state and dispatch function from the data layer
export const useStateValue = () => useContext(StateContext);
