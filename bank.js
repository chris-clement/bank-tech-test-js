const bankAccountDetails = require('./bankAccountDetails.js')

class Bank {
  constructor() {
    this.credit = 0;
    this.debit = 0;
    this.date = 0;
    this.transaction_history = [];
    this.bankAccountDetails = new bankAccountDetails();
  }
  deposit(amount, date = new Date()) {
    this.debit = 0;
    this.credit = amount;
    this.date = date;
    this.addToTransactionHistory();
  }
  withdraw(amount, date = new Date()) {
    this.credit = 0;
    this.debit = amount;
    this.date = date;
    this.addToTransactionHistory();
  }
  addToTransactionHistory() {
    this.transaction_history.push({ date: this.date, debit: this.debit, credit: this.credit})
  }
  printStatement() {
    this.bankAccountDetails.printStatement(this.transaction_history)
  }
}

module.exports = Bank