// AppReducer.js
const AppReducer = (state, action) => {
  switch (action.type) {
    case 'add_transaction':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
    case 'delete_transaction':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      };
    case 'update_transaction':
      const updatedTransactions = state.transactions.map(transaction => {
        if (transaction.id === action.payload.id) {
          return {
            ...transaction,
            amount: action.payload.amount,
          };
        }
        return transaction;
      });

      return {
        ...state,
        transactions: updatedTransactions
      };
    // Other cases for different actions
    default:
      return state;
  }
};

export default AppReducer;
