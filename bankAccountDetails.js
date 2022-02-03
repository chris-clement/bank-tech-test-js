class bankAccountDetails {
  constructor() {
  };
  addBalanceToHistory(history) {
    this.balance_amount = 0
    history.forEach(transaction => {
      this.balance_amount += transaction['credit'] - transaction['debit']
      transaction["balance"] = this.balance_amount
    });
    return history;
  };
};

module.exports = bankAccountDetails;