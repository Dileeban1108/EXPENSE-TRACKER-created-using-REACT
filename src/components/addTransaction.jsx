import matchers from "@testing-library/jest-dom/matchers";
import React, { useContext, useState } from "react";
import { globalContext } from "./global";
const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { AddTransaction } = useContext(globalContext); 
  
const addText=(e)=>{
   e.preventDefault();

   const newTransaction={
    id:Math.floor(Math.random()*100000000),
    text,
    amount:+amount
   }
   AddTransaction(newTransaction);
}

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={addText}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
