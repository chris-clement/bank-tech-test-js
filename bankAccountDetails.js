const formatTransactionHistory = require('./formatTransactionHistory.js')

class bankAccountDetails {
  constructor() {
    this.formatTransactionHistory = new formatTransactionHistory();
  };
  sortHistoryOldToNew(history) {
    history.sort((transaction_a, transaction_b) => transaction_a.date >= transaction_b.date? 1 : -1);
    return history;
  };
  sortHistoryNewToOld(history) {
    history.sort((transaction_a, transaction_b) => transaction_a.date < transaction_b.date? 1 : -1);
    return history;
  };
  addBalanceToHistory(history) {
    this.balance_amount = 0
    this.sortHistoryOldToNew(history)
    history.forEach(transaction => {
      this.balance_amount += transaction['credit'] - transaction['debit']
      transaction["balance"] = this.balance_amount
    });
    return history;
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
    this.sortHistoryNewToOld(history);
    this.addBalanceToHistory(history);
    this.formatTransactionHistory.formatHistoryNumbers(history);
    this.formatHistoryDate(history);
    console.log("date || credit || debit || balance\n");
    history.forEach((transaction) => {
      if(transaction['credit'] == '') {
        console.log(`${transaction['date']} ||${transaction['credit']} || ${transaction['debit']} || ${transaction['balance']}\n`);} else {
        console.log(`${transaction['date']} || ${transaction['credit']} ||${transaction['debit']} || ${transaction['balance']}\n`);}
    });
  };
};

module.exports = bankAccountDetails;