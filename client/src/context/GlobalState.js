import React, { createContext, useReducer } from "react";
import { appReducer } from "./AppReducer";
//Initial State
const initialState = {
  transactions: [
    { id: 1, text: "milk", amount: -20 },
    { id: 2, text: "curd", amount: -30 },
    { id: 3, text: "pepsi", amount: -40 },
    { id: 4, text: "salary", amount: 200 },
  ],
};

//Create Context
export const GolbalContext = createContext(initialState);

//Create Provider Component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  //Actions

  //Delete
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: id,
    });
  };

  //Add Transaction
  const addTransaction = (newTransaction) => {
    dispatch({
      type: "ADD_ITEM",
      payload: newTransaction,
    });
  };

  return (
    <GolbalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GolbalContext.Provider>
  );
};
