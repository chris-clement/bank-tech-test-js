class bankAccountDetails {
  constructor() {
  };
  sort_history_old_to_new(history) {
    history.sort((transaction_a, transaction_b) => transaction_a.date >= transaction_b.date? 1 : -1);
  };
  addBalanceToHistory(history) {
    this.balance_amount = 0
    this.sort_history_old_to_new(history)
    history.forEach(transaction => {
      this.balance_amount += transaction['credit'] - transaction['debit']
      transaction["balance"] = this.balance_amount
    });
    return history;
  };
  formatHistoryNumbers(history) {
    history.forEach((transaction) => {
      if (transaction['credit'] == 0) {
        transaction['credit'] = '';
      } 
      else {
        transaction['credit'] = transaction['credit'].toFixed(2);
      };
      if (transaction['debit'] == 0) {
        transaction['debit'] = '';
      } else {
        transaction['debit'] = transaction['debit'].toFixed(2);
      }
      if (transaction['balance'] == 0) {
        transaction['balance'] = '';
      } else {
        transaction['balance'] = transaction['balance'].toFixed(2);
      }
    })
    
    return history
  };
  printStatement() {
    console.log("date || credit || debit || balance");
  };
};

module.exports = bankAccountDetails;