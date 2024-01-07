import { useContext } from 'react';
import React  from 'react';
import { globalContext } from './global';
import Transaction from './transaction';

 const TransactionList = () => {
    const {transactions} =useContext(globalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction)=>(
           <Transaction key={transaction.id} transaction={transaction}/>
        ))}
      </ul>
    </>
  )
}
export default TransactionList;