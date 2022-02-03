class bankAccountDetails {
  constructor() {
  };
  addBalanceToHistory(history) {
    this.balance_amount = history[0]['credit'] - history[0]['debit']
    history[0]["balance"] = this.balance_amount
    return history
  };
};

module.exports = bankAccountDetails;