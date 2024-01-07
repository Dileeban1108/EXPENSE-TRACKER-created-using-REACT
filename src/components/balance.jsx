import React, { useContext } from 'react';
import { globalContext } from './global';

const Balance = () => {
  const { transactions } = useContext(globalContext);

  // Calculate the total balance
  let total = 0;

  for (const transaction of transactions) {
    total += transaction.amount;
  }
  return (
    <div className='balance'>
      <h4>Your balance</h4>
      <h1>${total}</h1>
    </div>
  );
};

export default Balance;
