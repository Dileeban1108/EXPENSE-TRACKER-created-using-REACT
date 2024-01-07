import React,{ createContext, useReducer } from "react";
import AppReducer from "./appReducer";

const initialState={
    transactions:[]
}


export const globalContext=createContext(initialState)

export const GlobalProvider=({children})=>{
    const [state,dispatch]= useReducer(AppReducer,initialState);

    const DeleteTransaction=(id)=>{
        dispatch({
            type:"delete_transaction",
            payload:id
        })
    }
    const UpdateTransaction=(id)=>{
        dispatch({
            type:"update_transaction",
            payload:id
        })
    }
    const AddTransaction=(transaction)=>{
        dispatch({
            type:"add_transaction",
            payload:transaction
        })
    }
    return (
    <globalContext.Provider value={{transactions: state.transactions,DeleteTransaction,AddTransaction,UpdateTransaction}}>
        {children}
    </globalContext.Provider>
    );
}
