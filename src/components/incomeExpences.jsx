import React, { useContext } from 'react';
import { globalContext } from './global';
const IncomeExpenses = () => {
  const {transactions}=useContext(globalContext);
  let income=0,expense=0;
  for (const transaction of transactions) {
    transaction.amount > 0 ? (income += transaction.amount) : (expense += transaction.amount);
  }
  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">{Math.abs(income)}.00</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">{Math.abs(expense)}.00</p>
        </div>
      </div>
  )
}

export default IncomeExpenses;