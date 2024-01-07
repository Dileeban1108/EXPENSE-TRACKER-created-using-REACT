import React, { useContext, useState } from 'react';
import { globalContext } from './global';

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  const { DeleteTransaction, UpdateTransaction } = useContext(globalContext);

  const [updatedText, setUpdatedText] = useState(transaction.text);
  const [updatedAmount, setUpdatedAmount] = useState(Math.abs(transaction.amount).toString());

  const updateValue = (event) => {
    event.preventDefault();

    const newValue = {
      id: transaction.id,
      amount: parseFloat(updatedAmount) * (sign === '-' ? -1 : 1), // Convert to number and maintain sign
      text: updatedText,
    };

    UpdateTransaction(newValue);
  };

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        <form onSubmit={updateValue}>
          <input type="hidden" name="id" value={transaction.id} />
          <div className='inputCon'>
            <input
              className='inputBar'
              type="text"
              value={updatedText}
              onChange={(e) => setUpdatedText(e.target.value)}
            />
            <input
              className='inputBar'
              type="number"
              value={updatedAmount}
              onChange={(e) => setUpdatedAmount(e.target.value)}
            />
            <input type="submit" value='update' />
          </div>
        </form>
      <button onClick={() => { DeleteTransaction(transaction.id) }} className='delete-btn'> x</button>
    </li>
  );
};

export default Transaction;
