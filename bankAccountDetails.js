class bankAccountDetails {
  constructor() {
  };
  addBalanceToHistory(history) {
    this.balance_amount = 0
    history.sort((transaction_a, transaction_b) => transaction_a.date >= transaction_b.date? 1 : -1);
    history.forEach(transaction => {
      this.balance_amount += transaction['credit'] - transaction['debit']
      transaction["balance"] = this.balance_amount
    });
    return history;
  };
};

module.exports = bankAccountDetails;