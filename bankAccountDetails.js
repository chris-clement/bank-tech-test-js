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
      ['credit', 'debit', 'balance'].forEach((number) => {
        if (transaction[number] == 0) {
          transaction[number] = '';
        } else {
          transaction[number] = transaction[number].toFixed(2)
        };
      });
    });
    
    return history
  };
  formatHistoryDate(history) {
    history.forEach((transaction) => {
      var dd = String(transaction['date'].getDate()).padStart(2, '0');
      var mm = String(transaction['date'].getMonth()).padStart(2, '0');
      var yyyy = String(transaction['date'].getFullYear());
      transaction['date'] = dd + '/' + mm + '/' + yyyy
    });
    return history
  };
  printStatement(history) {
    this.formatHistoryNumbers(history)
    console.log("date || credit || debit || balance\n" + 
    `${history[0]['date']} || ${history[0]['credit']} || ${history[0]['debit']} || ${history[0]['balance']}`)
  };
};

module.exports = bankAccountDetails;